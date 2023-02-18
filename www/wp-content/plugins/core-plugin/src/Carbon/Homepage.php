<?php

namespace Sau\WP\Plugin\Core\Carbon;

use Carbon_Fields\Container\Container as CarbonBaseContainer;
use Carbon_Fields\Field;
use Sau\WP\Core\Carbon\Container;
use Sau\WP\Plugin\Core\Carbon\Fieldset\HomePageFieldset;

/**
 * Class Homepage
 * @package Sau\WP\Plugin\Core\Carbon
 */
class Homepage extends Container
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
        $container->where("post_id", "=", get_option('index_page'));
    }

    public function getTitle(): string
    {
        return 'Homepage';
    }

    public function getFields(): array
    {
        $langs = [
            'ru' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAdVBMVEX19f/u7vjm5/H+/v75+fng4Ove3ulFRfyysv6cnP6QkPmIiPh/f/YAAOYAAP1ycv5QUP06OvkxMfcoKPcgIPYUFPS0AADdaYzTRG/RPGnOM2LKLFzIIVPCEUZ7AAD0AQH7YGH3ODj0JyfzERDgAAD4TU3pAABIfLuPAAAAT0lEQVR4AQXBAQqDMAAAsZytyHzA/v9LYRS7JIAQMkBb0ATsgLoKInnHvIrHrdRaBzxupTDxuFUifUsp4R3zU4iwzmOyT1ibBtP2u3C+wB+SHBB5JNY7DAAAAABJRU5ErkJggg==',
            'it' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAUVBMVEUAiQAAgADk5OTe3t7vAAB3yXf9/f36+vr5Vlb3RkZjwWNYvVj4+Pj1MzP1KChQuFD1GxviAABHtUf19fXzDw4/sT8AcAA2qzYAWgDLy8vDw8ObXclsAAAAVElEQVR4AQXBSwoCQRQEsNT70CC69P5XdCUMA2ISSAiBWAQScg8bN7GJWxFDrCivwhCLMipGx3LKUOi2HAZluy2HgXprxQGfGL6G63B5MJ5FCD/4A3DaCLvbBle5AAAAAElFTkSuQmCC',
            'fr' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAbFBMVEVzldTg4ODS0tLxDwDtAwDjAADD0uz39/fy8vL3k4nzgna4yOixwuXu7u7s6+zn5+fyd2rvcGPtZljYAABrjNCpvOHrWkxegsqfs93NAADpUUFRd8THAABBa7wnVbERRKa8vLyxsLCoqKigoKClCvcsAAAAXklEQVR4AS3JxUEAQQAEwZo13Mk/R9w5/7UERJCIGIgj5qfRJZEpPyNfCgJTjMR1eRRnJiExFJz5Mf1PokWr/UztIjRGQ3V486u0HO55m634U6dMcf0RNPfkVCTvKjO16xHA8miowAAAAABJRU5ErkJggg==',
            'en' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAmVBMVEViZsViZMJiYrf9gnL8eWrlYkjgYkjZYkj8/PujwPybvPz4+PetraBEgfo+fvo3efkydfkqcvj8Y2T8UlL8Q0P8MzP9k4Hz8/Lu7u4DdPj9/VrKysI9fPoDc/EAZ7z7IiLHYkjp6ekCcOTk5OIASbfY/v21takAJrT5Dg6sYkjc3Nn94t2RkYD+y8KeYkjs/v7l5fz0dF22YkjWvcOLAAAAgElEQVR4AR2KNULFQBgGZ5J13KGGKvc/Cw1uPe62eb9+Jr1EUBFHSgxxjP2Eca6AfUSfVlUfBvm1Ui1bqafctqMndNkXpb01h5TLx4b6TIXgwOCHfjv+/Pz+5vPRw7txGWT2h6yO0/GaYltIp5PT1dEpLNPL/SdWjYjAAZtvRPgHJX4Xio+DSrkAAAAASUVORK5CYII=',
            'de' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAABLElEQVR4AY2QgUZEQRSGz9ydmzbYkBWABBJYABHEFhJ6m0WP0DMEQNIr9AKrN8ne2Tt3Zs7MOdOZmRBEv+v34Tvub9R6fdNlAzU+snSME/wdjbjbbJ6EiEg6BA8102QbjKNpoMzw8v6qD/sOALbbT2MC1NgaAWOKOgxf5czY+4dbAX2G/THzcozLrvPV85IQyqVz0rvg2p9Pei4HjzSsiFbV4JgyhhxCjpGdZ0RhdikLB9/b8Qig7MkpSovR7Cp59q6CazaNFiTt4J82o6uvdMVwTsztKTXZod4jgOJJuqNAjFyGrBR8gM6XwKfIC4KanBSTZ0rClKh08D9DFh3egW7ebH7NcRDQWrz9rM2Ne+mDOXB2mZJ8agL19nwxR2iZXGm1gDbQKhDjd4yHb2oW/KR8xHicAAAAAElFTkSuQmCC',
            'ar' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAANlBMVEUAYjMTYDs3R0AvV0NObzE3dSoTWzhAZjgyfEY0gl1EcDFqpIhKj28TVzaLs41ol1JSaF1JW1NzUHm9AAAAPUlEQVR4AY2MtQEAMAgE447tv2xKvuQqeEtRcikZ/9p6b9X/Mdfeaw4PnPvehQhNvpcnJYiInIqraqYpyAd1AAFxIEreLQAAAABJRU5ErkJggg==',
            'zh' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAMAAABBPP0LAAAAXVBMVEXUAADlQgDLAADBAADtgXn63Xjypnf1wHHpcG/oZmbmXVzlU1PjS0q1AAD981775VvwnVD2zkvhPz/fNzfdMjHcKyvaJyfsi0baISHYGhqqAADWExPTDQ2jAACfAAApGpDBAAAAWklEQVR4ATXIhQHDQBTDUMll2n/RMiU5/vQsAE4EsPbaKVOU+pXNwc/WKQXeDZMKu+psCXw/Z7efarmENd6GIwGpXhUvM4spxoiEbouRNT7Fmtaq+RG4wAqZZvceD8DeIelqAAAAAElFTkSuQmCC'
        ];

        $content = [];
        $banner = [];
        foreach($langs as $code => $flag){
            //$content = array_merge($content, $this->getPhilosophy($code, $flag));
            $banner = array_merge($banner, $this->getBannerFields($code, $flag));
            for($number=1;$number<=5;$number++){
                if($number == 1) $content = array_merge($content, $this->getContentFields($number, $code, $flag, true));
                else $content = array_merge($content, $this->getContentFields($number, $code, $flag));
            }
        }

        
        $fields = array_merge(
            $banner,
            $content
        );
        return $fields;
    }

    protected function getBannerFields($code, $flag, string $prefix = 'banner_'): array
    {
        $lang = $code == 'ru' ? '' : $code.'_';
        return [
            Field::make("separator", "banner{$lang}", __("Banner (язык {$code})", THEME_LANG)),
            Field::make("text", "banner_title{$lang}", __("Title", getenv('PLUGIN_TEXTDOMAIN'))),
            Field::make("text", "banner_subtitle{$lang}", __("Subtitle", getenv('PLUGIN_TEXTDOMAIN'))),
            Field::make("text", "banner_label{$lang}", __("Label", getenv('PLUGIN_TEXTDOMAIN'))),
            Field::make("text", "banner_bubble_text{$lang}", __("Bubble text", getenv('PLUGIN_TEXTDOMAIN'))),
        ];
    }

    protected function getContentFields(int $number, $code, $flag, $first = false): array
    {
        $lang = $code == 'ru' ? '' : $code.'_';
        if (in_array($number, [1, 2, 3, 4, 5])) {
            $prefix = 'content_block_'.$number.'_'.$lang;
        }
        $fields = [];
        if ($first) {
            $fields[] = Field::make("separator", $prefix."title", __("Content", getenv('PLUGIN_TEXTDOMAIN')));
        }
        $fields[] = Field::make("html", $prefix.'separator', '')
                         ->set_html('<h4>'.sprintf(__('Block %d %s'), $number, "<img src='$flag' alt='$code'/>").'</h4>');
        $fields [] = Field::make("rich_text", $prefix."content", __("Content", getenv('PLUGIN_TEXTDOMAIN')));
        if ($number == 5) {
            $fields [] = Field::make("text", $prefix."buttontext", __("Button text", getenv('PLUGIN_TEXTDOMAIN')));
            $fields [] = Field::make("text", $prefix."buttonuri", __("Button url", getenv('PLUGIN_TEXTDOMAIN')));
        }
        //        ,
        switch ($number):
            case 1:
                $fields[] = Field::make(
                    "text",
                    $prefix."video_id",
                    __("YouTube video id", getenv('PLUGIN_TEXTDOMAIN'))
                )
                                 ->set_width(10);
                /*$fields[] = Field::make(
                    "checkbox",
                    $prefix."video_show",
                    __("Show video on page", getenv('PLUGIN_TEXTDOMAIN'))
                )
                                 ->set_width(10)
                                 ->set_option_value( 'yes' );*/
                $fields[] = Field::make(
                    "image",
                    $prefix."prev_desk",
                    __("Video preview desk", getenv('PLUGIN_TEXTDOMAIN'))
                )
                                 ->set_width(10);
                $fields[] = Field::make(
                    "image",
                    $prefix."prev_mod",
                    __("Preview mob", getenv('PLUGIN_TEXTDOMAIN'))
                )
                                 ->set_required()
                                 ->set_width(10);
            case 3:
            case 5:
                $fields[] = Field::make("text", $prefix."bg_text", __("Background text", getenv('PLUGIN_TEXTDOMAIN')));
                break;
            case 2:
                $fields[] = Field::make(
                    "image",
                    $prefix."poster_desk",
                    __("Poster desk", getenv('PLUGIN_TEXTDOMAIN'))
                )
                                 ->set_required()
                                 ->set_width(10);
                $fields[] = Field::make(
                    "image",
                    $prefix."poster_mob",
                    __("Poster mob", getenv('PLUGIN_TEXTDOMAIN'))
                )
                                 ->set_required()
                                 ->set_width(10);
                $fields[] = Field::make(
                    "file",
                    $prefix."data_desc_mp4",
                    __("Video desk(mp4)", getenv('PLUGIN_TEXTDOMAIN'))
                )
                                 ->set_required()
                                 ->set_type("video/mp4")
                                 ->set_width(10);
                $fields[] = Field::make(
                    "file",
                    $prefix."data_desc_webm",
                    __("Video desk(webm)", getenv('PLUGIN_TEXTDOMAIN'))
                )
                                 ->set_required()
                                 ->set_type("video/webm")
                                 ->set_width(10);
                $fields[] = Field::make(
                    "file",
                    $prefix."data_mob_mp4",
                    __("Video mob(mp4)", getenv('PLUGIN_TEXTDOMAIN'))
                )
                                 ->set_required()
                                 ->set_type("video/mp4")
                                 ->set_width(10);
                $fields[] = Field::make(
                    "file",
                    $prefix."data_mob_webm",
                    __("Video mod(webm)", getenv('PLUGIN_TEXTDOMAIN'))
                )
                                 ->set_required()
                                 ->set_type("video/webm")
                                 ->set_width(10);
                break;
            case 4:
                $fields[] = Field::make("text", $prefix."bauble_text", __("Bubble text", getenv('PLUGIN_TEXTDOMAIN')));
                break;
        endswitch;

        return $fields;
    }
}
