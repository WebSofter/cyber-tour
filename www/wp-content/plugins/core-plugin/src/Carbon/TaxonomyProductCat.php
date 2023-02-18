<?php

namespace Sau\WP\Plugin\Core\Carbon;

use Carbon_Fields\Container\Container as CarbonBaseContainer;
use Carbon_Fields\Field;
use Sau\WP\Core\Carbon\Container;

class TaxonomyProductCat extends Container
{
    use \Sau\WP\Core\Carbon\DataTrait;

    /**
     * Container for terms
     */
    public function getType(): string
    {
        return 'term_meta';
    }

    public function configure(CarbonBaseContainer $container)
    {
        $container->where("term_taxonomy", "=", "product-cat");
    }

    public function getTitle(): string
    {
        return 'Category data';
    }

    public function getFields(): array
    {
        return [];
        //        return [
        //            Field::make(
        //                "image",
        //                "img",
        //                __("Img", getenv('PLUGIN_TEXTDOMAIN')))
        //                    ->set_required()
        //                    ->set_width(10),
        //            Field::make('text', 'title', __('Title', THEME_LANG)),
        //            Field::make('text', 'text', __('Text', THEME_LANG)),
        //        ];
    }
}
