<?php
header("Access-Control-Allow-Origin: *");

$response = [
    'music' => [
        'button_text' => [
            'prefix' => 'music',
            'suffix_on' => 'on',
            'suffix_off' => 'off'
        ],

        'main' => true,

        'url' => '/media/audio/3.mp3'
    ],

    'scroll_hint' => 'scroll',

    'soc_button' => [
        'icon' => 'telegram',
        'text' => 'telegram channel',
        'link' => '#'
    ]
];

echo json_encode($response);
