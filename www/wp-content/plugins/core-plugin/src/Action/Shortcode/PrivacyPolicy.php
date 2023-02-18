<?php


namespace Sau\WP\Plugin\Core\Action\Shortcode;


use Sau\WP\Core\DependencyInjection\WPExtension\ActionInterface;

class PrivacyPolicy implements ActionInterface
{

    function action()
    {
        if (function_exists('add_shortcode')) {
            add_shortcode('pp', [$this, 'shortcode']);
        }
    }

    public function shortcode($atts, $content)
    {
        if (isset($_GET[ 'lang' ])) {
            $lng = $_GET[ 'lang' ];
        } else {
            $lng = 'ru';
        }
        $link = wp_get_attachment_url(carbon_get_theme_option('pp_'.$lng));

        $pattern = $link ? '<a href="%s">%s</a>' : '%2$s';

        return sprintf($pattern, $link, $content);
    }
}
