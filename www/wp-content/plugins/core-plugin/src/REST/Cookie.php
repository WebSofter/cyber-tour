<?php

namespace Sau\WP\Plugin\Core\REST;

use Carbon_Fields\Field;
use Sau\WP\Plugin\Core\MO;
use WP_REST_Controller;
use WP_REST_Response;

class Cookie extends WP_REST_Controller
{
    /** @var string */
    protected $namespace = 'hs';

    /** @var string */
    protected $rest_base = 'cookie';

    public function register_routes()
    {
        register_rest_route(
            $this->namespace,
            "/".$this->rest_base."/",
            [
                [
                    'methods'  => 'GET',
                    'callback' => [$this, 'cookie'],
                ],
            ]
        );
    }

    public function cookie(): WP_REST_Response
    {
        //TODO: Write your code this
        $data = [
            'text'            => MO::mo()
                                   ->translate(
                                       'We use cookies on our website to improve its functionality and to enhance your user experience. We also use cookies for analytics. If you continue to browse this website, we will assume you agree that we can place cookies on your device. If you would like to, you can change your cookie options at any time.'
                                   ),
            'button_agree'    => MO::mo()
                                   ->translate('I agree'),
            'button_disagree' => MO::mo()
                                   ->translate('Close'),
        ];

        return new WP_REST_Response($data);
    }
}
