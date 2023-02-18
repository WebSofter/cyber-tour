<?php
header("Access-Control-Allow-Origin: *");

$response = [
    'header' => [
        'background_block' => [
            'type' => 'img',

            'data' => [
                'name' => 'p1',
            ]
        ],

        'breadcrumbs' => [
            [
                'text' => 'Главная',
                'link' => '/'
            ],
            [
                'text' => 'Проекты'
            ],
        ],

        'title' => [
            'text' => 'Наши проекты'
        ],
    ],

    'projects' => [
        'categories' => [
            [
                'text' => 'все категории',
                'select_text' => 'выбрать категорию',
                'category_id' => 'all'
            ],
            [
                'text' => 'сауны',
                'category_id' => 'sauna'
            ],
            [
                'text' => 'бассейны',
                'category_id' => 'pool'
            ],
            [
                'text' => 'камины',
                'category_id' => 'kaminy'
            ],
            [
                'text' => 'массажные комнаты',
                'category_id' => 'massage_room'
            ],
            [
                'text' => 'комплекс',
                'category_id' => 'complex'
            ],
            [
                'text' => 'категориЯ N',
                'category_id' => 'n'
            ],
        ],
        'list' => [
            [
                'category_id' => 'sauna',
                'category_text' => 'сауны',
                'img' => '/media/projects/previews/project-1_preview.jpg',
                'title' => 'Тропикана: интерьер домашнего СПА-салона',
                'text' => 'Мы предлагаем лучшие решения, по  созданию СПА-пространства любого формата ',
                'link' => '/projects/sauna'
            ],
            [
                'category_id' => 'pool',
                'category_text' => 'бассейны',
                'img' => '/media/projects/previews/project-2_preview.jpg',
                'title' => 'Тропикана: интерьер домашнего СПА-салона',
                'text' => 'Мы предлагаем лучшие решения, по  созданию СПА-пространства любого формата ',
                'link' => '/projects/pool'
            ],
            [
                'category_id' => 'kaminy',
                'category_text' => 'камины',
                'img' => '/media/projects/previews/project-2_preview.jpg',
                'title' => 'Тропикана: интерьер домашнего СПА-салона',
                'text' => 'Мы предлагаем лучшие решения, по  созданию СПА-пространства любого формата ',
                'link' => '/projects/kaminy'
            ],
            [
                'category_id' => 'massage_room',
                'category_text' => 'массажные комнаты',
                'img' => '/media/projects/previews/project-3_preview.jpg',
                'title' => 'Тропикана: интерьер домашнего СПА-салона',
                'text' => 'Мы предлагаем лучшие решения, по  созданию СПА-пространства любого формата ',
                'link' => '/projects/massage_room'
            ],
            [
                'category_id' => 'complex',
                'category_text' => 'комплекс',
                'img' => '/media/projects/previews/project-4_preview.jpg',
                'title' => 'Тропикана: интерьер домашнего СПА-салона',
                'text' => 'Мы предлагаем лучшие решения, по  созданию СПА-пространства любого формата ',
                'link' => '/projects/complex'
            ],
            [
                'category_id' => 'n',
                'category_text' => 'категориЯ N',
                'img' => '/media/projects/previews/project-5_preview.jpg',
                'title' => 'Тропикана: интерьер домашнего СПА-салона',
                'text' => 'Мы предлагаем лучшие решения, по  созданию СПА-пространства любого формата ',
                'link' => '/projects/n'
            ],
            [
                'category_id' => 'sauna',
                'category_text' => 'сауны',
                'img' => '/media/projects/previews/project-1_preview.jpg',
                'title' => 'Тропикана: интерьер домашнего СПА-салона',
                'text' => 'Мы предлагаем лучшие решения, по  созданию СПА-пространства любого формата ',
                'link' => '/projects/sauna'
            ],
            [
                'category_id' => 'sauna',
                'category_text' => 'сауны',
                'img' => '/media/projects/previews/project-1_preview.jpg',
                'title' => 'Тропикана: интерьер домашнего СПА-салона',
                'text' => 'Мы предлагаем лучшие решения, по  созданию СПА-пространства любого формата ',
                'link' => '/projects/sauna'
            ],
            [
                'category_id' => 'pool',
                'category_text' => 'бассейны',
                'img' => '/media/projects/previews/project-2_preview.jpg',
                'title' => 'Тропикана: интерьер домашнего СПА-салона',
                'text' => 'Мы предлагаем лучшие решения, по  созданию СПА-пространства любого формата ',
                'link' => '/projects/pool'
            ],
            [
                'category_id' => 'kaminy',
                'category_text' => 'камины',
                'img' => '/media/projects/previews/project-2_preview.jpg',
                'title' => 'Тропикана: интерьер домашнего СПА-салона',
                'text' => 'Мы предлагаем лучшие решения, по  созданию СПА-пространства любого формата ',
                'link' => '/projects/kaminy'
            ],
            [
                'category_id' => 'massage_room',
                'category_text' => 'массажные комнаты',
                'img' => '/media/projects/previews/project-3_preview.jpg',
                'title' => 'Тропикана: интерьер домашнего СПА-салона',
                'text' => 'Мы предлагаем лучшие решения, по  созданию СПА-пространства любого формата ',
                'link' => '/projects/massage_room'
            ],
            [
                'category_id' => 'massage_room',
                'category_text' => 'массажные комнаты',
                'img' => '/media/projects/previews/project-3_preview.jpg',
                'title' => 'Тропикана: интерьер домашнего СПА-салона',
                'text' => 'Мы предлагаем лучшие решения, по  созданию СПА-пространства любого формата ',
                'link' => '/projects/massage_room'
            ],
            [
                'category_id' => 'sauna',
                'category_text' => 'сауны',
                'img' => '/media/projects/previews/project-1_preview.jpg',
                'title' => 'Тропикана: интерьер домашнего СПА-салона',
                'text' => 'Мы предлагаем лучшие решения, по  созданию СПА-пространства любого формата ',
                'link' => '/projects/sauna'
            ],
        ]
    ],

    'content_block' => [
        [
            'content' => [
                'mod' => 'narrow',
                'text_block' => [
                    'mod' => '_line',
                    'content' => '
                        <p>Каждый необычный проект - новый вызов, со своей историей и характеристиками, заставляющий выйти за границы привычной реальности, которая сможет коснуться чувств и подсоздания!</p>
                    '
                ],
            ],

            'bg_text' => [
                'level' => '0',
                'position' => 'bottom',
                'align' => 'left',
                'text' => 'Unreal',
                'depth' => '0.8'
            ],

            'background_block' => [
                'type' => 'img',

                'data' => [
                    'name' => 'p2'
                ]
            ],
        ],
        [
            'content' => [
                'mod' => 'narrow',
                'text_block' => [
                    'mod' => '_line',
                    'content' => '
                        <p>Все мы разные и это прекрасно! Каждое созданное нами простарство – как и каждый человек – уникально. Нам важно, чтобы вы были уверены, что ваш интерьер единственный в своем роде.</p>
                        <p>Именно поэтому большая часть проектов остается за рамками интернета и прессы.</p>
                    '
                ],
            ],

            'bg_text' => [
                'level' => '0',
                'position' => 'bottom',
                'align' => 'right',
                'text' => 'Unique',
                'depth' => '1.2'
            ],

            'background_block' => [
                'type' => 'img',

                'data' => [
                    'name' => 'p3'
                ]
            ],
        ],
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
        'background_block' => [
            'type' => 'img',

            'data' => [
                'name' => 'pp2',
            ]
        ]
    ]
];

echo json_encode($response);
