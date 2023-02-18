<?php


namespace Sau\WP\Plugin\Core\Action;


use Sau\WP\Core\DependencyInjection\WPExtension\ActionInterface;

class StyleScript implements ActionInterface
{

    function action()
    {
        // TODO: Change css and js
        add_action(
            'wp_enqueue_scripts',
            function () {
                wp_enqueue_style('theme__style', get_stylesheet_directory_uri().'/css/style.css', false, '1.0.0');
                wp_enqueue_script('theme__script', get_stylesheet_directory_uri().'/js/bundle.js', [], '1.0.0', true);
            }
        );
    }
}
