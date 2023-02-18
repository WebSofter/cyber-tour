<?php
header("Access-Control-Allow-Origin: *");

$response = [
    'logo' => [
        'img' => '/media/logo/logo_homespadesign.svg',
        'link' => '/',
        'alt' => 'logo'
    ],

    'menu' => [
        [
            'link' => '/philosophy',
            'text' => 'философия',
        ],
        [
            'link' => '/perception',
            'text' => 'сферы восприятия',
        ],
        [
            'link' => '/realization',
            'text' => 'воплощение',
        ],
        [
            'link' => '/projects',
            'text' => 'проекты',
        ],
        [
            'link' => '/partnership',
            'text' => 'партнерам',
        ],
        [
            'link' => '/contacts',
            'text' => 'контакты',
        ],


    ],

    'lang' => [
        'cookie_name' => 'site-lang',
        'btn_text' => 'RU',
        'val' => 'ru'
    ],
];

echo json_encode($response);
