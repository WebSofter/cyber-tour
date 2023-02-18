<?php

namespace Sau\WP\Plugin\Core\REST;

use Carbon_Fields\Field;
use Sau\WP\Plugin\Core\Carbon\Contacts as ContactsCarbon;
use Sau\WP\Plugin\Core\MO;
use WP_REST_Controller;
use WP_REST_Response;

class Contacts extends WP_REST_Controller
{
    /** @var string */
    protected $namespace = 'hs';

    /** @var string */
    protected $rest_base = 'contacts';
    /**
     * @var ContactsCarbon
     */
    private $contacts;

    public function __construct(ContactsCarbon $contacts)
    {
        $this->contacts = $contacts;
    }

    public function register_routes()
    {
        register_rest_route(
            $this->namespace,
            "/".$this->rest_base."/",
            [
                [
                    'methods'  => 'GET',
                    'callback' => [$this, 'contacts'],
                ],
            ]
        );
    }

    public function contacts(): WP_REST_Response
    {
        $post_id = get_option('contacts_page');
        $lang    = MO::getLng() == 'ru' ? '' : MO::getLng().'_';
        $post    = pll_get_post_translations($post_id)[ MO::getLng() ] ?? $post_id;
        $meta    = $this->contacts->getData($post);

        $phones = [];
        foreach ($meta[ $lang.'phones' ] as $item) {
            $phones[] = [
                'text' => $item[ 'phone' ],
                'link' => 'tel:'.$item[ 'phone' ],
            ];

        }

        $data = [
            'header' => [
                'breadcrumbs' => [
                    [
                        'text' => MO::mo()->translate('Главная'),
                        'link' => '/',
                    ],
                    [
                        'text' => MO::mo()->translate('Контакты'),
                    ],
                ],

                'title' => [
                    'text' => MO::mo()->translate($meta[$lang.'title']),
                ],

                'subtitle' => MO::mo()->translate($meta[$lang.'subtitle']),
            ],

            'contacts' => [
                'background_block' => [
                    'type' => 'img',

                    'data' => [
                        'name' => 'hp1',
                    ],
                ],

                'list' => [
                    [
                        'img' => 'address',

                        'rows' => [
                            [
                                'text' => $meta[$lang.'address'],
                            ],
                        ],
                    ],
                    [
                        'img' => 'mail',

                        'rows' => [
                            [
                                'text' => $meta[$lang.'email'],
                                'link' => 'mailto:'.$meta[$lang.'email'],
                            ],
                        ],
                    ],
                    [
                        'img' => 'phone',

                        'rows' => $phones,
                    ],
                ],
            ],

            'contact_us' => [
                'background_block' => [
                    'type' => 'img',

                    'data' => [
                        'name' => 'c1',
                    ],
                ],

                'bg_text' => [
                    'level'    => '1',
                    'position' => 'prefix',
                    'text'     => 'Get in touch',
                ],

                'title' => MO::mo()
                             ->translate(
                                 'Очень просим Вас предварительно согласовать встречу с нашими специалистами, позвонив по указанным телефонам или оставив заявку ниже!'
                             ),

                'form' => [
                    'mod' => '_overlay-button',

                    "fields" => [
                        [
                            "name"  => "topic",
                            "value" => "Request",
                            "label" => MO::mo()
                                         ->translate('Тема письма'),
                            "type"  => "hidden",
                        ],
                        [
                            "name"       => "name",
                            "label"      => MO::mo()
                                              ->translate('Представьтесь, пожалуйста'),
                            "required"   => true,
                            "validation" => [
                                "properties" => [
                                    "type"   => "string",
                                    "chains" => [
                                        [
                                            "type"  => "required",
                                            "error" => MO::mo()
                                                         ->translate('Укажите имя'),
                                        ],
                                    ],
                                ],
                            ],
                        ],
                        [
                            "name"       => "phone",
                            "label"      => MO::mo()
                                              ->translate('Ваш телефон'),
                            "required"   => true,
                            "validation" => [
                                "properties" => [
                                    "type"   => "string",
                                    "chains" => [
                                        [
                                            "type"  => "required",
                                            "error" => MO::mo()
                                                         ->translate('Укажите телефон'),
                                        ],
                                    ],
                                ],
                            ],
                        ],
                        [
                            "type"         => "email",
                            "name"         => "email",
                            "label"        => MO::mo()
                                                ->translate('Ваш e-mail'),
                            "required"     => true,
                            "autocomplete" => "email",
                            "validation"   => [
                                "properties" => [
                                    "type"   => "string",
                                    "chains" => [
                                        [
                                            "type"  => "required",
                                            "error" => MO::mo()
                                                         ->translate('Укажите e-mail'),
                                        ],
                                        [
                                            "type"  => "email",
                                            "error" => MO::mo()
                                                         ->translate('Некорректный e-mail'),
                                        ],
                                    ],
                                ],
                            ],
                        ],
                        [
                            "name"       => "city",
                            "label"      => MO::mo()
                                              ->translate('Введите ваш город'),
                            "required"   => true,
                            "validation" => [
                                "properties" => [
                                    "type"   => "string",
                                    "chains" => [
                                        [
                                            "type"  => "required",
                                            "error" => MO::mo()
                                                         ->translate('Укажите город'),
                                        ],
                                    ],
                                ],
                            ],
                        ],
                        [
                            "type"       => "textarea",
                            "name"       => "message",
                            "label"      => MO::mo()
                                              ->translate('Комментарий'),
                            "required"   => true,
                            "validation" => [
                                "properties" => [
                                    "type"   => "string",
                                    "chains" => [
                                        [
                                            "type"  => "required",
                                            "error" => MO::mo()
                                                         ->translate("Напишите комментарий"),
                                        ],
                                    ],
                                ],
                            ],
                        ],
                    ],

                    'button' => [
                        'text' => MO::mo()
                                    ->translate('Отправить заявку'),
                    ],

                    'conf' => do_shortcode(
                        sprintf(
                            '<p>%s</p>',
                            MO::mo()->translate('Нажимая, на кнопку Вы соглашаетесь с [pp]политикой конфиденциальности[/pp]')
                        )
                    ),

                    'ty_popup_data' => [
                        'title' => MO::mo()->translate('Спасибо за вашу заявку!'),
                        //'close_btn' => 'Закрыть',

                        'content' => [
                            'text_block' => [
                                'content' => sprintf(
                                    '<p>%s</p>',
                                    MO::mo()
                                      ->translate(
                                          'Мы очень ценим каждого клиента, поэтому наши эксперты уже обрабатывают вашу заявку. Скоро мы свяжемся и воплотим ваши идеи!'
                                      )
                                ),
                            ],
                        ],
                    ],
                ],
            ],

            'map' => [
                'coords'  => [carbon_get_theme_option('map_lat'), carbon_get_theme_option('map_lng')],
                'api_key' => carbon_get_theme_option('map_api_key'),
            ],
        ];

        return new WP_REST_Response($data);
    }
}
