<?php


namespace Sau\WP\Plugin\Core\Action;

use Sau\WP\Core\Carbon\ContainerInterface;
use Sau\WP\Core\DependencyInjection\WPExtension\ActionInterface;
use Sau\WP\Plugin\Core\MO;
use Sau\WP\SettingsAPI\Fields\PageListField;
use Sau\WP\SettingsAPI\SettingsGroup;

class Settings implements ActionInterface
{

    function action()
    {

        $settings = new SettingsGroup('pages', 'Страницы API', 'reading');
        $settings->addField(new PageListField('index_page', 'Главная'))
                 ->addField(new PageListField('contacts_page', 'Контакты'))
                 ->addField(new PageListField('partnership_page', 'Партнёрам'))
                 ->addField(new PageListField('perception_page', 'Сферы восприятия'))
                 ->addField(new PageListField('philosophy_page', 'Философия'))
                 ->addField(new PageListField('realization_page', 'Воплощение'))
                 ->addField(new PageListField('projects_page', 'Проекты'))
                 ->addField(new PageListField('offers_page', 'Отзывы'))
            ;

        $keys = [
            get_option('perception_page'),
            get_option('index_page'),
            get_option('contacts_page'),
            get_option('partnership_page'),
            get_option('philosophy_page'),
            get_option('realization_page'),
            get_option('projects_page'),
            get_option('offers_page'),
        ];
        add_action(
            'admin_head',
            function () use ($keys) {
                if (isset($_GET[ 'post' ]) && in_array($_GET[ 'post' ], $keys)) {
                    echo '<style>#postdivrich{display: none}</style>';
                }

            }
        );
        add_filter(
            'use_block_editor_for_post',
            function ($use_block_editor, $post) use ($keys) {
                if (in_array($post->ID, $keys)) {
                    $use_block_editor = false;
                }

                return $use_block_editor;
            },
            10,
            2
        );
    }
}
