<?php

namespace Sau\WP\Plugin\Core\REST;

use Carbon_Fields\Field;
use Sau\WP\Plugin\Core\Carbon\Contacts as ContactsCarbon;
use Sau\WP\Plugin\Core\Carbon\Perception as PerceptionCarbon;
use Sau\WP\Plugin\Core\MO;
use WP_REST_Controller;
use WP_REST_Response;

class Perception extends WP_REST_Controller
{
    /** @var string */
    protected $namespace = 'hs';

    /** @var string */
    protected $rest_base = 'perception';
    /**
     * @var PerceptionCarbon
     */
    private $perception;

    public function __construct(PerceptionCarbon $perception)
    {
        $this->perception = $perception;
    }

    public function register_routes()
    {
        register_rest_route(
            $this->namespace,
            "/".$this->rest_base."/",
            [
                [
                    'methods'  => 'GET',
                    'callback' => [$this, 'perception'],
                ],
            ]
        );
    }

    public function perception(): WP_REST_Response
    {
        $post_id = get_option('perception_page');
        $lang = MO::getLng() == 'ru' ? '' : MO::getLng().'_';
        $post    = pll_get_post_translations($post_id)[ MO::getLng() ] ?? $post_id;
        $meta    = $this->perception->getData($post);

        //TODO: Write your code this
        $data = [
            //            'meta'   => $meta,
            'header' => [
                'breadcrumbs'      => [
                    [
                        'text' => MO::mo()
                                    ->translate('Главная'),
                        'link' => '/',
                    ],
                    [
                        'text' => MO::mo()
                                    ->translate('Сферы восприятия'),
                    ],
                ],
                'title'            => [
                    'text' => MO::mo()->translate($meta[ 'title' ]),
                ],
                'subtitle'         => MO::mo()->translate($meta[ 'subtitle' ]),
                'background_block' => [
                    'type' => 'img',
                    'data' => [
                        'name' => 'ph1',
                    ],
                ],
            ],

            'perception' => $this->getPerception($meta[ 'perception' ]),

            'content_block' => [
                [ //1
                    'content' => [
                        'text_block' => [
                            'mod'     => '_line',
                            'content' => strip_tags(MO::mo()->translate($meta["content_{$lang}1"]),'<p><h3>'),
                        ],
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
                            'content' =>  strip_tags(MO::mo()->translate($meta["content_{$lang}2"]),'<p><h3>'),
                        ],
                    ],

                    'background_block' => [
                        'type' => 'img',

                        'data' => [
                            'name' => 'pp3',
                        ],
                    ],
                ],
            ],

            'help_block' => [
                'title' => MO::mo()->translate('Хотите создать уникальный SPA в вашем доме?'),

                'button' => [
                    'text' => MO::mo()->translate('создать spa'),
                    'link' => '/realization#configurator',
                ],

                'bg_text' => [
                    'level'    => '0',
                    'position' => 'prefix',
                    'text'     => 'Home Spa',
                ],

                'background_block' => [
                    'type' => 'img',

                    'data' => [
                        'name' => 'pp2',
                    ],
                ],
            ],
        ];

        return new WP_REST_Response($data);
    }

    private function getPerception($perception)
    {
        $list = [
            'list' => [],
        ];
        if ($perception) {
            foreach ($perception as $item) {
                $list_item = [
                    'title' => MO::mo()->translate($item[ 'title' ]),

                    'link_more' => MO::mo()->translate($item[ 'link_more' ]),
                ];

                $popup_data = [
                    'title'   => MO::mo()->translate($item[ 'popup_title' ]) ?: MO::mo()->translate($item[ 'title' ]),
                    'bg_text' => [
                        'level'    => '1',
                        'position' => 'start',
                        'align'    => 'left-0',
                        'text'     => MO::mo()->translate($item[ 'popup_background_text' ]),
                    ],
                ];
                switch ($item[ 'popup_background_type' ]):
                    case 'video':
                        unset($popup_data[ 'bg_text' ]);
                        $popup_data[ 'background_block' ] = [
                            'type' => 'video',

                            'poster' => [
                                'desk' => wp_get_attachment_url($item[ 'popup_poster_desk' ]),
                                'mob'  => wp_get_attachment_url($item[ 'popup_poster_mob' ]),
                            ],

                            'data' => [
                                'url' => [
                                    'desk' => [
                                        'mp4'  => wp_get_attachment_url($item[ 'popup_data_desc_mp4' ]),
                                        'webm' => wp_get_attachment_url($item[ 'popup_data_desc_webm' ]),
                                    ],
                                    'mob'  => [
                                        'mp4'  => wp_get_attachment_url($item[ 'popup_data_mob_mp4' ]),
                                        'webm' => wp_get_attachment_url($item[ 'popup_data_mob_webm' ]),
                                    ],
                                ],
                            ],
                        ];
                        break;
                    case 'img':
                        $popup_data[ 'background_block' ] = [
                            'type' => 'img',

                            'data' => [
                                'stop_animation' => false,
                                'name'           => 'bb',
                            ],
                        ];
                        break;
                endswitch;
                $popup_data[ 'content' ] = [
                    'text_block' => [
                        'content' => "<p>".MO::mo()->translate(strip_tags($item[ 'popup_content' ]))."</p>",
                    ],
                ];
                if ($item[ 'popup_music' ]) {
                    $popup_data[ 'content' ] [ 'music' ] = [
                        'autoplay' => true,

                        'button_text' => [
                            'prefix'     => 'music',
                            'suffix_on'  => 'on',
                            'suffix_off' => 'off',
                        ],

                        'url' => wp_get_attachment_url($item[ 'popup_music' ]),
                    ];
                }
                $list_item[ 'popup_data' ] = $popup_data;
                $list[ 'list' ][]          = $list_item;

            }
        }

        return $list;
    }
}
