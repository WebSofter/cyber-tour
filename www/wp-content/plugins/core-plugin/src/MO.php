<?php


namespace Sau\WP\Plugin\Core;


use PLL_MO;

class MO
{
    /**
     * @var PLL_MO
     */
    private static  $mo;

    /**
     * @var string
     */
    private static $lng;

    /**
     * @var bool
     */
    private static $init = false;

    public function __construct($reinit=false)
    {
        if ($reinit) {
            self::$init = false;
        }

        if ( ! self::$init) {
            $lng       = isset($_GET[ 'lang' ]) ? $_GET[ 'lang' ] : pll_default_language();
            self::$lng = $lng;
            $mo        = new PLL_MO();
            $mo->import_from_db(PLL()->model->get_language($lng));
            self::$mo   = $mo;
            self::$init = true;
        }
    }

    /**
     * @return PLL_MO
     */
    public static function mo(): PLL_MO
    {
        return self::$mo;
    }

    /**
     * @return string
     */
    public static function getLng(): string
    {
        return self::$lng;
    }

    /**
     * @return bool
     */
    public static function isInit(): bool
    {
        return self::$init;
    }

}
