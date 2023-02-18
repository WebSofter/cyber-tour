<?php

namespace Sau\WP\Plugin\Core\REST;

use Carbon_Fields\Field;
use Sau\WP\Plugin\Core\MO;
use WP_REST_Controller;
use WP_REST_Response;

class Header extends WP_REST_Controller
{
    /** @var string */
    protected $namespace = 'hs';

    /** @var string */
    protected $rest_base = 'header';

    public function register_routes()
    {
        register_rest_route(
            $this->namespace,
            "/".$this->rest_base."/",
            [
                [
                    'methods'  => 'GET',
                    'callback' => [$this, 'header'],
                ],
            ]
        );
    }

    public function header(): WP_REST_Response
    {
        $lang = 'en';
        if (isset($_GET[ 'lang' ]) && $_GET[ 'lang' ] == 'en') {
            $lang = 'ru';
        }
        $data = [
            'logo' => [
                'img'  => '/media/logo/logo_homespadesign.svg',
                'link' => '/',
                'alt'  => 'logo',
            ],
            //'lsng' => MO::mo(),
            'menu' => [
                [
                    'link' => '/philosophy',
                    'text' => MO::mo()
                                ->translate('философия'),
                ],
                [
                    'link' => '/perception',
                    'text' => MO::mo()
                                ->translate('сферы восприятия'),
                ],
                [
                    'link' => '/realization',
                    'text' => MO::mo()
                                ->translate('воплощение'),
                ],
                [
                    'link' => '/projects',
                    'text' => MO::mo()
                                ->translate('проекты'),
                ],
                [
                    'link' => '/partnership',
                    'text' => MO::mo()
                                ->translate('партнерам'),
                ],
                [
                    'link' => '/contacts',
                    'text' => MO::mo()
                                ->translate('контакты'),
                ],


            ],

            'lang' => [
                'cookie_name' => 'site-lang',
                'btn_text'    => strtoupper($lang),
                'val'         => $lang,
            ],
        ];

        return new WP_REST_Response($data);
    }
}
