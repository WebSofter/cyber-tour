<?php

namespace Sau\WP\Plugin\Core\REST;

use Carbon_Fields\Field;
use Sau\WP\Plugin\Core\MO;
use WP_REST_Controller;
use WP_REST_Response;

class Menu extends WP_REST_Controller
{
    /** @var string */
    protected $namespace = 'hs';
    public $tg_chanel = 'telegram channel';
    /** @var string */
    protected $rest_base = 'menu';

    public function register_routes()
    {
        register_rest_route(
            $this->namespace,
            "/".$this->rest_base."/",
            [
                [
                    'methods'  => 'GET',
                    'callback' => [$this, 'menu'],
                ],
            ]
        );
    }

    public function menu(): WP_REST_Response
    {
        $lang = $_GET[ 'lang' ];
        //$lang    = MO::getLng() == 'ru' ? '' : MO::getLng().'_';
        /*
        switch($lang){
            case '': $this->tg_chanel = 'телеграм канал';
            break;
            case 'en': $this->tg_chanel = 'telegram channel';
            break;
            case 'de': $this->tg_chanel = 'Telegramm kanal';
            break;
            case 'fr': $this->tg_chanel = 'canal de télégramme';
            break;
            case 'it': $this->tg_chanel = 'canale telegramma';
            break;
            case 'ar': $this->tg_chanel = 'قناة برقية';
            break;
            case 'it': $this->tg_chanel = 'canal de télégramme';
            break;
            case 'zh': $this->tg_chanel = '电报频道';
            break;
        }
        */
        //TODO: Write your code this
        $data = [
            'music' => [
                'button_text' => [
                    'prefix'     => 'music',
                    'suffix_on'  => 'on',
                    'suffix_off' => 'off',
                ],

                'main' => true,

                'url' => '/media/audio/3.mp3',
            ],

            'scroll_hint' => 'scroll',

            'soc_button' => [
                'icon' => 'telegram',
                'text' => '',//$this->tg_chanel, //MO::mo()->translate($this->tg_chanel),
                'link' => carbon_get_theme_option('tlgrm'),
            ],
        ];

        return new WP_REST_Response($data);
    }
}
