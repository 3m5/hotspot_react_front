<?php
/** @noinspection PhpFullyQualifiedNameUsageInspection */

defined('TYPO3_MODE') || die();

\TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
    "hotspot_react",
    'HotspotImage',
    [
        \DMF\HotspotReact\Controller\HotspotImageController::class => 'view',
    ],
    [
        DMF\HotspotReact\Controller\HotspotImageController::class => '',
    ]
);
