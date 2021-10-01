<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'Hotspot React Frontend',
    'description' => 'This extension provides the hotspot content element',
    'category' => 'plugin',
    'author' => 'Adam Koppe',
    'author_email' => 'adam.koppe@3m5.de',
    'state' => 'alpha',
    'clearCacheOnLoad' => 0,
    'author_company' => '3m5. Media GmbH',
    'version' => '1.0.3',
    'constraints' => [
        'depends' => [
            'typo3' => '10.4.0-10.4.99',
            'hotspot_wizard' => '1.0.0-1.0.99',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
];
