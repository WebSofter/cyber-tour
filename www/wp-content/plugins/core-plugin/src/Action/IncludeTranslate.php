<?php


namespace Sau\WP\Plugin\Core\Action;


use Sau\WP\Core\DependencyInjection\WPExtension\ActionInterface;

class IncludeTranslate implements ActionInterface
{

    function action()
    {
        add_action(
            'init',
            [$this, 'register']
        );
    }

    public function register()
    {
        $translate = include dirname(dirname(__DIR__)).'/pll_translate.php';
        foreach ($translate as $key => $item) {
            foreach ($item as $i) {
                pll_register_string('Tutmee API', $i, $key);
            }
        }
    }
}
