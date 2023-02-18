<?php
header("Access-Control-Allow-Origin: *");

$response = [
    'banner' => [
        'title' => 'Home<br/>Spa<br/>Design',
        'subtitle' => 'Разработка эксклюзивных частных SPA зон для восстановления физического и душевного состояния',
        'label' => 'от SPA COUTURIER – Mikhailov Aleksandr',
        'bubble_text' => 'Мы создаем неповторимую атмосферу релакса...',

        'background_block' => [
            'type' => 'img',

            'data' => [
                'name' => 'hp1'
            ]
        ]
    ],

    'content_block' => [
        [
            'content' => [
                'mod' => 'narrow',
                'text_block' => [
                    'mod' => '_line',
                    'content' => '
                        <p>Воплощаем ваши идеи и желания в особенные пространства с помощью SPA дизайна...</p>
                    '
                ],
            ],

            'bg_text' => [
                'level' => '0',
                'position' => 'prefix',
                'align' => 'right',
                'text' => 'Relax'
            ],

            'background_block' => [
                'type' => 'img',

                'data' => [
                    'name' => 'hp5'
                ]
            ],

            'component' => [
                'name' => 'VideoBubble',

                'data' => [
                    'popup_data' => [
                        //'close_btn' => 'Закрыть',

                        'content' => [
                            'video' => [
                                'id' => 'C0DPdy98e4c',
                                'lang' => 'en',
                                'player_vars' => [
                                    'origin' => '#'
                                ]
                            ],
                        ]
                    ],

                    'preview' =>  [
                        'desk' => '/media/previews/video-preview.jpg',
                        'mod' => '/media/previews/video-preview_mob.jpg',
                    ],
                ],
            ],
        ],
        [
            'content' => [
                'mod' => 'narrow',
                'text_block' => [
                    'mod' => '_line',
                    'content' => '
                        <p>Это не просто пространства для укрепления здоровья и отдыха-они передают чувства, к которым хочется возвращаться вновь и вновь...</p>
                    '
                ],
            ],


            'background_block' => [
                'type' => 'video',

                'poster' => [
                    'desk' => '/media/bg/homepage-bg-2.jpg',
                    'mob' => '/media/bg/homepage-bg-2_mob.jpg'
                ],

                'data' => [
                    'preload' => 'none',
                    'disable_on_ios' => false,
                    'disable_on_windows' => false,

                    'url' => [
                        'desk' => [
                            'mp4' => '/media/video/video-1.mp4',
                            'webm' => '/media/video/video-1.webm',
                        ],
                        'mob' => [
                            'mp4' => '/media/video/video-1_mob.mp4',
                            'webm' => '/media/video/video-1_mob.webm',
                        ]
                    ]
                ]
            ],

//            'background_block' => [
//                'type' => 'video',
//
//                'poster' => [
//                    'desk' => '/media/bg/test1.jpg',
//                    'mob' => '/media/bg/test1.jpg'
//                ],
//
//                'data' => [
//                    'url' => [
//                        'desk' => [
//                            'mp4' => '/media/video/test1.mp4',
//                            'webm' => '/media/video/test1.webm',
//                        ],
//                        'mob' => [
//                            'mp4' => '/media/video/test1.mp4',
//                            'webm' => '/media/video/test1.webm',
//                        ]
//                    ]
//                ]
//            ],

        ],
        [
            'content' => [
                'mod' => 'narrow',
                'text_block' => [
                    'mod' => '_line',
                    'content' => '
                        <p>Это интерьеры, которыми хочется восхищаться, которые хочется ощущать...</p>
                    '
                ],
            ],

            'bg_text' => [
                'level' => '1',
                'position' => 'bottom',
                'align' => 'left',
                'text' => 'Feelings'
            ],

            'background_block' => [
                'type' => 'img',

                'data' => [
                    'name' => 'hp3',
                    'mod' => 'top'
                ]
            ]
        ],
        [
            'content' => [
                'text_block' => [
                    'mod' => '_line',
                    'content' => '
                        <h3>Секрет такой эмоциональной гармонии – это объединение всех сфер эмоционального и телесного  восприятия  в наших проектах</h3>
                        <p>Полное погружение в безмятежность возможно только при воздействии на все чувства человека. У  нас есть все технические возможности для создания нужной атмосферы.</p>
                    '
                ],
            ],

            'background_block' => [
                'type' => 'img',

                'data' => [
                    'name' => 'hp4',
                    'mod' => 'top'
                ]
            ],

            'component' => [
                'name' => 'Bubbles',

                'data' => [
                    'text' => 'Harmony'
                ],
            ],
        ],
        [
            'content' => [
                'text_block' => [
                    'content' => '
                        <h3>Мы берем все лучшее и воплощаем это в наших SPA</h3>
                        <p>Мы предлагаем авторские решения, по  созданию SPA-пространства любого формата , учитывая все индивидуальные особенности.</p>
                    '
                ],

                'button' => [
                    'link' => '/projects',
                    'text' => 'ознакомиться с проектами',
                    'mod' => '_border'
                ]
            ],

            'bg_text' => [
                'level' => '1',
                'position' => 'bottom',
                'text' => 'Exclusive'
            ],

            'component' => [
                'name' => 'BigBubbleLink',

                'data' => [
                    'text' => 'Создайте свой эксклюзивный SPA',
                    'link' => '/realization#configurator'
                ],
            ],
        ]
    ],

    'help_block' => [
        'title' => 'Получите презентацию с примерами работ прямо сейчас',
        'text' => 'Почувствуйте, прикоснитесь, ощутите... это нечто большее, чем просто SPA',
        'button' => [
            'text' => 'получить портфолио',

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
                'name' => 'hp5',
            ]
        ]
    ]
];

echo json_encode($response);
