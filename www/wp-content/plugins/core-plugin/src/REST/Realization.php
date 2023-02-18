<?php

namespace Sau\WP\Plugin\Core\REST;

use Sau\WP\Plugin\Core\Carbon\Realization as RealizationCarbon;
use Sau\WP\Plugin\Core\MO;
use WP_REST_Controller;
use WP_REST_Response;

class Realization extends WP_REST_Controller
{
    /** @var string */
    protected $namespace = 'hs';

    /** @var string */
    protected $rest_base = 'realization';
    /**
     * @var RealizationCarbon
     */
    private $realization;

    public function __construct(RealizationCarbon $realization)
    {
        $this->realization = $realization;
    }

    public function register_routes()
    {
        register_rest_route(
            $this->namespace,
            "/".$this->rest_base."/",
            [
                [
                    'methods'  => 'GET',
                    'callback' => [$this, 'realization'],
                ],
            ]
        );
    }

    public function realization(): WP_REST_Response
    {
        $post_id = get_option('realization_page');
        $lang    = MO::getLng() == 'ru' ? '' : MO::getLng().'_';
        $post    = pll_get_post_translations($post_id)[ MO::getLng() ] ?? $post_id;
        $meta    = $this->realization->getData($post);
        $data    = [
            'meta'          => $meta,
            'header'        => [
                'breadcrumbs' => [
                    [
                        'text' => MO::mo()
                                    ->translate('Главная'),
                        'link' => '/',
                    ],
                    [
                        'text' => MO::mo()
                                    ->translate('Воплощение'),
                    ],
                ],

                'title' => [
                    'text' => MO::mo()
                                ->translate('Воплощение'),
                ],

                'subtitle' => $meta[ 'subtitle'.$lang ],//MO::mo()->translate($meta[ 'subtitle' ]),

                'background_block' => [
                    'type' => 'img',

                    'data' => [
                        'name' => 'hp1',
                    ],
                ],
            ],
            'content_block' => $this->getContentBlock($meta),
            'configurator'  => $this->getConfigurator($meta),
            'offers'        => $this->getOffers($meta),
            'help_block'    => $this->getHelpBlock($meta),

        ];

        return new WP_REST_Response($data);
    }

    public function getContentBlock(array $meta)
    {
        $lang    = MO::getLng() == 'ru' ? '' : MO::getLng().'_';
        return [
            [ //1
                'content' => [
                    'text_block' => [
                        'mod'     => '_line',
                        'content' => $meta[ "realization_content_block_1_{$lang}content" ],
                    ],
                ],

                'bg_text' => [
                    'level'    => '0',
                    'position' => 'bottom',
                    'text'     => $meta[ "realization_content_block_1_{$lang}bg_text" ],
                ],
            ],
            [ //2
                'content' => [
                    'text_block' => [
                        'mod'     => '_line',
                        'content' => $meta[ "realization_content_block_2_{$lang}content" ],
                    ],
                ],

                'background_block' => [
                    'type' => 'img',

                    'data' => [
                        'name' => 'hp3',
                    ],
                ],
            ],
            [ //5
                'mono' => true,

                'content' => [
                    'text_block' => [
                        'mod'     => '_ta-center',
                        'content' => $meta[ "realization_content_block_3_{$lang}content" ],
                    ],
                ],

                'background_block' => [
                    'type' => 'img',

                    'data' => [
                        'name' => 'pp2',
                    ],
                ],
            ],
        ];
    }

    private function getConfigurator(array $meta)
    {
        $lang    = MO::getLng() == 'ru' ? '' : MO::getLng().'_';
        $tab_list = [];

        foreach ($meta[ $lang.'list' ] as $item) {
            $t = [
                'id' => $item[ 'id' ],
            ];

            foreach ($item[ 'item' ] as $i) {
                $t[ 'list' ][] = [
                    'img'        => wp_get_attachment_url($i[ 'img' ]),
                    'title'      => $i[ 'title' ],
                    'popup_data' => [
                        'title'   => $i[ 'title' ],
                        'content' => [
                            'text_block' => [
                                'content' => sprintf('<p>%s</p>', $i[ 'content' ]),
                            ],
                        ],
                    ],
                ];

            }


            $tab_list[] = $t;

        }

        return [
            'title'             => $meta[ "conf_{$lang}title" ],
            'subtitle'          => $meta[ "conf_{$lang}subtitle" ],
            'selected_title'    => MO::mo()
                                     ->translate('Выбранное оборудование и зонирование*:'),
            'show_selected_btn' => MO::mo()
                                     ->translate('посмотреть список'),
            'selected_prefix'   => MO::mo()
                                     ->translate('Выбрано:'),
            'btn_label'         => MO::mo()
                                     ->translate(
                                         '* Здесь указаны лишь базовые компоненты, для воплощения вашей идеи не существует ограничений'
                                     ),
            'tab_btn_text'      => MO::mo()
                                     ->translate('выбрать компоненты'),

            'background_block' => [
                'type' => 'img',

                'data' => [
                    'name' => 'pp3',
                ],
            ],

            'button' => [
                'text' => MO::mo()->translate('воплотить идею'),

                'popup_data' => [
                    //'close_btn' => 'Закрыть',

                    'content' => [
                        'form' => [
                            'title'    => MO::mo()->translate('Отправьте заявку'),
                            'subtitle' => MO::mo()->translate('И наш менеджер свяжется с Вами в самое ближайшее время'),

                            'button' => [
                                'text' => MO::mo()->translate('Отправить заявку'),
                            ],

                            'conf' => do_shortcode(
                                sprintf(
                                    '<p>%s</p>',
                                    MO::mo()->translate('Нажимая, на кнопку Вы соглашаетесь с [pp]политикой конфиденциальности[/pp]')
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
                                [
                                    "type"       => "textarea",
                                    "name"       => "message",
                                    "label"      => MO::mo()->translate('Комментарий'),
                                    "required"   => true,
                                    "validation" => [
                                        "properties" => [
                                            "type"   => "string",
                                            "chains" => [
                                                [
                                                    "type"  => "required",
                                                    "error" => MO::mo()->translate("Напишите комментарий"),
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

            'nav' => [
                [
                    'id'    => 'thermal',
                    'title' => MO::mo()
                                 ->translate('термальная зона'),
                ],
                [
                    'id'    => 'aqua',
                    'title' => MO::mo()
                                 ->translate('аква зона'),
                ],
                [
                    'id'    => 'cooling',
                    'title' => MO::mo()
                                 ->translate('зона охлаждения'),
                ],
                [
                    'id'    => 'relax',
                    'title' => MO::mo()
                                 ->translate('релакс зона'),
                ],
            ],

            'tabs' => [
                'title' => MO::mo()
                             ->translate('Выберите компоненты Вашего будущего СПА:'),

                'tabs_list' => $tab_list,
            ],
        ];
    }

    private function getOffers(array $meta)
    {
        $lang    = MO::getLng() == 'ru' ? '' : MO::getLng().'_';
        $button = [
            'text' => MO::mo()
                        ->translate('воплотить проект'),

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
                            'text' => MO::mo()->translate('Отправить заявку'),
                        ],

                        'conf' => do_shortcode(
                            sprintf(
                                '<p>%s</p>',
                                MO::mo()->translate('Нажимая, на кнопку Вы соглашаетесь с [pp]политикой конфиденциальности[/pp]')
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
        ];

        $fields = [
            'title'    => MO::mo()->translate($meta[ "offers_{$lang}title" ]),
            'subtitle' => MO::mo()->translate($meta[ "offers_{$lang}subtitle" ]),

            'background_block' => [
                'type' => 'img',

                'data' => [
                    'name' => 'c1',
                ],
            ],
        ];
        foreach ($meta[ "offers_{$lang}list" ] as $item) {
            $i = [
                'stars'        => $item['stars'],
                'title'        => MO::mo()->translate($item['title']),
                'text_preview' => MO::mo()->translate($item['subtitle']),
                'popup_data'   => [
                    'title' => $item['title'],
                    //'close_btn' => 'Закрыть',

                    'bg_text' => [
                        'level'    => '1',
                        'position' => 'start',
                        'align'    => 'left-0',
                        'text'     => 'Spa',
                    ],

                    'content' => [
                        'text_block' => [
                            'content' => $item['content'],
                        ],

                        'button' => $button,
                    ],

                ],
            ];
            if ($item[ 'label' ]) {
                $i[ 'label' ] = [
                    'text' => $item[ 'label' ],

                    'data' => [
                        'url' => '',
                    ],
                ];
            }
            $fields['list'] []= $i;
        }

        return $fields;
    }

    private function getHelpBlock(array $meta)
    {
        return [
            'title' => MO::mo()->translate($meta[ "formdata_{$lang}title" ]),
            'text'  => MO::mo()->translate($meta[ "formdata_{$lang}subtitle" ]),

            'button' => [
                'text' => $meta[ "formdata_{$lang}buttontext" ],

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
                                'text' => 'Отправить заявку',
                            ],

                            'conf' => do_shortcode(
                                sprintf(
                                    '<p>%s</p>',
                                    MO::mo()->translate('Нажимая, на кнопку Вы соглашаетесь с [pp]политикой конфиденциальности[/pp]')
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
                                'title' => 'Спасибо за вашу заявку!',
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

            'background_block' => [
                'type' => 'img',

                'data' => [
                    'name' => 'hp5',
                ],
            ],
        ];
    }
}
