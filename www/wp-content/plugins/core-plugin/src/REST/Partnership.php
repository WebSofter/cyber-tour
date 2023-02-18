<?php

namespace Sau\WP\Plugin\Core\REST;

use Carbon_Fields\Field;
use Sau\WP\Plugin\Core\Carbon\Partnership as PartnershipCarbon;
use Sau\WP\Plugin\Core\MO;
use WP_REST_Controller;
use WP_REST_Response;

class Partnership extends WP_REST_Controller
{
    /** @var string */
    protected $namespace = 'hs';

    /** @var string */
    protected $rest_base = 'partnership';
    /**
     * @var PartnershipCarbon
     */
    private $partnership;

    public function __construct(PartnershipCarbon $partnership)
    {
        $this->partnership = $partnership;
    }

    public function register_routes()
    {
        register_rest_route(
            $this->namespace,
            "/".$this->rest_base."/",
            [
                [
                    'methods'  => 'GET',
                    'callback' => [$this, 'partnership'],
                ],
            ]
        );
    }

    public function partnership(): WP_REST_Response
    {
        $post_id = get_option('partnership_page');
        $lang    = MO::getLng() == 'ru' ? '' : MO::getLng().'_';
        $post    = pll_get_post_translations($post_id)[ MO::getLng() ] ?? $post_id;
        $meta    = $this->partnership->getData($post);

        $data = [
            'meta'   => $post,
            'header' => [
                'breadcrumbs' => [
                    [

                        'text' => MO::mo()
                                    ->translate('Главная'),
                        'link' => '/',
                    ],
                    [
                        'text' => MO::mo()
                                    ->translate('Партнерам'),
                    ],
                ],

                'title' => [
                    'text' => MO::mo()
                                ->translate('партнерам'),
                ],

                'background_block' => [
                    'type' => 'img',

                    'data' => [
                        'name' => 'hp1',
                    ],
                ],
            ],

            'content_block1' => [
                [ //1
                    'content' => [
                        'text_block' => [
                            'mod'     => '_line',
                            'content' => strip_tags($meta[ "content_block_1_{$lang}text_block" ], '<p><h3>'),
                        ],
                    ],

                    'component' => [
                        'name' => 'Hands',
                    ],
                ],
                [ //2
                    'content' => [
                        'text_block' => [
                            'mod'     => '_line',
                            'content' => strip_tags($meta[ "content_block_2_{$lang}text_block" ], '<p><h3>'),

                        ],
                    ],

                    'background_block' => [
                        'type' => 'img',

                        'data' => [
                            'name' => 'c1',
                        ],
                    ],

                    'component' => [
                        'name' => 'TwinBubble',

                        'data' => [
                            'mod' => '_type2',
                        ],
                    ],
                ],
            ],

            'advantages' => array_merge(
                [
                    'background_block' => [
                        'type' => 'img',

                        'data' => [
                            'name' => 'c1',
                        ],
                    ],
                ],
                $this->getAdvantages($meta, "advantages_{$lang}")
            ),

            'content_block2' => [
                [ //1
                    'content' => [
                        'text_block' => [
                            'mod'     => '_line',
                            'content' => strip_tags($meta[ "content_block_3_{$lang}text_block" ], '<p><h3>'),

                        ],
                    ],

                    'background_block' => [
                        'type' => 'img',

                        'data' => [
                            'name' => 'ph3',
                        ],
                    ],
                ],
                [ //2
                    'content' => [
                        'text_block' => [
                            'mod'     => '_line',
                            'content' => strip_tags($meta[ "content_block_4_{$lang}text_block" ], '<p><h3>'),

                        ],
                    ],

                    'background_block' => [
                        'type' => 'img',

                        'data' => [
                            'name' => 'hp4',
                            'mod'  => 'top',
                        ],
                    ],
                ],
            ],
            'requirements'   => $this->getAdvantages($meta, "requirements_{$lang}"),
            'help_block'     => [
                'title'  => MO::mo()
                              ->translate('Хотите стать нашим партнером?'),
                'text'   => MO::mo()
                              ->translate(
                                  'Если это всё про вас-заполняйте заявку ниже и мы будем рады увидеть вашу компанию в числе наших ключевых партнёров! Давайте развиваться, создавать удивительные пространства вместе и делать этот мир чуточку красивее!'
                              ),
                'button' => [
                    'text' => MO::mo()
                                ->translate('оставить заявку'),

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
                    'align'    => 'center',
                    'text'     => 'Partners',
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

    private function getAdvantages(array $meta, $prefix)
    {
        $data = ['title' => $meta[ $prefix.'title' ]];

        foreach ($meta[ $prefix.'list' ] as $item) {
            $data[ 'list' ][] = $item[ 'list_item' ];
        }

        return $data;
    }
}
