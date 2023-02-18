<?php
header("Access-Control-Allow-Origin: *");

$response = [
    'social' => [
        [
            'icon' => 'telegram',
            'text' => 'telegram',
            'link' => '#',
            'gradient_fill' => true
        ],
        [
            'icon' => 'instagram',
            'text' => 'instagram',
            'link' => '#',
            'gradient_fill' => true
        ],
        [
            'icon' => 'facebook',
            'text' => 'facebook',
            'link' => '#',
            'gradient_fill' => true
        ]
    ],

    'copyright' => '© 2019. HomeSpaDesign by Mikhailov Aleksandr'
];

echo json_encode($response);
