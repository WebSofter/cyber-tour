<?php

namespace Sau\WP\Plugin\Core\Carbon;

use Carbon_Fields\Container\Container as CarbonBaseContainer;
use Carbon_Fields\Field;
use Sau\WP\Core\Carbon\Container;
use Sau\WP\Plugin\Core\PostType\Product as ProductType;

class Product extends Container
{
    use \Sau\WP\Core\Carbon\DataTrait;

    /**
     * Container for posts
     */
    public function getType(): string
    {
        return 'post_meta';
    }

    public function configure(CarbonBaseContainer $container)
    {
        $container->where("post_type", "=", ProductType::TYPE_NAME);
    }

    public function getTitle(): string
    {
        return 'Projects';
    }

    public function getFields(): array
    {
        return array_merge(
            $this->getPreview(),
            $this->getBgSlider(),
            $this->getContent(),
            $this->getTour(),
            $this->getSlider(),
            $this->getCompare()
        );
    }

    private function getPreview()
    {
        $prefix = 'preview_';

        return [
            Field::make("separator", $prefix, __('Preview', THEME_LANG)),
            Field::make('text', $prefix.'subtitle', __('Subtitle', THEME_LANG))
                 ->set_width(80),
            Field::make("image", $prefix."img", __('Preview image', THEME_LANG))
                 ->set_width(20),

        ];
    }

    public function getSlider()
    {
        $prefix = 'slider_';

        return [
            Field::make("separator", $prefix, __('Compare', THEME_LANG)),
            Field::make('text', $prefix.'title', __('Title', THEME_LANG)),
            Field::make('media_gallery', $prefix.'gallery', __('Gallery', THEME_LANG))
                 ->set_duplicates_allowed(false)
                 ->set_type(['image']),

        ];
    }

    public function getCompare()
    {
        $prefix = 'compare_';

        return [
            Field::make("separator", $prefix, __('Compare', THEME_LANG)),
            Field::make('text', $prefix.'title', __('Title', THEME_LANG)),
            Field::make("image", $prefix."img_desk_before", __('Image desk(before)', THEME_LANG))
                 ->set_width(25),
            Field::make("image", $prefix."img_desk_after", __('Image desk(after)', THEME_LANG))
                 ->set_width(25),
            Field::make("image", $prefix."img_mob_before", __('Image mob.(before)', THEME_LANG))
                 ->set_width(25),
            Field::make("image", $prefix."img_mob_after", __('Image mob.(after)', THEME_LANG))
                 ->set_width(25),

        ];
    }

    public function getTour()
    {
        $prefix = 'tour_';

        return [
            Field::make("separator", $prefix, __('360 Tour', THEME_LANG)),
            Field::make('text', $prefix.'link', __('Link', THEME_LANG))
                 ->set_attribute('type', 'url'),
            Field::make("image", $prefix."preview_desk", __('Tour preview(desk)', THEME_LANG))
                 ->set_width(10),
            Field::make("image", $prefix."preview_mob", __('Tour preview(mob)', THEME_LANG))
                 ->set_width(10),

        ];

    }

    public function getContent()
    {
        $prefix = 'content_';

        return [
            Field::make("separator", $prefix, __('Content', THEME_LANG)),
            Field::make('text', $prefix.'aside', __('Aside text', THEME_LANG)),
            Field::make('rich_text', $prefix.'content', __('Content', THEME_LANG)),
        ];
    }

    private function getBgSlider()
    {
        $prefix = 'bg_slider_';

        return [
            Field::make('complex', $prefix.'gallery', __('Background slider', THEME_LANG))
                 ->add_fields(
                     [
                         Field::make("image","desk", __('Desk.', THEME_LANG))
                              ->set_width(10),
                         Field::make("image", "mob", __('Mob.', THEME_LANG))
                              ->set_width(10),
                     ]
                 )
                 ->set_layout('tabbed-horizontal'),
        ];
    }
}
