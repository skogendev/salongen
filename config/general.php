<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see craft\config\GeneralConfig
 */

return [
    // Global settings
    '*' => [
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 0,

        // Enable CSRF Protection (recommended)
        'enableCsrfProtection' => true,

        // Whether generated URLs should omit "index.php"
        'omitScriptNameInUrls' => true,

        // Control Panel trigger word
        'cpTrigger' => 'admin',

        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => getenv('SECURITY_KEY'),

        'useProjectConfigFile' => true,

        // Static asset versioning. This number is set by gulp.
        'environmentVariables' => array(
            'staticAssetsVersion' => 17,
        ),

    ],

    // Dev environment settings
    'dev' => [
        // Base site URL
        'siteUrl' => null,
        'baseUrl' => 'http://localhost:8080',

        // Dev Mode (see https://craftcms.com/support/dev-mode)
        'devMode' => true,
        'environmentVariables' => array(
            'staticAssetsVersion' => time(),
        ),
    ],

    // Staging environment settings
    'staging' => [
        // Base site URL
        'siteUrl' => null,
        'environmentVariables' => array(
            'staticAssetsVersion' => time(),
        ),
    ],

    // Production environment settings
    'production' => [
        // Base site URL
        'siteUrl' => null,
    ],
];
