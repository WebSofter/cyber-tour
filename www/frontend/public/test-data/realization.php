<?php
header("Access-Control-Allow-Origin: *");

$response = [
    'header' => [
        'breadcrumbs' => [
            [
                'text' => 'Главная',
                'link' => '/',
            ],
            [
                'text' => 'Воплощение',
            ],
        ],

        'title' => [
            'text' => 'Воплощение',
        ],

        'subtitle' => 'У нас особый подход к реализации ваших идей: это нестереотипное проектирование, это воплощение уникальных и амбициозных идей, желаний и чувств. Мы взяли самое лучшее и предложили его в своих СПА',

        'background_block' => [
            'type' => 'img',

            'data' => [
                'name' => 'hp1',
            ],
        ],
    ],

    'content_block' => [
        [ //1
            'content' => [
                'text_block' => [
                    'mod'     => '_line',
                    'content' => '
                        <h3>Эксклюзивный авторский подход к созданию неповторимой атмосферы Спа</h3>
                        <p>Узкая специализация только на SPA проектах позволяет Вам получить 100% уверенность в нашей компетенции и профессионализме при выполнениии задач с высоким уровнем сложности и эксклюзивности</p>
                    ',
                ],
            ],

            'bg_text' => [
                'level'    => '0',
                'position' => 'bottom',
                'text'     => 'Atmosphere',
            ],
        ],
        [ //2
            'content' => [
                'text_block' => [
                    'mod'     => '_line',
                    'content' => '
                        <h3>Четкое понимание ваших требований в техническом плане и превышение ваших ожиданий в стилистическом исполнении</h3>
                        <p>Создавая Ваш проект, для нас нет ограничений! Мы руководствуемся всей широтой оборудования и материалами, представленными в данном сегменте, имея прямые контакты с лучшими мировыми производителями.</p>
                    ',
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
                    'content' => '
                        <h3>Мы сохраняем Ваш самый главный актив – ВРЕМЯ! Мы сопровождаем полный цикл – от разработки концепции до конечной реализации проекта!</h3>
                    ',
                ],
            ],

            'background_block' => [
                'type' => 'img',

                'data' => [
                    'name' => 'pp2',
                ],
            ],
        ],
    ],

    'configurator' => [
        'title'             => 'Создайте свой эксклюзивный SPA',
        'subtitle'          => 'Подарите себе здоровье, молодость и красоту. Душа и тело неразрывно связаны, и посещение СПА сегодня- это забота не столько о коже или теле, сколько о балансе внутри себя. Отключитесь от серых будней и негативных новостей в собственном оазисе умиротворения. Мы создаём уникальные СПА- пространства, во главе которых человек, а цель-Ваше душевное благополучие.',
        'selected_title'    => 'Выбранное оборудование и зонирование*:',
        'show_selected_btn' => 'посмотреть список',
        'selected_prefix'   => 'Выбрано:',
        'btn_label'         => '* Здесь указаны лишь базовые компоненты, для воплощения вашей идеи не существует ограничений',
        'tab_btn_text'      => 'выбрать компоненты',

        'background_block' => [
            'type' => 'img',

            'data' => [
                'name' => 'pp3',
            ],
        ],

        'button' => [
            'text' => 'воплотить идею',

            'popup_data' => [
                //'close_btn' => 'Закрыть',

                'content' => [
                    'form' => [
                        'title'    => 'Отправьте заявку',
                        'subtitle' => 'И наш менеджер свяжется с Вами в самое ближайшее время',

                        'button' => [
                            'text' => 'Отправить заявку',
                        ],

                        'conf' => '
                                <p>Нажимая, на кнопку Вы соглашаетесь с <a href="#">политикой конфиденциальности</a></p>
                            ',

                        "fields" => [
                            [
                                "name"  => "topic",
                                "value" => "Request",
                                "label" => "Тема письма",
                                "type"  => "hidden",
                            ],
                            [
                                "name"       => "name",
                                "label"      => "Представьтесь, пожалуйста",
                                "required"   => true,
                                "validation" => [
                                    "properties" => [
                                        "type"   => "string",
                                        "chains" => [
                                            [
                                                "type"  => "required",
                                                "error" => "Укажите имя",
                                            ],
                                        ],
                                    ],
                                ],
                            ],
                            [
                                "name"       => "phone",
                                "label"      => "Ваш телефон",
                                "required"   => true,
                                "validation" => [
                                    "properties" => [
                                        "type"   => "string",
                                        "chains" => [
                                            [
                                                "type"  => "required",
                                                "error" => "Укажите телефон",
                                            ],
                                        ],
                                    ],
                                ],
                            ],
                            [
                                "type"         => "email",
                                "name"         => "email",
                                "label"        => "Ваш e-mail",
                                "required"     => true,
                                "autocomplete" => "email",
                                "validation"   => [
                                    "properties" => [
                                        "type"   => "string",
                                        "chains" => [
                                            [
                                                "type"  => "required",
                                                "error" => "Укажите e-mail",
                                            ],
                                            [
                                                "type"  => "email",
                                                "error" => "Некорректный e-mail",
                                            ],
                                        ],
                                    ],
                                ],
                            ],
                            [
                                "name"       => "city",
                                "label"      => "Введите ваш город",
                                "required"   => true,
                                "validation" => [
                                    "properties" => [
                                        "type"   => "string",
                                        "chains" => [
                                            [
                                                "type"  => "required",
                                                "error" => "Укажите город",
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
                                        <p>Мы очень ценим каждого клиента, поэтому наши эксперты уже обрабатывают вашу заявку. Скоро мы свяжемся и воплотим ваши идеи!</p>
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
                'title' => 'термальная зона',
            ],
            [
                'id'    => 'aqua',
                'title' => 'аква зона',
            ],
            [
                'id'    => 'cooling',
                'title' => 'зона охлаждения',
            ],
            [
                'id'    => 'relax',
                'title' => 'релакс зона',
            ],
        ],

        'tabs' => [
            'title' => 'Выберите компоненты Вашего будущего СПА:',

            'tabs_list' => [
                [
                    'id' => 'thermal',

                    'list' => [
                        [
                            'img'   => '/media/configurator/thermal/russian-sauna.svg',
                            'title' => 'Русская баня',

                            'popup_data' => [
                                'title' => 'Русская баня',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/thermal/sauna.svg',
                            'title' => 'Сауна',

                            'popup_data' => [
                                'title' => 'Сауна',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/thermal/hammam.svg',
                            'title' => 'Хаммам',

                            'popup_data' => [
                                'title' => 'Хаммам',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/thermal/infracted.svg',
                            'title' => 'Инфр. сауна',

                            'popup_data' => [
                                'title' => 'Инфр. сауна',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/thermal/salt.svg',
                            'title' => 'Солевая сауна',

                            'popup_data' => [
                                'title' => 'Солевая сауна',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/thermal/hay-bath.svg',
                            'title' => 'Сенная сауна',

                            'popup_data' => [
                                'title' => 'Сенная сауна',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/thermal/egyptian-bath.svg',
                            'title' => 'Египетская баня',

                            'popup_data' => [
                                'title' => 'Египетская баня',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/thermal/japan-bath.svg',
                            'title' => 'Японская баня',

                            'popup_data' => [
                                'title' => 'Японская баня',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/thermal/rome-bath.svg',
                            'title' => 'Римская баня',

                            'popup_data' => [
                                'title' => 'Римская баня',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/thermal/other.svg',
                            'title' => 'Иное',

                            'popup_data' => [
                                'title' => 'Иное',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                    ],
                ],
                [
                    'id' => 'aqua',

                    'list' => [
                        [
                            'img'   => '/media/configurator/aqua/pool.svg',
                            'title' => 'Бассейн',

                            'popup_data' => [
                                'title' => 'Бассейн',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/aqua/massage.svg',
                            'title' => 'Гидромассажный спа-бассейн',

                            'popup_data' => [
                                'title' => 'Гидромассажный спа-бассейн',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/aqua/cupel.svg',
                            'title' => 'Купель',

                            'popup_data' => [
                                'title' => 'Купель',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/aqua/shower.svg',
                            'title' => 'Душ впечатлений',

                            'popup_data' => [
                                'title' => 'Душ впечатлений',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/aqua/kneipp-track.svg',
                            'title' => 'Дорожка Кнейпа',

                            'popup_data' => [
                                'title' => 'Дорожка Кнейпа',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/aqua/floating.svg',
                            'title' => 'Флоатинг',

                            'popup_data' => [
                                'title' => 'Флоатинг',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                    ],
                ],
                [
                    'id' => 'cooling',

                    'list' => [
                        [
                            'img'   => '/media/configurator/cooling/water.svg',
                            'title' => 'Обливное устройство',

                            'popup_data' => [
                                'title' => 'Обливное устройство',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/cooling/ice.svg',
                            'title' => 'Снегогенератор',

                            'popup_data' => [
                                'title' => 'Снегогенератор',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/cooling/snow.svg',
                            'title' => 'Ледогенератор',

                            'popup_data' => [
                                'title' => 'Ледогенератор',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/cooling/ice-pool.svg',
                            'title' => 'Ледяная прорубь',

                            'popup_data' => [
                                'title' => 'Ледяная прорубь',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/cooling/snow-room.svg',
                            'title' => 'Снежная комната',

                            'popup_data' => [
                                'title' => 'Снежная комната',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/cooling/cryocabine.svg',
                            'title' => 'Криокабина',

                            'popup_data' => [
                                'title' => 'Криокабина',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                    ],
                ],
                [
                    'id' => 'relax',

                    'list' => [
                        [
                            'img'   => '/media/configurator/relax/sun-stimulator.svg',
                            'title' => 'Солнечный симулятор',

                            'popup_data' => [
                                'title' => 'Солнечный симулятор',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/relax/aromatherapy.svg',
                            'title' => 'Ароматерапия',

                            'popup_data' => [
                                'title' => 'Ароматерапия',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/relax/chromotherapy.svg',
                            'title' => 'Хромотерапия',

                            'popup_data' => [
                                'title' => 'Хромотерапия',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/relax/audiotherapy.svg',
                            'title' => 'Аудиотерапия',

                            'popup_data' => [
                                'title' => 'Аудиотерапия',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/relax/salttherapy.svg',
                            'title' => 'Солетерапия',

                            'popup_data' => [
                                'title' => 'Солетерапия',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                        [
                            'img'   => '/media/configurator/relax/stonetherapy.svg',
                            'title' => 'Стоунтерапия',

                            'popup_data' => [
                                'title' => 'Стоунтерапия',
                                //'close_btn' => 'Закрыть',

                                'content' => [
                                    'text_block' => [
                                        'content' => '
                                            <p>Специальные устройства для создания эффекта невесомости, свободного плавания как в мертвом море.</p>
                                        ',
                                    ],
                                ],
                            ],
                        ],
                    ],
                ],
            ],
        ],
    ],

    'offers' => [
        'title'    => 'Мы готовы предложить вариант, который подходит именно вам',
        'subtitle' => 'Стоимость индивидуальна для каждого проекта в зависимости от степени сложности и эксклюзивности. Не привязана к кв.метрам – и рассчитывается только после заполнения технического задания.',

        'background_block' => [
            'type' => 'img',

            'data' => [
                'name' => 'c1',
            ],
        ],

        'list' => [
            [
                'stars'        => 3,
                'title'        => 'Premium Spa',
                'text_preview' => 'Комплексное грамотное функциональное и стилистическое решение СПА пространство',

                'popup_data' => [
                    'title' => 'Premium Spa',
                    //'close_btn' => 'Закрыть',

                    'bg_text' => [
                        'level'    => '1',
                        'position' => 'start',
                        'align'    => 'left-0',
                        'text'     => 'Spa',
                    ],

                    'content' => [
                        'text_block' => [
                            'content' => '
                                    <p>Комплексное грамотное функциональное и стилистическое решение Спа пространства подробной детализацией, визуализацией и пакетом базовых чертежей.</p>
                                    <p>Подходит для людей имеющий представление о технической реализации, но не представляющих конечного результата.</p>
                                ',
                        ],

                        'button' => [
                            'text' => 'воплотить проект',

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
                                        'title'    => 'Отправьте заявку',
                                        'subtitle' => 'И наш менеджер свяжется с Вами в самое ближайшее время',

                                        'button' => [
                                            'text' => 'Отправить заявку',
                                        ],

                                        'conf' => '
                                <p>Нажимая, на кнопку Вы соглашаетесь с <a href="#">политикой конфиденциальности</a></p>
                            ',

                                        "fields" => [
                                            [
                                                "name"  => "topic",
                                                "value" => "Request",
                                                "label" => "Тема письма",
                                                "type"  => "hidden",
                                            ],
                                            [
                                                "name"       => "name",
                                                "label"      => "Представьтесь, пожалуйста",
                                                "required"   => true,
                                                "validation" => [
                                                    "properties" => [
                                                        "type"   => "string",
                                                        "chains" => [
                                                            [
                                                                "type"  => "required",
                                                                "error" => "Укажите имя",
                                                            ],
                                                        ],
                                                    ],
                                                ],
                                            ],
                                            [
                                                "name"       => "phone",
                                                "label"      => "Ваш телефон",
                                                "required"   => true,
                                                "validation" => [
                                                    "properties" => [
                                                        "type"   => "string",
                                                        "chains" => [
                                                            [
                                                                "type"  => "required",
                                                                "error" => "Укажите телефон",
                                                            ],
                                                        ],
                                                    ],
                                                ],
                                            ],
                                            [
                                                "type"         => "email",
                                                "name"         => "email",
                                                "label"        => "Ваш e-mail",
                                                "required"     => true,
                                                "autocomplete" => "email",
                                                "validation"   => [
                                                    "properties" => [
                                                        "type"   => "string",
                                                        "chains" => [
                                                            [
                                                                "type"  => "required",
                                                                "error" => "Укажите e-mail",
                                                            ],
                                                            [
                                                                "type"  => "email",
                                                                "error" => "Некорректный e-mail",
                                                            ],
                                                        ],
                                                    ],
                                                ],
                                            ],
                                            [
                                                "name"       => "city",
                                                "label"      => "Введите ваш город",
                                                "required"   => true,
                                                "validation" => [
                                                    "properties" => [
                                                        "type"   => "string",
                                                        "chains" => [
                                                            [
                                                                "type"  => "required",
                                                                "error" => "Укажите город",
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
                                        <p>Мы очень ценим каждого клиента, поэтому наши эксперты уже обрабатывают вашу заявку. Скоро мы свяжемся и воплотим ваши идеи!</p>
                                    ',
                                                ],
                                            ],
                                        ],
                                    ],
                                ],
                            ],
                        ],
                    ],
                ],
            ],
            [
                'stars'        => 4,
                'title'        => 'Exclusive Spa',
                'text_preview' => 'Эксклюзивное  решение для СПА пространства',


                'popup_data' => [
                    'title' => 'Exclusive Spa',
                    //'close_btn' => 'Закрыть',

                    'bg_text' => [
                        'level'    => '1',
                        'position' => 'start',
                        'align'    => 'left-0',
                        'text'     => 'Spa',
                    ],

                    'content' => [
                        'text_block' => [
                            'content' => '
                                    <p>Комплексное грамотное функциональное и стилистическое решение Спа пространства подробной детализацией, визуализацией и пакетом базовых чертежей.</p>
                                    <p>Подходит для людей имеющий представление о технической реализации, но не представляющих конечного результата.</p>
                                ',
                        ],

                        'button' => [
                            'text' => 'воплотить проект',

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
                                        'title'    => 'Отправьте заявку',
                                        'subtitle' => 'И наш менеджер свяжется с Вами в самое ближайшее время',

                                        'button' => [
                                            'text' => 'Отправить заявку',
                                        ],

                                        'conf' => '
                                <p>Нажимая, на кнопку Вы соглашаетесь с <a href="#">политикой конфиденциальности</a></p>
                            ',

                                        "fields" => [
                                            [
                                                "name"  => "topic",
                                                "value" => "Request",
                                                "label" => "Тема письма",
                                                "type"  => "hidden",
                                            ],
                                            [
                                                "name"       => "name",
                                                "label"      => "Представьтесь, пожалуйста",
                                                "required"   => true,
                                                "validation" => [
                                                    "properties" => [
                                                        "type"   => "string",
                                                        "chains" => [
                                                            [
                                                                "type"  => "required",
                                                                "error" => "Укажите имя",
                                                            ],
                                                        ],
                                                    ],
                                                ],
                                            ],
                                            [
                                                "name"       => "phone",
                                                "label"      => "Ваш телефон",
                                                "required"   => true,
                                                "validation" => [
                                                    "properties" => [
                                                        "type"   => "string",
                                                        "chains" => [
                                                            [
                                                                "type"  => "required",
                                                                "error" => "Укажите телефон",
                                                            ],
                                                        ],
                                                    ],
                                                ],
                                            ],
                                            [
                                                "type"         => "email",
                                                "name"         => "email",
                                                "label"        => "Ваш e-mail",
                                                "required"     => true,
                                                "autocomplete" => "email",
                                                "validation"   => [
                                                    "properties" => [
                                                        "type"   => "string",
                                                        "chains" => [
                                                            [
                                                                "type"  => "required",
                                                                "error" => "Укажите e-mail",
                                                            ],
                                                            [
                                                                "type"  => "email",
                                                                "error" => "Некорректный e-mail",
                                                            ],
                                                        ],
                                                    ],
                                                ],
                                            ],
                                            [
                                                "name"       => "city",
                                                "label"      => "Введите ваш город",
                                                "required"   => true,
                                                "validation" => [
                                                    "properties" => [
                                                        "type"   => "string",
                                                        "chains" => [
                                                            [
                                                                "type"  => "required",
                                                                "error" => "Укажите город",
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
                                        <p>Мы очень ценим каждого клиента, поэтому наши эксперты уже обрабатывают вашу заявку. Скоро мы свяжемся и воплотим ваши идеи!</p>
                                    ',
                                                ],
                                            ],
                                        ],
                                    ],
                                ],
                            ],
                        ],
                    ],
                ],
            ],
            [
                'stars'        => 5,
                'title'        => 'Exclusive Spa. All-inclusive',
                'text_preview' => 'Полное сопровождение от эскиза до запуска в эксплуатацию',
                'label'        => [
                    'text' => '+ SPA Bonus',

                    'data' => [
                        'url' => '',
                    ],
                ],

                'popup_data' => [
                    'title' => 'Exclusive Spa. All-inclusive',
                    //'close_btn' => 'Закрыть',

                    'bg_text' => [
                        'level'    => '1',
                        'position' => 'start',
                        'align'    => 'left-0',
                        'text'     => 'Spa',
                    ],

                    'content' => [
                        'text_block' => [
                            'content' => '
                                    <p>Комплексное грамотное функциональное и стилистическое решение Спа пространства подробной детализацией, визуализацией и пакетом базовых чертежей.</p>
                                    <p>Подходит для людей имеющий представление о технической реализации, но не представляющих конечного результата.</p>
                                ',
                        ],

                        'button' => [
                            'text' => 'воплотить проект',

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
                                        'title'    => 'Отправьте заявку',
                                        'subtitle' => 'И наш менеджер свяжется с Вами в самое ближайшее время',

                                        'button' => [
                                            'text' => 'Отправить заявку',
                                        ],

                                        'conf' => '
                                <p>Нажимая, на кнопку Вы соглашаетесь с <a href="#">политикой конфиденциальности</a></p>
                            ',

                                        "fields" => [
                                            [
                                                "name"  => "topic",
                                                "value" => "Request",
                                                "label" => "Тема письма",
                                                "type"  => "hidden",
                                            ],
                                            [
                                                "name"       => "name",
                                                "label"      => "Представьтесь, пожалуйста",
                                                "required"   => true,
                                                "validation" => [
                                                    "properties" => [
                                                        "type"   => "string",
                                                        "chains" => [
                                                            [
                                                                "type"  => "required",
                                                                "error" => "Укажите имя",
                                                            ],
                                                        ],
                                                    ],
                                                ],
                                            ],
                                            [
                                                "name"       => "phone",
                                                "label"      => "Ваш телефон",
                                                "required"   => true,
                                                "validation" => [
                                                    "properties" => [
                                                        "type"   => "string",
                                                        "chains" => [
                                                            [
                                                                "type"  => "required",
                                                                "error" => "Укажите телефон",
                                                            ],
                                                        ],
                                                    ],
                                                ],
                                            ],
                                            [
                                                "type"         => "email",
                                                "name"         => "email",
                                                "label"        => "Ваш e-mail",
                                                "required"     => true,
                                                "autocomplete" => "email",
                                                "validation"   => [
                                                    "properties" => [
                                                        "type"   => "string",
                                                        "chains" => [
                                                            [
                                                                "type"  => "required",
                                                                "error" => "Укажите e-mail",
                                                            ],
                                                            [
                                                                "type"  => "email",
                                                                "error" => "Некорректный e-mail",
                                                            ],
                                                        ],
                                                    ],
                                                ],
                                            ],
                                            [
                                                "name"       => "city",
                                                "label"      => "Введите ваш город",
                                                "required"   => true,
                                                "validation" => [
                                                    "properties" => [
                                                        "type"   => "string",
                                                        "chains" => [
                                                            [
                                                                "type"  => "required",
                                                                "error" => "Укажите город",
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
                                        <p>Мы очень ценим каждого клиента, поэтому наши эксперты уже обрабатывают вашу заявку. Скоро мы свяжемся и воплотим ваши идеи!</p>
                                    ',
                                                ],
                                            ],
                                        ],
                                    ],
                                ],
                            ],
                        ],
                    ],

                ],
            ],
        ],
    ],

    'help_block' => [
        'title' => 'Необходима консультация эксперта?',
        'text'  => 'Есть вопросы по проекту? Нужна консультация специалиста. Мы услышим и поймем вас',

        'button' => [
            'text' => 'получить консультацию',

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
                        'title'    => 'Отправьте заявку',
                        'subtitle' => 'И наш менеджер свяжется с Вами в самое ближайшее время',

                        'button' => [
                            'text' => 'Отправить заявку',
                        ],

                        'conf' => '
                                <p>Нажимая, на кнопку Вы соглашаетесь с <a href="#">политикой конфиденциальности</a></p>
                            ',

                        "fields" => [
                            [
                                "name"  => "topic",
                                "value" => "Request",
                                "label" => "Тема письма",
                                "type"  => "hidden",
                            ],
                            [
                                "name"       => "name",
                                "label"      => "Представьтесь, пожалуйста",
                                "required"   => true,
                                "validation" => [
                                    "properties" => [
                                        "type"   => "string",
                                        "chains" => [
                                            [
                                                "type"  => "required",
                                                "error" => "Укажите имя",
                                            ],
                                        ],
                                    ],
                                ],
                            ],
                            [
                                "name"       => "phone",
                                "label"      => "Ваш телефон",
                                "required"   => true,
                                "validation" => [
                                    "properties" => [
                                        "type"   => "string",
                                        "chains" => [
                                            [
                                                "type"  => "required",
                                                "error" => "Укажите телефон",
                                            ],
                                        ],
                                    ],
                                ],
                            ],
                            [
                                "type"         => "email",
                                "name"         => "email",
                                "label"        => "Ваш e-mail",
                                "required"     => true,
                                "autocomplete" => "email",
                                "validation"   => [
                                    "properties" => [
                                        "type"   => "string",
                                        "chains" => [
                                            [
                                                "type"  => "required",
                                                "error" => "Укажите e-mail",
                                            ],
                                            [
                                                "type"  => "email",
                                                "error" => "Некорректный e-mail",
                                            ],
                                        ],
                                    ],
                                ],
                            ],
                            [
                                "name"       => "city",
                                "label"      => "Введите ваш город",
                                "required"   => true,
                                "validation" => [
                                    "properties" => [
                                        "type"   => "string",
                                        "chains" => [
                                            [
                                                "type"  => "required",
                                                "error" => "Укажите город",
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
                                        <p>Мы очень ценим каждого клиента, поэтому наши эксперты уже обрабатывают вашу заявку. Скоро мы свяжемся и воплотим ваши идеи!</p>
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
    ],
];

echo json_encode($response);
