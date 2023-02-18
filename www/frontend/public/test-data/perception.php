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
                'text' => 'Сферы восприятия'
            ],
        ],

        'title' => [
            'text' => 'Сферы восприятия'
        ],

        'subtitle' => 'В основе наших проектов лежит задействование всех сфер эмоционального и тактильного восприятия',

        'background_block' => [
            'type' => 'img',

            'data' => [
                'name' => 'ph1'
            ]
        ]
    ],

    'perception' => [
        'list' => [
            [
                'title' => 'шестое чувство',

                'link_more' => 'подробнее',

                'popup_data' => [
                    'title' => 'Интуиция',
                    //'close_btn' => 'Закрыть',

                    'background_block' => [
                        'type' => 'video',

                        'poster' => [
                            'desk' => '/media/bg/homepage-bg-2.jpg',
                            'mob' => '/media/bg/homepage-bg-2.jpg'
                        ],

                        'data' => [
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

                    'content' => [
                        'text_block' => [
                            'content' => '
                                <p>Важно, какую ценность Вы получаете, а не какую цену платите,  когда речь идет о создании храма отдыха и релаксации, где Ваш ум и тело проходят  обновление и омоложение, обретают душевное спокойствие и равновесие... </p>
                            '
                        ],
                    ]
                ]
            ],
            [
                'title' => 'Осязание',

                'link_more' => 'подробнее',

                'popup_data' => [
                    'title' => 'Осязание',
                    //'close_btn' => 'Закрыть',

                    'bg_text' => [
                        'level' => '1',
                        'position' => 'start',
                        'align' => 'left-0',
                        'text' => 'Touch'
                    ],

                    'content' => [
                        'text_block' => [
                            'content' => '
                                    <p>Важно, какую ценность Вы получаете, а не какую цену платите,  когда речь идет о создании храма отдыха и релаксации, где Ваш ум и тело проходят  обновление и омоложение, обретают душевное спокойствие и равновесие... </p>
                                '
                        ],
                    ]
                ]
            ],
            [
                'title' => 'Вкус',

                'link_more' => 'подробнее',

                'popup_data' => [
                    'title' => 'Вкус',
                    //'close_btn' => 'Закрыть',

                    'bg_text' => [
                        'level' => '1',
                        'position' => 'start',
                        'align' => 'left-0',
                        'text' => 'Taste'
                    ],

                    'content' => [
                        'text_block' => [
                            'content' => '
                                    <p>Важно, какую ценность Вы получаете, а не какую цену платите,  когда речь идет о создании храма отдыха и релаксации, где Ваш ум и тело проходят  обновление и омоложение, обретают душевное спокойствие и равновесие... </p>
                                '
                        ],
                    ]
                ]
            ],
            [
                'title' => 'Обоняние',

                'link_more' => 'подробнее',

                'popup_data' => [
                    'title' => 'Обоняние',
                    //'close_btn' => 'Закрыть',

                    'bg_text' => [
                        'level' => '1',
                        'position' => 'start',
                        'align' => 'left-0',
                        'text' => 'Smell'
                    ],

                    'content' => [
                        'text_block' => [
                            'content' => '
                                    <p>Важно, какую ценность Вы получаете, а не какую цену платите,  когда речь идет о создании храма отдыха и релаксации, где Ваш ум и тело проходят  обновление и омоложение, обретают душевное спокойствие и равновесие... </p>
                                '
                        ],
                    ]
                ]
            ],
            [
                'title' => 'Зрение',

                'link_more' => 'подробнее',

                'popup_data' => [
                    'title' => 'Зрение',
                    //'close_btn' => 'Закрыть',

                    'background_block' => [
                        'type' => 'img',

                        'data' => [
                            'stop_animation' => false,
                            'name' => 'bb'
                        ]
                    ],

                    'bg_text' => [
                        'level' => '1',
                        'position' => 'start',
                        'align' => 'left-0',
                        'text' => 'Vision'
                    ],

                    'content' => [
                        'text_block' => [
                            'content' => '
                                    <p>Важно, какую ценность Вы получаете, а не какую цену платите,  когда речь идет о создании храма отдыха и релаксации, где Ваш ум и тело проходят  обновление и омоложение, обретают душевное спокойствие и равновесие... </p>
                                '
                        ],
                    ]
                ]
            ],
            [
                'title' => 'Слух',

                'link_more' => 'подробнее',

                'popup_data' => [
                    'title' => 'Слух',
                    //'close_btn' => 'Закрыть',

                    'background_block' => [
                        'type' => 'img',

                        'data' => [
                            'stop_animation' => true,
                            'name' => 'bb'
                        ]
                    ],

                    'bg_text' => [
                        'level' => '1',
                        'position' => 'start',
                        'align' => 'left-0',
                        'text' => 'Listen'
                    ],

                    'content' => [
                        'text_block' => [
                            'content' => '
                                    <p>Важно, какую ценность Вы получаете, а не какую цену платите,  когда речь идет о создании храма отдыха и релаксации, где Ваш ум и тело проходят  обновление и омоложение, обретают душевное спокойствие и равновесие... </p>
                                '
                        ],

                        'music' => [
                            'autoplay' => true,

                            'button_text' => [
                                'prefix' => 'music',
                                'suffix_on' => 'on',
                                'suffix_off' => 'off'
                            ],

                            'url' => '/media/audio/2.mp3'
                        ],
                    ]
                ]
            ],
        ]
    ],

    'content_block' => [
        [ //1
            'content' => [
                'text_block' => [
                    'mod' => '_line',
                    'content' => '
                        <h3>ДОМАШНЕЕ СПА (HOME SPA) – не обычное пространство – это синергия всех чувств!!</h3>
                        <p>Секрет Вашей красоты и источник жизненных сил – прямо у вас дома – вдали от городского трафика, стрессов и суеты..</p>
                    '
                ],
            ],

            'background_block' => [
                'type' => 'img',

                'data' => [
                    'name' => 'ph2'
                ]
            ],
        ],
        [ //2
            'content' => [
                'text_block' => [
                    'mod' => '_line',
                    'content' => '
                        <p>Миссия Home Spa Design – создать для Вас индивидуальный домашний спа, объединяющий в себе все шесть чувств, с помощью комплекса оздоровительных методик, современных технологий, искусства и древних традиций!</p>
                    '
                ],
            ],

            'background_block' => [
                'type' => 'img',

                'data' => [
                    'name' => 'pp3'
                ]
            ],
        ],
    ],

    'help_block' => [
        'title' => 'Хотите создать уникальный SPA в вашем доме? ',

        'button' => [
            'text' => 'создать spa',
            'link' => '/realization#configurator'
        ],

        'bg_text' => [
            'level' => '0',
            'position' => 'prefix',
            'text' => 'Home Spa'
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
