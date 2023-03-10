<?php

namespace Sau\WP\Plugin\Core\REST;

use Carbon_Fields\Field;
use Sau\WP\Plugin\Core\Carbon\Contacts as ContactsCarbon;
use Sau\WP\Plugin\Core\Carbon\Homepage as HomepageCarbon;
use Sau\WP\Plugin\Core\MO;
use WP_REST_Controller;
use WP_REST_Response;

class Homepage extends WP_REST_Controller
{
    /** @var string */
    protected $namespace = 'hs';

    /** @var string */
    protected $rest_base = 'homepage';
    /**
     * @var ContactsCarbon
     */
    private $homepage;

    public function __construct(HomepageCarbon $homepage)
    {
        $this->homepage = $homepage;
    }

    public function register_routes()
    {
        register_rest_route(
            $this->namespace,
            "/".$this->rest_base."/",
            [
                [
                    'methods'  => 'GET',
                    'callback' => [$this, 'homepage'],
                ],
            ]
        );
    }

    public function homepage(): WP_REST_Response
    {

        $post_id = get_option('index_page');
        $lang    = MO::getLng() == 'ru' ? '' : MO::getLng().'_';
        $post_id = pll_get_post_translations($post_id)[ MO::getLng() ] ?? $post_id;
        $meta    = $this->homepage->getData($post_id);
        $data = [
            'banner' => [
                'title'       => $meta[ "banner_title{$lang}" ],
                'subtitle'    => $meta[ "banner_subtitle{$lang}" ],
                'label'       => $meta[ "banner_label{$lang}" ],
                'bubble_text' => $meta[ "banner_bubble_text{$lang}" ],

                'background_block' => [
                    'type' => 'img',

                    'data' => [
                        'name' => 'hp1',
                    ],
                ],
            ],

            'content_block' => [
                [
                    'content' => [
                        'mod'        => 'narrow',
                        'text_block' => [
                            'mod'     => '_line',
                            'content' => strip_tags($meta[ "content_block_1_{$lang}content" ], '<p><h3>'),
                        ],
                    ],

                    'bg_text' => [
                        'level'    => '0',
                        'position' => 'prefix',
                        'align'    => 'right',
                        'text'     => $meta[ "content_block_1_{$lang}bg_text" ],
                    ],

                    'background_block' => [
                        'type' => 'img',

                        'data' => [
                            'name' => 'hp5',
                        ],
                    ],

                    'component' => [
                        'name' => 'VideoBubble',

                        'data' => [
                            'popup_data' => [
                                'content' => [
                                    'video' => [
                                        'id'          => $meta[ "content_block_1_{$lang}video_id" ],
                                        'lang'        => MO::getLng(), //default en
                                        'player_vars' => [
                                            'origin' => '#',
                                        ],
                                    ],
                                ],
                            ],

                            'preview' => [
                                'desk' => wp_get_attachment_url($meta[ "content_block_1_{$lang}prev_desk" ]),
                                'mod'  => wp_get_attachment_url($meta[ "content_block_1_{$lang}prev_mod" ]),
                            ],
                        ],
                    ],
                ],
                [
                    'content' => [
                        'mod'        => 'narrow',
                        'text_block' => [
                            'mod'     => '_line',
                            'content' => strip_tags($meta[ "content_block_2_{$lang}content" ], '<p><h3>'),

                        ],
                    ],


                    'background_block' => [
                        'type' => 'video',

                        'poster' => [
                            'desk' => wp_get_attachment_url($meta[ "content_block_2_{$lang}poster_desk" ]),
                            'mob'  => wp_get_attachment_url($meta[ "content_block_2_{$lang}poster_mob" ]),
                        ],

                        'data' => [
                            'preload'            => 'none',
                            'disable_on_ios'     => false,
                            'disable_on_windows' => false,

                            'url' => [
                                'desk' => [
                                    'mp4'  => wp_get_attachment_url($meta[ "content_block_2_{$lang}data_desc_mp4" ]),
                                    'webm' => wp_get_attachment_url($meta[ "content_block_2_{$lang}data_desc_webm" ]),
                                ],
                                'mob'  => [
                                    'mp4'  => wp_get_attachment_url($meta[ "content_block_2_{$lang}data_mob_mp4" ]),
                                    'webm' => wp_get_attachment_url($meta[ "content_block_2_{$lang}data_mob_webm" ]),
                                ],
                            ],
                        ]
                        //content_block_2_data_mob_
                    ],
                ],
                [
                    'content' => [
                        'mod'        => 'narrow',
                        'text_block' => [
                            'mod'     => '_line',
                            'content' => strip_tags($meta[ "content_block_3_{$lang}content" ], '<p><h3>'),

                        ],
                    ],
                    'bg_text' => [
                        'level'    => '1',
                        'position' => 'bottom',
                        'align'    => 'left',
                        'text'     => $meta[ "content_block_3_{$lang}bg_text" ],
                    ],

                    'background_block' => [
                        'type' => 'img',

                        'data' => [
                            'name' => 'hp3',
                            'mod'  => 'top',
                        ],
                    ],
                ],
                [
                    'content' => [
                        'text_block' => [
                            'mod'     => '_line',
                            'content' => strip_tags($meta[ "content_block_4_{$lang}content" ], '<p><h3>'),

                        ],
                    ],

                    'background_block' => [
                        'type' => 'img',

                        'data' => [
                            'name' => 'hp4',
                            'mod'  => 'top',
                        ],
                    ],

                    'component' => [
                        'name' => 'Bubbles',

                        'data' => [
                            'text' => $meta[ "content_block_4_{$lang}bauble_text" ],
                        ],
                    ],
                ],
                [
                    'content' => [
                        'text_block' => [
                            'content' => strip_tags($meta[ "content_block_5_{$lang}content" ], '<p><h3>'),

                        ],

                        'button' => [
                            'link' => $meta[ "content_block_5_{$lang}buttonuri" ],
                            'text' => $meta[ "content_block_5_{$lang}buttontext" ],
                            'mod'  => '_border',
                        ],
                    ],

                    'bg_text' => [
                        'level'    => '1',
                        'position' => 'bottom',
                        'text'     => $meta[ "content_block_5_{$lang}bg_text" ],
                    ],

                    'component' => [
                        'name' => 'BigBubbleLink',

                        'data' => [
                            'text' => MO::mo()
                                        ->translate('???????????????? ???????? ???????????????????????? SPA'),
                            'link' => '/realization#configurator',
                        ],
                    ],
                ],
            ],
            'help_block'    => [
                'title'            => MO::mo()->translate('???????????????? ?????????????????????? ?? ?????????????????? ?????????? ?????????? ????????????'),
                'text'             => MO::mo()->translate('????????????????????????, ????????????????????????, ??????????????... ?????? ?????????? ??????????????, ?????? ???????????? SPA'),
                'button'           => [
                    'text' => MO::mo()->translate('???????????????? ??????????????????'),

                    'popup_data' => [
                        //'close_btn' => '??????????????',


                        'bg_text' => [
                            'level'    => '1',
                            'position' => 'start',
                            'align'    => 'left-0',
                            'text'     => 'Get in touch',
                        ],

                        'content' => [
                            'form' => [
                                'title'    => MO::mo()->translate('?????????????????? ????????????'),
                                'subtitle' => MO::mo()->translate('?? ?????? ???????????????? ???????????????? ?? ???????? ?? ?????????? ?????????????????? ??????????'),

                                'button' => [
                                    'text' => MO::mo()->translate('?????????????????? ????????????'),
                                ],

                                'conf' => do_shortcode(
                                    sprintf(
                                        '<p>%s</p>',
                                        '??????????????, ???? ???????????? ???? ???????????????????????? ?? [pp]?????????????????? ????????????????????????????????????[/pp]'
                                    )
                                ),

                                "fields" => [
                                    [
                                        "name"  => "topic",
                                        "value" => "Request",
                                        "label" => MO::mo()->translate("???????? ????????????"),
                                        "type"  => "hidden",
                                    ],
                                    [
                                        "name"       => "name",
                                        "label"      => MO::mo()->translate("??????????????????????????, ????????????????????"),
                                        "required"   => true,
                                        "validation" => [
                                            "properties" => [
                                                "type"   => "string",
                                                "chains" => [
                                                    [
                                                        "type"  => "required",
                                                        "error" => MO::mo()->translate("?????????????? ??????"),
                                                    ],
                                                ],
                                            ],
                                        ],
                                    ],
                                    [
                                        "name"       => "phone",
                                        "label"      => MO::mo()->translate("?????? ??????????????"),
                                        "required"   => true,
                                        "validation" => [
                                            "properties" => [
                                                "type"   => "string",
                                                "chains" => [
                                                    [
                                                        "type"  => "required",
                                                        "error" => MO::mo()->translate("?????????????? ??????????????"),
                                                    ],
                                                ],
                                            ],
                                        ],
                                    ],
                                    [
                                        "type"         => "email",
                                        "name"         => "email",
                                        "label"        => MO::mo()->translate("?????? e-mail"),
                                        "required"     => true,
                                        "autocomplete" => "email",
                                        "validation"   => [
                                            "properties" => [
                                                "type"   => "string",
                                                "chains" => [
                                                    [
                                                        "type"  => "required",
                                                        "error" => MO::mo()->translate("?????????????? e-mail"),
                                                    ],
                                                    [
                                                        "type"  => "email",
                                                        "error" => MO::mo()->translate("???????????????????????? e-mail"),
                                                    ],
                                                ],
                                            ],
                                        ],
                                    ],
                                    [
                                        "name"       => "city",
                                        "label"      => MO::mo()->translate("?????????????? ?????? ??????????"),
                                        "required"   => true,
                                        "validation" => [
                                            "properties" => [
                                                "type"   => "string",
                                                "chains" => [
                                                    [
                                                        "type"  => "required",
                                                        "error" => MO::mo()->translate("?????????????? ??????????"),
                                                    ],
                                                ],
                                            ],
                                        ],
                                    ],
                                ],

                                'ty_popup_data' => [
                                    'title' => MO::mo()->translate('?????????????? ???? ???????? ????????????!'),
                                    //'close_btn' => '??????????????',

                                    'content' => [
                                        'text_block' => [
                                            'content' => '
                                        <p>'.MO::mo()->translate(
                                                    '???? ?????????? ?????????? ?????????????? ??????????????, ?????????????? ???????? ???????????????? ?????? ???????????????????????? ???????? ????????????. ?????????? ???? ???????????????? ?? ???????????????? ???????? ????????!').'</p>
                                    ',
                                        ],
                                    ],
                                ],
                            ],
                        ],
                    ],
                ],
                'background_block' => [
                    'type' => 'img',

                    'data' => [
                        'name' => 'hp5',
                    ],
                ],
            ],
        ];

        return new WP_REST_Response($data);
    }
}
