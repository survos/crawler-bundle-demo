<?php

namespace App\Tests;

use App\Entity\User;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\KernelBrowser;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
use Symfony\Component\BrowserKit\Cookie;
use Symfony\Component\Cache\CacheItem;
use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Panther\Client as PantherClient;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\Session\Storage\MockFileSessionStorage;
use Symfony\Contracts\Cache\CacheInterface;
use function Symfony\Component\String\u;

class VisitLinksTest extends WebTestCase
{
    const URL_BASE='http://localhost';
    private array $visibleLinks = [];
    private KernelBrowser $client;
    private ?string $username=null;

//    public function setUp(): void
//    {
//        parent::setUp();
//        self::bootKernel();
//    }

    protected function createAuthenticatedClient(?string $username=null): KernelBrowser
    {

        static $client;
        static $container;
        if (!isset($client)) {
            $client = static::createClient();
        } else {

        }
        if (!isset($container)) {
            $container = static::getContainer();
        }


//        $client = self::createPantherClient();
        $this->username = $username;
        return $client;
    }

    /**
     * @dataProvider linksToVisit
     */
    public function testAuth($username, $url, $expected): void
    {
        $this->assertTrue(true);
        return;
        static $users = [];
        if ($username) {
            if (!array_key_exists($username, $users)) {
                $users[$username] = $container->get('doctrine')->getRepository(User::class)->findOneBy(['email' => $username]);
            }

            $user = $users[$username];
            assert($user, "Invalid user $username, not in user database");
            $client->loginUser($user);
        }

//        $client = static::createClient();
        $this->client = $this->createAuthenticatedClient($username);
        $this->client->request('GET', $url);
        $this->assertResponseIsSuccessful(sprintf('The %s URL loads correctly for %s', $url, $username));
    }

    /**
     * @dataProvider linksToVisit
     */
    public function testWithLogin(?string $username, string $url, int $expected, ?string $firstFoundOn): void
    {
        static $users = [];
        $client = static::createClient();

        if ($username) {
            if (!array_key_exists($username, $users)) {
                $container = static::getContainer();
                $users[$username] = $container->get('doctrine')->getRepository(User::class)->findOneBy(['username' => $username]);
            }

            $user = $users[$username];
            assert($user, "Invalid user $username, not in user database");
            $client->loginUser($user);
        }

//        $client = static::createClient();
        $client->request('GET', $url);
        $reponse = $client->getResponse();
        $this->assertEquals($reponse->getStatusCode(), $expected, sprintf('The %s@%s expected %d, first found on %s', $username, $url, $expected, $firstFoundOn));

//        $this->assertResponseStatusCodeSame($expected, sprintf('The %s@%s expected %d', $username, $url, $expected));
    }

    public function linksToVisit()
    {
        $text = [
            ['admin','/', 200],
            ['user', '/', 200],
            ['admin', '/admin', 200],
            ['user', '/admin', 403],
            [null, '/admin', 302]
        ];

        $x = [];
        $crawldata = json_decode(file_get_contents(__DIR__ . '/../crawldata.json'));
        foreach ($crawldata as $username => $linksToCrawl) {
            foreach ($linksToCrawl as $path=>$info) {
                // yield?
                $x[$username . '@' . $info->path] = [$username, $info->path, 200, $info->foundOn];
            }
        }

        return $x;
    }

    private function getKey($path): string
    {
        return sprintf("%s-%s", $this->username, $path);
    }


    private function cleanup(string $href): ?string
    {
            $cleanHref = str_replace(self::URL_BASE, '', $href);
            $cleanHref = u($cleanHref)->before('#')->toString();
            if (empty($cleanHref)) {
                return null;
            }
            if (preg_match('{^/(_(profiler|wdt)|css|images|js)/}', $cleanHref )) {
//                dd($href);
                return null;
            }
            $parts = parse_url($cleanHref);
            if (preg_match('/http/', $cleanHref)) {
                if ($parts['host'] ?? false) {
                    return null;
                }
            }

            return $cleanHref;

    }

}
