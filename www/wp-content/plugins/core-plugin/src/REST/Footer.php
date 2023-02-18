<?php

namespace Sau\WP\Plugin\Core\REST;

use Carbon_Fields\Field;
use Sau\WP\Plugin\Core\MO;
use WP_REST_Controller;
use WP_REST_Response;

class Footer extends WP_REST_Controller
{
    /** @var string */
    protected $namespace = 'hs';

    /** @var string */
    protected $rest_base = 'footer';

    public function register_routes()
    {
        register_rest_route(
            $this->namespace,
            "/".$this->rest_base."/",
            [
                [
                    'methods'  => 'GET',
                    'callback' => [$this, 'footer'],
                ],
            ]
        );
    }

    public function footer(): WP_REST_Response
    {
        //TODO: Write your code this
        $data = [
            'social' => [
                [
                    'icon'          => 'telegram',
                    'text'          => MO::mo()->translate('telegram'),
                    'link'          => carbon_get_theme_option('telegram'),
                    'gradient_fill' => true,
                ],
                [
                    'icon'          => 'instagram',
                    'text'          => MO::mo()->translate('instagram'),
                    'link'          => carbon_get_theme_option('instagram'),
                    'gradient_fill' => true,
                ],
                [
                    'icon'          => 'facebook',
                    'text'          => MO::mo()->translate('facebook'),
                    'link'          => carbon_get_theme_option('facebook'),
                    'gradient_fill' => true,
                ],
            ],

            'copyright' => MO::mo()->translate('© 2019. HomeSpaDesign by Mikhailov Aleksandr'),
        ];

        return new WP_REST_Response($data);
    }
}
