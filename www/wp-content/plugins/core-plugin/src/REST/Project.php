<?php

namespace Sau\WP\Plugin\Core\REST;

use Carbon_Fields\Field;
use Sau\WP\Plugin\Core\Carbon\Contacts as ContactsCarbon;
use Sau\WP\Plugin\Core\Carbon\Perception as PerceptionCarbon;
use Sau\WP\Plugin\Core\Carbon\Product as ProductCarbon;
use Sau\WP\Plugin\Core\MO;
use Sau\WP\Plugin\Core\PostType\Product;
use WP_REST_Controller;
use WP_REST_Request;
use WP_REST_Response;

class Project extends WP_REST_Controller
{
    /** @var string */
    protected $namespace = 'hs';

    /** @var string */
    protected $rest_base = 'project';
    /**
     * @var PerceptionCarbon
     */
    private $perception;

    public function __construct(ProductCarbon $perception)
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
                    'methods'  => 'POST',
                    'callback' => [$this, 'project'],
                ],
            ]
        );
    }

    public function project(WP_REST_Request $request): WP_REST_Response
    {
        $data = json_decode($request->get_body());

        $post_id = $data->id;
        $post    = pll_get_post_translations($post_id)[ MO::getLng() ] ?? $post_id;
        $meta    = $this->perception->getData($post);
        //TODO: Write your code this
        $data = array_merge(
            [
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
                                        ->translate('Проекты'),
                            'link' => '/projects',
                        ],
                        [
                            'text' => get_the_title($post),
                        ],
                    ],

                    'title' => [
                        'text' => get_the_title($post),
                    ],
                ],

                'bg_slider' => [
                    'background_block' => [
                        'type' => 'img',

                        'data' => [
                            'name' => 'pp1',
                            'mod'  => 'center-bottom',
                        ],
                    ],

                    'list' => $this->getBgSlider($meta),
                ],

                'description' => [
                    'aside_text' => $meta[ 'content_aside' ],

                    'text_block' => [
                        'content' => $meta[ 'content_content' ],
                    ],
                ],

                'tour_bubble' => [
                    'subtitle' => MO::mo()
                                    ->translate('тур'),

                    'popup_data' => [
                        //'close_btn' => 'Закрыть',
                        'fullscreen_content' => true,

                        'styleMod' => '_tour360',

                        'content' => [
                            'tour' => [
                                'link' => $meta[ 'tour_link' ],
                            ],
                        ],
                    ],

                    'poster' => [
                        'desk' => wp_get_attachment_url($meta[ 'tour_preview_desk' ]),
                        'mod'  => wp_get_attachment_url($meta[ 'tour_preview_mob' ]),
                    ],

                    'background_block' => [
                        'type' => 'img',

                        'data' => [
                            'name' => 'pp2',
                        ],
                    ],

                    'bg_text' => [
                        'level'    => '0',
                        'position' => 'prefix',
                        'align'    => 'left-0',
                        'text'     => 'View',
                        'depth'    => '0.8',
                    ],
                ],

                'values_slider' => $this->getSlider($meta),

                'compare' => $this->getCompare($meta),

                'help_block' => [
                    'title'            => MO::mo()
                                            ->translate('Необходима консультация эксперта?'),
                    'text'             => MO::mo()
                                            ->translate(
                                                'Есть вопросы по проекту? Нужна консультация специалиста. Мы услышим и поймем вас'
                                            ),
                    'button'           => [
                        'text' => MO::mo()
                                    ->translate('получить консультацию'),

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
                                                    ->translate(
                                                        'И наш менеджер свяжется с Вами в самое ближайшее время'
                                                    ),

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
                                                'content' => '<p>'.MO::mo()
                                                                     ->translate(
                                                                         'Мы очень ценим каждого клиента, поэтому наши эксперты уже обрабатывают вашу заявку. Скоро мы свяжемся и воплотим ваши идеи!'
                                                                     ).'</p>',
                                            ],
                                        ],
                                    ],
                                ],
                            ],
                        ],
                    ],
                    'bubble'           => true,
                    'background_block' => [
                        'type' => 'img',

                        'data' => [
                            'name' => 'pp4',
                        ],
                    ],
                ],
            ]
        );

        return new WP_REST_Response($data);
    }

    public function getCompare($meta)
    {
        return [
            'title' => $meta[ 'compare_title' ],

            'before' => [
                'label' => '3D',

                'img' => [
                    'desk' => wp_get_attachment_url($meta[ 'compare_img_desk_before' ]),
                    'mob'  => wp_get_attachment_url($meta[ 'compare_img_mob_before' ]),
                ],
            ],

            'after' => [
                'label' => 'фото',

                'img' => [
                    'desk' => wp_get_attachment_url($meta[ 'compare_img_desk_after' ]),
                    'mob'  => wp_get_attachment_url($meta[ 'compare_img_mob_after' ]),
                ],
            ],
        ];
    }

    private function getSlider(array $meta)
    {
        $slider = [
            'title' => $meta[ 'slider_title' ],

            'images' => [],

            'background_block' => [
                'type' => 'img',

                'data' => [
                    'name' => 'pp3',
                ],
            ],
        ];
        foreach ($meta[ 'slider_gallery' ] as $item) {
            $slider[ 'images' ][] = [
                'preview' => wp_get_attachment_image_url($item, 'medium'),
                'full'    => wp_get_attachment_image_url($item, 'full'),
                'alt'     => '#',
            ];
        }

        return $slider;
    }

    private function getBgSlider(array $meta)
    {
        $list = [];
        foreach ($meta[ 'bg_slider_gallery' ] as $item) {
            $list[] = [
                'desk' => wp_get_attachment_url($item[ 'desk' ]),
                'mob'  => wp_get_attachment_url($item[ 'mob' ]),
            ];
        }

        return $list;
    }
}
