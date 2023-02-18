<?php

namespace Sau\WP\Plugin\Core\PostType;

class Product implements \Sau\WP\Core\DependencyInjection\WPExtension\ActionInterface
{
    const TYPE_NAME     = 'product';
    const TAXONOMY_NAME = 'product-cat';

    function action()
    {

        add_action(
            'init',
            function () {
                register_post_type(
                    self::TYPE_NAME,
                    array(
                        'label'         => null,
                        'labels'        => array(
                            'name'               => 'Товар',
                            'singular_name'      => 'Товар',
                            'add_new'            => 'Добавить товар',
                            'add_new_item'       => 'Добавление товара',
                            'edit_item'          => 'Редактирование товара',
                            'new_item'           => 'Новый товар',
                            'view_item'          => 'Смотреть товар',
                            'search_items'       => 'Искать товар',
                            'not_found'          => 'Не найдено',
                            'not_found_in_trash' => 'Не найдено в корзине',
                            'menu_name'          => 'Товары',
                        ),
                        'description'   => '',
                        'public'        => true,
                        'show_in_menu'  => null,
                        'show_in_rest'  => null,
                        'rest_base'     => null,
                        'menu_position' => null,
                        'menu_icon'     => null,
                        'hierarchical'  => false,
                        'supports'      => ['title'],
                        'taxonomies'    => [],
                        'has_archive'   => false,
                        'rewrite'       => true,
                        'query_var'     => true,
                    )
                );
                register_taxonomy(
                    self::TAXONOMY_NAME,
                    [self::TYPE_NAME],
                    [
                        'label'        => '',
                        // определяется параметром $labels->name
                        'labels'       => [
                            'name'          => 'Категории',
                            'singular_name' => 'Категория',
                            'search_items'  => 'Поиск',
                            'all_items'     => 'Все',
                            'view_item '    => 'Просмотр',
                            //                        'parent_item'       => 'Parent Genre',
                            //                        'parent_item_colon' => 'Parent Genre:',
                            'edit_item'     => 'Изменить',
                            'update_item'   => 'Обновить',
                            'add_new_item'  => 'Добавить',
                            'new_item_name' => 'Новыая',
                            'menu_name'     => 'Категории',
                        ],
                        'description'  => '',
                        // описание таксономии
                        'public'       => true,
                        'hierarchical' => false,

                        'rewrite'           => true,
                        'meta_box_cb'       => null,
                        // html метабокса. callback: `post_categories_meta_box` или `post_tags_meta_box`. false — метабокс отключен.
                        'show_admin_column' => false,
                        // авто-создание колонки таксы в таблице ассоциированного типа записи. (с версии 3.5)
                        'show_in_rest'      => null,
                        // добавить в REST API
                        'rest_base'         => null,
                        // $taxonomy
                    ]
                );


            }
        );
    }
}
