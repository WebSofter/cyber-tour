<?php
header("Access-Control-Allow-Origin: *");

$response = [
    'banner' => [
        'title' => [],

        'subtitle' => ''
    ],




    'video_block' => [
        'title' => [
            'level' => '2',
            'text' => 'WHO WE ARE'
        ],

        'text_block' => [
            'content' => '
                <h5>KIMIMO IS A GERMAN TECHNOLOGY-CENTRIC COMPANY CREATING REAL AI-POWERED PRODUCTS</h5>
                <p>KIMIMO management team has aggregated their ultimate enthusiasm and passion about digital economy, 20+ years of breakthrough technologies experience and the top team of world-class engineers, scientists, mathematicians, architects, developers and designers.</p>            
            '
        ],
        'btn' => [
            'href' => '/about',
            'text' => 'more'
        ],
        'video' => [
            'mp4' => '/media/video/kimimo.mp4',
            'webm' => '/media/video/kimimo.webm',
        ],
        'poster' => '/media/video-preview_main.jpg',
        'asideText' => 'watch video'
    ],
    'service' => [
        'mob_overlay' => '1',

        'title' => [
            'level' => '2',
            'text' => 'AI as a service'
        ],

        'text_block' => [
            'content' => '
                <h5>CUTTING-EDGE SOLUTIONS FOR PEOPLE, INDUSTRIES AND MACHINES</h5>
                <p>Relying on versatile industries digital experience of our team, we offer our customers and partners a unique AI-powered solutions co-creation model for building new-generation of Smart-like products.</p>
            '
        ],
        'btn' => [
            'href' => '/service',
            'text' => 'more'
        ],
        'img' => [
            'desk' => '/media/service-bg.jpg',
            'mob' => '/media/service-bg_mob.jpg'
        ],
        'services_list' => [
            [
                'title' => 'KIMIEYE',
                'text' => 'AI-powered cloud platform',
                'link' => 'kimieye/'
            ],
            [
                'title' => 'KIMITWIN',
                'text' => 'AI-powered digital twin',
                'link' => 'kimitwin/'
            ],
            [
                'title' => 'KIMIDESIGN',
                'text' => 'Unique creative team',
                'link' => 'kimidesign/'
            ]
        ]
    ],
    'technologies' => [
        'title' => [
            'level' => '2',
            'text' => 'OUR TECHNOLOGies'
        ],

        'text_block' => [
            'content' => '
                <h6>Bringing these technologies together we provide unique digital
services aiming to:</h6>
                <ul>
                    <li>gain new data insights</li>
                    <li>comfortably transform to new business models</li>
                    <li>achieve tangible business  outcomes</li>
                </ul>
            '
        ],

        'main_svg' => [
            'svg' => 'ai',
            'title' => 'ARTIFICIAL INTELLIGENCE',
            'link' => 'technologies#product-info'
        ],

        'list' => [
            [
                'svg' => 'ml',
                'title' => 'MACHINE LEARNING',
                'link' => 'technologies#machine-learning'
            ],
            [
                'svg' => 'cv',
                'title' => 'COMPUTER VISION',
                'link' => 'technologies#computer-vision'
            ],
            [
                'svg' => 'al',
                'title' => 'ADVANCED ANALYTICS',
                'link' => 'technologies#advanced-analytics'
            ],
            [
                'svg' => 'mo',
                'title' => 'MATHEMATICAL OPTIMIZATION',
                'link' => 'technologies#math-optimization'
            ],
        ],

        'asideText' => 'BRINGING THESE TECHNOLOGIES TOGETHER'
    ],
    'latest_news' => [
        'title' => [
            'level' => '2',
            'text' => 'WHAT`S new'
        ],

        'list' => [
            [
                'title' => 'KIMIMO in the largest European fast food chain',
                'text_block' => [
                    'content' => '
                        <p>We are proud to deliver proof of AI driven concept in one of the largest European fast food chain.</p>            
                    '
                ],
                'link' => '/news/fast-food-chain'
            ],
            [
                'title' => 'Meet us at main.IT 2019',
                'text_block' => [
                    'content' => '
                        <p>KIMIMO represented by the Head of Science Department Dr. Victor Bucha will take part in the conference main.IT on September 26 in Eibelstadt.</p>            
                    '
                ],
                'link' => '/news/conference'
            ],
            [
                'title' => 'KiMiMo Opening Day',
                'text_block' => [
                    'content' => '
                        <p>We are pleased to announce the opening of our office in Germany on September 27, 2019.</p>            
                    '
                ],
                'link' => '/news/opening-day'
            ]
        ],

        'button_more' => [
            'text' => 'more',
            'link' => '/news'
        ],

        'asideText' => 'TOGETHER WITH YOU WE CREATE THE FUTURE'
    ],
];

echo json_encode($response);
