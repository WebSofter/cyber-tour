<?php

namespace Sau\WP\Plugin\Core\REST;

use Carbon_Fields\Field;
use Sau\WP\Plugin\Core\Carbon\Contacts as ContactsCarbon;
use Sau\WP\Plugin\Core\Carbon\Perception as PerceptionCarbon;
use Sau\WP\Plugin\Core\Carbon\Projects as ProjectsCarbon;
use Sau\WP\Plugin\Core\MO;
use Sau\WP\Plugin\Core\PostType\Product;
use WP_REST_Controller;
use WP_REST_Response;

class Projects extends WP_REST_Controller
{
    /** @var string */
    protected $namespace = 'hs';

    /** @var string */
    protected $rest_base = 'projects';
    /**
     * @var PerceptionCarbon
     */
    private $perception;

    public function __construct(ProjectsCarbon $perception)
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
                    'callback' => [$this, 'projects'],
                ],
            ]
        );
    }

    public function projects(): WP_REST_Response
    {
        $post_id = get_option('projects_page');
        $lng    = MO::getLng() == 'ru' ? '' : MO::getLng().'_';
        $post    = pll_get_post_translations($post_id)[ MO::getLng() ] ?? $post_id;
        $meta    = $this->perception->getData($post);
        $lang      = MO::getLng();
        //TODO: Write your code this
        $data = array_merge(
            [
                'meta'          => $meta,
                'header'        => [
                    'background_block' => [
                        'type' => 'img',

                        'data' => [
                            'name' => 'p1',
                        ],
                    ],

                    'breadcrumbs' => [
                        [
                            'text' => MO::mo()->translate('Главная'),
                            'link' => '/',
                        ],
                        [
                            'text' => MO::mo()->translate('Проекты'),
                        ],
                    ],

                    'title' => [
                        'text' => MO::mo()->translate('Наши проекты'),
                    ],
                ],
                'projects'      => [
                    'language'   => $lang,
                    'categories' => $this->getCategories($meta),
                    'list'       => $this->getItems($meta),
                ],
                'content_block' => [
                    [
                        'content' => [
                            'mod'        => 'narrow',
                            'text_block' => [
                                'mod'     => '_line',
                                'content' => $meta[ "content_1_{$lng}content" ],
                            ],
                        ],

                        'bg_text' => [
                            'level'    => '0',
                            'position' => 'bottom',
                            'align'    => 'left',
                            'text'     => 'Unreal',
                            'depth'    => '0.8',
                        ],

                        'background_block' => [
                            'type' => 'img',

                            'data' => [
                                'name' => 'p2',
                            ],
                        ],
                    ],
                    [
                        'content' => [
                            'mod'        => 'narrow',
                            'text_block' => [
                                'mod'     => '_line',
                                'content' => $meta[ "content_2_{$lng}content" ],
                            ],
                        ],

                        'bg_text' => [
                            'level'    => '0',
                            'position' => 'bottom',
                            'align'    => 'right',
                            'text'     => 'Unique',
                            'depth'    => '1.2',
                        ],

                        'background_block' => [
                            'type' => 'img',

                            'data' => [
                                'name' => 'p3',
                            ],
                        ],
                    ],
                ],
                'help_block'    => [
                    'title' => MO::mo()->translate('Необходима консультация эксперта?'),
                    'text'  => MO::mo()->translate(
                                     'Есть вопросы по проекту? Нужна консультация специалиста. Мы услышим и поймем вас'
                                 ),

                    'button'           => [
                        'text' => MO::mo()->translate('получить консультацию'),

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
                                    'title'    => MO::mo()->translate('Отправьте заявку'),
                                    'subtitle' => MO::mo()->translate(
                                                        'И наш менеджер свяжется с Вами в самое ближайшее время'
                                                    ),

                                    'button' => [
                                        'text' => MO::mo()->translate('Отправить заявку'),
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
                                            "label" => MO::mo()->translate("Тема письма"),
                                            "type"  => "hidden",
                                        ],
                                        [
                                            "name"       => "name",
                                            "label"      => MO::mo()->translate("Представьтесь, пожалуйста"),
                                            "required"   => true,
                                            "validation" => [
                                                "properties" => [
                                                    "type"   => "string",
                                                    "chains" => [
                                                        [
                                                            "type"  => "required",
                                                            "error" => MO::mo()->translate("Укажите имя"),
                                                        ],
                                                    ],
                                                ],
                                            ],
                                        ],
                                        [
                                            "name"       => "phone",
                                            "label"      => MO::mo()->translate("Ваш телефон"),
                                            "required"   => true,
                                            "validation" => [
                                                "properties" => [
                                                    "type"   => "string",
                                                    "chains" => [
                                                        [
                                                            "type"  => "required",
                                                            "error" => MO::mo()->translate("Укажите телефон"),
                                                        ],
                                                    ],
                                                ],
                                            ],
                                        ],
                                        [
                                            "type"         => "email",
                                            "name"         => "email",
                                            "label"        => MO::mo()->translate("Ваш e-mail"),
                                            "required"     => true,
                                            "autocomplete" => "email",
                                            "validation"   => [
                                                "properties" => [
                                                    "type"   => "string",
                                                    "chains" => [
                                                        [
                                                            "type"  => "required",
                                                            "error" => MO::mo()->translate("Укажите e-mail"),
                                                        ],
                                                        [
                                                            "type"  => "email",
                                                            "error" => MO::mo()->translate("Некорректный e-mail"),
                                                        ],
                                                    ],
                                                ],
                                            ],
                                        ],
                                        [
                                            "name"       => "city",
                                            "label"      => MO::mo()->translate("Введите ваш город"),
                                            "required"   => true,
                                            "validation" => [
                                                "properties" => [
                                                    "type"   => "string",
                                                    "chains" => [
                                                        [
                                                            "type"  => "required",
                                                            "error" => MO::mo()->translate("Укажите город"),
                                                        ],
                                                    ],
                                                ],
                                            ],
                                        ],
                                    ],

                                    'ty_popup_data' => [
                                        'title' => MO::mo()->translate('Спасибо за вашу заявку!'),
                                        //'close_btn' => 'Закрыть',

                                        'content' => [
                                            'text_block' => [
                                                'content' => '
                                        <p>'.MO::mo()->translate(
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
                            'name' => 'pp2',
                        ],
                    ],
                ],
            ]
        );

        return new WP_REST_Response($data);
    }

    private function getCategories($meta)
    {
        $cats = [
            [
                'text'        => MO::mo()->translate('все категории'),
                'select_text' => MO::mo()->translate('выбрать категорию'),
                'category_id' => 'all',
            ],
        ];
        foreach ($meta[ "categories{$lng}" ] as $category) {
            $term   = get_term($category[ 'id' ]);
            $cats[] = [
                'text'        => !is_null($term->name) ? MO::mo()->translate($term->name) : $category['value'],
                'category_id' => !is_null($term->slug) ? $term->slug : $category['id'],
            ];
        }

        return $cats;
    }

    private function getItems($meta)
    {
        $terms = [];
        foreach ($meta[ "categories{$lng}" ] as $item) {
            $terms[] = $item[ 'id' ];
        }
        $posts = get_posts(
            [
                'post_type'   => Product::TYPE_NAME,
                'numberposts' => -1,
                'tax_query'   => [
                    [
                        'taxonomy' => Product::TAXONOMY_NAME,
                        'field'    => 'term_id',
                        'terms'    => $terms,
                    ],
                ],
            ]
        );
        $list  = [];
        /** @var \WP_Post $post */
        foreach ($posts as $post) {
            $terms = get_the_terms($post, Product::TAXONOMY_NAME);
            if ($terms) {
                $term   = array_shift($terms);
                $list[] = [
                    'category_id'   => $term->slug,
                    'category_text' => $term->name,
                    'img'           => wp_get_attachment_url(
                        carbon_get_post_meta($post->ID, 'preview_img')
                    ),
                    'title'         => $post->post_title,
                    'text'          => carbon_get_post_meta($post->ID, 'preview_subtitle'),
                    'link'          => '/projects/'.$post->ID,
                ];
            }

        }

        return $list;
    }
}
