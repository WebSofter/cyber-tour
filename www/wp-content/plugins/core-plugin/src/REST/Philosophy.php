<?php

namespace Sau\WP\Plugin\Core\REST;

use Carbon_Fields\Field;
use Sau\WP\Plugin\Core\Carbon\Philosophy as PhilosophyCarbon;
use Sau\WP\Plugin\Core\MO;
use WP_REST_Controller;
use WP_REST_Response;

class Philosophy extends WP_REST_Controller
{
    /** @var string */
    protected $namespace = 'hs';

    /** @var string */
    protected $rest_base = 'philosophy';
    /**
     * @var PhilosophyCarbon
     */
    private $philosophy;

    public function __construct(PhilosophyCarbon $philosophy)
    {
        $this->philosophy = $philosophy;
    }

    public function register_routes()
    {
        register_rest_route(
            $this->namespace,
            "/".$this->rest_base."/",
            [
                [
                    'methods'  => 'GET',
                    'callback' => [$this, 'philosophy'],
                ],
            ]
        );
    }

    public function philosophy(): WP_REST_Response
    {
        $post_id = get_option('philosophy_page');
        $lang    = MO::getLng() == 'ru' ? '' : MO::getLng().'_';
        $post    = pll_get_post_translations($post_id)[ MO::getLng() ] ?? $post_id;
        $meta    = $this->philosophy->getData($post);
        $data    = [
            'meta'   => $meta,
            'header' => [
                'breadcrumbs' => [
                    [
                        'text' => MO::mo()
                                    ->translate('Главная'),
                        'link' => '/',
                    ],
                    [
                        'text' => MO::mo()
                                    ->translate('Философия'),
                    ],
                ],

                'title' => [
                    'text' => MO::mo()
                                ->translate('философия'),
                ],


                'background_block' => [
                    'type' => 'img',

                    'data' => [
                        'name' => 'ph1',
                    ],
                ],
            ],

            'philosophy' => [
                'title' => $meta[ "philosophy_{$lang}title" ],

                'list' => [],

            ],
        ];
        foreach ($meta[ 'philosophy_list' ] as $item) {
            $data[ 'philosophy' ][ 'list' ][] = MO::mo()->translate($item[ 'text' ]);
        }
        $data[ 'content_block' ] = [
            [ //1
                'content' => [
                    'text_block' => [
                        'mod'     => '_line',
                        'content' => $meta[ "philosophy_content_{$lang}1_content" ],
                    ],
                ],

                'bg_text' => [
                    'level'    => '0',
                    'position' => 'suffix',
                    'align'    => 'left',
                    'text'     => MO::mo()->translate($meta[ "philosophy_content_{$lang}1_bg_text" ]),
                ],

                'background_block' => [
                    'type' => 'img',

                    'data' => [
                        'name' => 'ph2',
                    ],
                ],
            ],
            [ //2
                'content' => [
                    'text_block' => [
                        'mod'     => '_line',
                        'content' => MO::mo()->translate($meta[ "philosophy_content_{$lang}2_content" ]),
                    ],
                ],

                'background_block' => [
                    'type' => 'img',

                    'data' => [
                        'name' => 'ph2',
                    ],
                ],
            ],
            [ //3
                'content' => [
                    'text_block' => [
                        'mod'     => '_line',
                        'content' => $meta[ "philosophy_content_{$lang}3_content" ],
                    ],
                ],

                'background_block' => [
                    'type' => 'img',

                    'data' => [
                        'name' => 'pp3',
                    ],
                ],
            ],
            [ //4
                'content' => [
                    'text_block' => [
                        'mod'     => '_line',
                        'content' => $meta[ "philosophy_content_{$lang}4_content" ],
                    ],
                ],

                'background_block' => [
                    'type' => 'img',

                    'data' => [
                        'name' => 'pp2',
                    ],
                ],

                'component' => [
                    'name' => 'TwinBubble',
                ],
            ],

            [ //5
                'mono' => true,

                'content' => [
                    'text_block' => [
                        'mod'     => '_ta-center',
                        'content' => $meta[ "philosophy_content_{$lang}5_content" ],
                    ],
                ],

                'background_block' => [
                    'type' => 'img',

                    'data' => [
                        'name' => 'pp3',
                    ],
                ],
            ],
        ];

        $data[ 'help_block' ] = [
            'title'  => MO::mo()
                          ->translate('Мы стремимся создавать частные SPA-пространства самого высокого уровня'),
            'text'   => MO::mo()
                          ->translate(
                              'целью которых на долгие годы вперед станет восполнение жизненных сил, придание энергии для движения вперед, получение эмоции и реализация желаний, где важна каждая деталь и на которых не оправданно экономить!'
                          ),
            'button' => [
                'text' => MO::mo()
                            ->translate('получить портфолио'),

                'popup_data' => [
                    //'close_btn' => 'Закрыть',

                    'bg_text' => [
                        'level'    => '1',
                        'position' => 'start',
                        'align'    => 'left-0',
                        'text'     => 'Get in touch',
                    ],

                    'content' => [
                        'form' => [
                            'title'    => MO::mo()
                                            ->translate('Отправьте заявку'),
                            'subtitle' => MO::mo()
                                            ->translate('И наш менеджер свяжется с Вами в самое ближайшее время'),

                            'button' => [
                                'text' => MO::mo()
                                            ->translate('Отправить заявку'),
                            ],

                            'conf' => do_shortcode(
                                sprintf(
                                    '<p>%s</p>',
                                    'Нажимая, на кнопку Вы соглашаетесь с [pp]политикой конфиденциальности[/pp]'
                                )
                            ),

                            "fields" => [
                                [
                                    "name"  => "topic",
                                    "value" => "Request",
                                    "label" => MO::mo()
                                                 ->translate("Тема письма"),
                                    "type"  => "hidden",
                                ],
                                [
                                    "name"       => "name",
                                    "label"      => MO::mo()
                                                      ->translate("Представьтесь, пожалуйста"),
                                    "required"   => true,
                                    "validation" => [
                                        "properties" => [
                                            "type"   => "string",
                                            "chains" => [
                                                [
                                                    "type"  => "required",
                                                    "error" => MO::mo()
                                                                 ->translate("Укажите имя"),
                                                ],
                                            ],
                                        ],
                                    ],
                                ],
                                [
                                    "name"       => "phone",
                                    "label"      => MO::mo()
                                                      ->translate("Ваш телефон"),
                                    "required"   => true,
                                    "validation" => [
                                        "properties" => [
                                            "type"   => "string",
                                            "chains" => [
                                                [
                                                    "type"  => "required",
                                                    "error" => MO::mo()
                                                                 ->translate("Укажите телефон"),
                                                ],
                                            ],
                                        ],
                                    ],
                                ],
                                [
                                    "type"         => "email",
                                    "name"         => "email",
                                    "label"        => MO::mo()
                                                        ->translate("Ваш e-mail"),
                                    "required"     => true,
                                    "autocomplete" => "email",
                                    "validation"   => [
                                        "properties" => [
                                            "type"   => "string",
                                            "chains" => [
                                                [
                                                    "type"  => "required",
                                                    "error" => MO::mo()
                                                                 ->translate("Укажите e-mail"),
                                                ],
                                                [
                                                    "type"  => "email",
                                                    "error" => MO::mo()
                                                                 ->translate("Некорректный e-mail"),
                                                ],
                                            ],
                                        ],
                                    ],
                                ],
                                [
                                    "name"       => "city",
                                    "label"      => MO::mo()
                                                      ->translate("Введите ваш город"),
                                    "required"   => true,
                                    "validation" => [
                                        "properties" => [
                                            "type"   => "string",
                                            "chains" => [
                                                [
                                                    "type"  => "required",
                                                    "error" => MO::mo()
                                                                 ->translate("Укажите город"),
                                                ],
                                            ],
                                        ],
                                    ],
                                ],
                            ],

                            'ty_popup_data' => [
                                'title' => MO::mo()
                                             ->translate('Спасибо за вашу заявку!'),
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                        <p>'.MO::mo()
                                               ->translate(
                                                   'Мы очень ценим каждого клиента, поэтому наши эксперты уже обрабатывают вашу заявку. Скоро мы свяжемся и воплотим ваши идеи!'
                                               ).'</p>
                                    ',
                                    ],
                                ],
                            ],
                        ],
                    ],
                ],
            ],

            'bg_text' => [
                'level'    => '0',
                'position' => 'prefix',
                'align'    => 'right',
                'text'     => 'Yours',
            ],
        ];

        return new WP_REST_Response($data);
    }
}
