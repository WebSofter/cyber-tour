<?php
header("Access-Control-Allow-Origin: *");

$response = [
    'header' => [
        'breadcrumbs' => [
            [
                'text' => 'Главная',
                'link' => '/'
            ],
            [
                'text' => 'Контакты'
            ],
        ],

        'title' => [
            'text' => 'Контакты'
        ],

        'subtitle' => 'Мы работаем по всему миру и рады новым знакомствам и новым интересным проектам!',
    ],

    'contacts' => [
        'background_block' => [
            'type' => 'img',

            'data' => [
                'name' => 'hp1',
            ]
        ],

        'list' => [
            [
                'img' => 'address',

                'rows' => [
                    [
                        'text' => 'г.Нижний Новгород, ул.Ульянова 10А, 1 этаж, офис Home Spa Design'
                    ]
                ]
            ],
            [
                'img' => 'mail',

                'rows' => [
                    [
                        'text' => 'homespadesign@yandex.ru',
                        'link' => 'mailto:homespadesign@yandex.ru'
                    ]
                ]
            ],
            [
                'img' => 'phone',

                'rows' => [
                    [
                        'text' => '+7 (903) 600-56-94',
                        'link' => 'tel:+7 (903) 600-56-94'
                    ],
                    [
                        'text' => '+7 (495) 123-45 67',
                        'link' => 'tel:+7 (495) 123-45 67'
                    ]
                ]
            ],
        ]
    ],

    'contact_us' => [
        'background_block' => [
            'type' => 'img',

            'data' => [
                'name' => 'c1',
            ]
        ],

        'bg_text' => [
            'level' => '1',
            'position' => 'prefix',
            'text' => 'Get in touch'
        ],

        'title' => 'Очень просим Вас предварительно согласовать встречу с нашими специалистами, позвонив по указанным телефонам или оставив заявку ниже!',

        'form' => [
            'mod' => '_overlay-button',

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
                ],
                [
                    "type" => "textarea",
                    "name" => "message777",
                    "label" => "Комментарий",
                    "required" => true,
                    "validation" => [
                        "properties" => [
                            "type" => "string",
                            "chains" => [
                                [
                                    "type" => "required",
                                    "error" => "Напишите комментарий"
                                ]
                            ]
                        ]
                    ]
                ]
            ],

            'button' => [
                'text' => 'Отправить заявку',
            ],

            'conf' => '
            <p>Нажимая, на кнопку Вы соглашаетесь с <a href="#">политикой конфиденциальности</a></p>
        ',

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
    ],

    'map' => [
        'coords' => [56.326747, 44.011152],
        'api_key' => 'AIzaSyDkerbEiMO7_A5T7DcoOXwEBf5J-V3S5JM'
    ],
];

echo json_encode($response);
