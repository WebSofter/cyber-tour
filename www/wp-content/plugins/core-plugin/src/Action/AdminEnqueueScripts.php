<?php


namespace Sau\WP\Plugin\Core\Action;

use Sau\WP\Core\Carbon\ContainerInterface;
use Sau\WP\Core\DependencyInjection\WPExtension\ActionInterface;
use Sau\WP\Plugin\Core\MO;

class AdminEnqueueScripts implements ActionInterface
{

    public function __construct()
    {
    }

    function action()
    {
        // TODO: Change css and js
        add_action(
            'admin_enqueue_scripts',
            function () {
                wp_enqueue_style(
                    'core-plugin__default',
                    plugin_dir_url(__FILE__).'/assets/core-plugin__default.css',
                    false,
                    '1.0.0'
                );
            }
        );
    }
}
