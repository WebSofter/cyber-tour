<?php
header("Access-Control-Allow-Origin: *");

$response_default = [
    'header' => [
        'breadcrumbs' => [
            [
                'text' => 'Главная',
                'link' => '/'
            ],
            [
                'text' => 'Проекты',
                'link' => '/projects'
            ],
            [
                'text' => 'Тропикана'
            ],
        ],

        'title' => [
            'text' => 'Тропикана: интерьер домашнего спа-салона'
        ],
    ],

    'bg_slider' => [
        'background_block' => [
            'type' => 'img',

            'data' => [
                'name' => 'pp1',
                'mod' => 'center-bottom'
            ]
        ],

        'list' => [
            [
                'desk' => '/media/projects/slider/project-1-1.jpg',
                'mob' => '/media/projects/slider/project-1-1_mob.jpg'
            ],
            [
                'desk' => '/media/projects/slider/project-1-2.jpg',
                'mob' => '/media/projects/slider/project-1-2_mob.jpg'
            ],
            [
                'desk' => '/media/projects/slider/project-1-3.jpg',
                'mob' => '/media/projects/slider/project-1-3_mob.jpg'
            ],
        ]
    ],

    'description' => [
        'aside_text' => 'Год создания: 2018',

        'text_block' => [
            'content' => '
                <h3>Вызов:</h3>
                <p>Нам удалось достигнуть такого эффекта правильно подобранными материалами и фактурами, формами и освещением, которое является  фундаментальным компонентом и играет главную роль для создания притягательного и ощутимого напряжения...</p>
                
                <h3>Воплощение:</h3>
                <p>В наше суматошное время так хочется найти больше времени для себя! Именно ванная комната рассматривается многими как место, где можно уединиться, расслабиться и посвятить время заботе о собственной красоте и комфорте. Поэтому дизайн ванной должен быть функциональным, и организовывать пространство этой комнаты стоит в соответствии с принципами спа, добавляя элементы, которые помогут расслабиться не только вашему телу, но и глазам, выбросить из головы все заботы.</p>
                <p>Нам удалось достигнуть такого эффекта правильно подобранными материалами и фактурами, формами и освещением, которое является  фундаментальным компонентом и играет главную роль для создания притягательного и ощутимого напряжения...</p>
            '
        ],
    ],

    'tour_bubble' => [
        'subtitle' => 'тур',

        'popup_data' => [
            //'close_btn' => 'Закрыть',
            'fullscreen_content' => true,

            'styleMod' => '_tour360',

            'content' => [
                'tour' => [
                    'link' => 'http://prom3d.ru/wp-content/uploads/sauna.html'
                ]
            ]
        ],

        'poster' => [
            'desk' => '/media/previews/360-preview.jpg',
            'mod' => '/media/previews/360-preview_mob.jpg'
        ],

        'background_block' => [
            'type' => 'img',

            'data' => [
                'name' => 'pp2',
            ]
        ],

        'bg_text' => [
            'level' => '0',
            'position' => 'prefix',
            'align' => 'left-0',
            'text' => 'View',
            'depth' => '0.8'
        ],
    ],

    'values_slider' => [
        'title' => 'Важно, какую ценность Вы получаете, а не какую цену платите,  когда речь идет о',

        'images' => [
            [
                'preview' => '/media/value/img-1.jpg',
                'full' => '/media/value/img-1.jpg',
                'alt' => '#'
            ],
            [
                'preview' => '/media/value/img-2.jpg',
                'full' => '/media/value/img-2.jpg',
                'alt' => '#'
            ],
            [
                'preview' => '/media/value/img-3.jpg',
                'full' => '/media/value/img-3.jpg',
                'alt' => '#'
            ],
            [
                'preview' => '/media/value/img-1.jpg',
                'full' => '/media/value/img-1.jpg',
                'alt' => '#'
            ],
            [
                'preview' => '/media/value/img-2.jpg',
                'full' => '/media/value/img-2.jpg',
                'alt' => '#'
            ],
            [
                'preview' => '/media/value/img-3.jpg',
                'full' => '/media/value/img-3.jpg',
                'alt' => '#'
            ],
            [
                'preview' => '/media/value/img-1.jpg',
                'full' => '/media/value/img-1.jpg',
                'alt' => '#'
            ],
            [
                'preview' => '/media/value/img-2.jpg',
                'full' => '/media/value/img-2.jpg',
                'alt' => '#'
            ],
            [
                'preview' => '/media/value/img-3.jpg',
                'full' => '/media/value/img-3.jpg',
                'alt' => '#'
            ],
        ],

        'background_block' => [
            'type' => 'img',

            'data' => [
                'name' => 'pp3',
            ]
        ],
    ],

    'compare' => [
        'title' => 'Сравните реализованный проект с 3D-визуализацией',

        'before' => [
            'label' => '3D',

            'img' => [
                'desk' => '/media/compare/3d.jpg',
                'mob' => '/media/compare/3d_mob.jpg'
            ]
        ],

        'after' => [
            'label' => 'фото',

            'img' => [
                'desk' => '/media/compare/photo.jpg',
                'mob' => '/media/compare/photo_mob.jpg'
            ]
        ]
    ],

    'help_block' => [
        'title' => 'Необходима консультация эксперта?',
        'text' => 'Есть вопросы по проекту? Нужна консультация специалиста. Мы услышим и поймем вас',
        'button' => [
            'text' => 'получить консультацию',

            'popup_data' => [
                //'close_btn' => 'Закрыть',

                'bg_text' => [
                    'level' => '1',
                    'position' => 'start',
                    'align' => 'left-0',
                    'text' => 'Get in touch'
                ],

                'content' => [
                    'form' => [
                        'title' => 'Отправьте заявку',
                        'subtitle' => 'И наш менеджер свяжется с Вами в самое ближайшее время',

                        'button' => [
                            'text' => 'Отправить заявку',
                        ],

                        'conf' => '
                                <p>Нажимая, на кнопку Вы соглашаетесь с <a href="#">политикой конфиденциальности</a></p>
                            ',

                        "fields" => [
                            [
                                "name" => "topic",
                                "value" => "Request",
                                "label" => "Тема письма",
                                "type" => "hidden"
                            ],
                            [
                                "name" => "name",
                                "label" => "Представьтесь, пожалуйста",
                                "required" => true,
                                "validation" => [
                                    "properties" => [
                                        "type" => "string",
                                        "chains" => [
                                            [
                                                "type" => "required",
                                                "error" => "Укажите имя"
                                            ]
                                        ]
                                    ]
                                ]
                            ],
                            [
                                "name" => "phone",
                                "label" => "Ваш телефон",
                                "required" => true,
                                "validation" => [
                                    "properties" => [
                                        "type" => "string",
                                        "chains" => [
                                            [
                                                "type" => "required",
                                                "error" => "Укажите телефон"
                                            ]
                                        ]
                                    ]
                                ]
                            ],
                            [
                                "type" => "email",
                                "name" => "email",
                                "label" => "Ваш e-mail",
                                "required" => true,
                                "autocomplete" => "email",
                                "validation" => [
                                    "properties" => [
                                        "type" => "string",
                                        "chains" => [
                                            [
                                                "type" => "required",
                                                "error" => "Укажите e-mail"
                                            ],
                                            [
                                                "type" => "email",
                                                "error" => "Некорректный e-mail"
                                            ]
                                        ]
                                    ]
                                ]
                            ],
                            [
                                "name" => "city",
                                "label" => "Введите ваш город",
                                "required" => true,
                                "validation" => [
                                    "properties" => [
                                        "type" => "string",
                                        "chains" => [
                                            [
                                                "type" => "required",
                                                "error" => "Укажите город"
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ],

                        'ty_popup_data' => [
                            'title' => 'Спасибо за вашу заявку!',
                            //'close_btn' => 'Закрыть',

                            'content' => [
                                'text_block' => [
                                    'content' => '
                                        <p>Мы очень ценим каждого клиента, поэтому наши эксперты уже обрабатывают вашу заявку. Скоро мы свяжемся и воплотим ваши идеи!</p>
                                    '
                                ],
                            ]
                        ]
                    ],
                ]
            ]
        ],
        'bubble' => true,
        'background_block' => [
            'type' => 'img',

            'data' => [
                'name' => 'pp4',
            ]
        ]
    ]
];

echo json_encode($response_default);
