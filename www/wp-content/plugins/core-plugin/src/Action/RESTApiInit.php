<?php

namespace Sau\WP\Plugin\Core\Action;

use Sau\WP\Core\DependencyInjection\WPExtension\ActionInterface;
use Sau\WP\Plugin\Core\MO;


class RESTApiInit implements ActionInterface
{

    function action()
    {
        // TODO: Change css and js
        add_action(
            'rest_api_init',
            function () {
                $mo = new MO();
            }
        );
    }
}
