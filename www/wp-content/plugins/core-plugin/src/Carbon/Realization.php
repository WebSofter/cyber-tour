<?php

namespace Sau\WP\Plugin\Core\Carbon;

use Carbon_Fields\Container\Container as CarbonBaseContainer;
use Carbon_Fields\Field;
use Sau\WP\Core\Carbon\Container;

class Realization extends Container
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
        $container->where("post_id", "=", get_option('realization_page'));
    }

    public function getTitle(): string
    {
        return 'Realization';
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
        $configurator = [];
        $offers= [];
        $formData = [];
        $realization = [];
        foreach($langs as $code => $flag){
            $realization = array_merge($realization, $this->getRealization($code, $flag));
            $configurator = array_merge($configurator, $this->getConfigurator($code, $flag));
            $offers = array_merge($offers, $this->getOffers($code, $flag));
            $formData = array_merge($formData, $this->getFormData($code, $flag));
            for($number=1;$number<=3;$number++){
                $content = array_merge($content, $this->getContent($number, $code, $flag));
            }
        }
        return array_merge(
            $configurator,
            $realization,
            $content,
            $offers,
            $formData,
            //$this->getConfigurator(),
            //$this->getContent(1),
            //$this->getContent(2),
            //$this->getContent(3),
            //$this->getConfigurator(),
            //$this->getOffers(),
            //$this->getFormData()
        );
    }
    private function getRealization($code, $flag){
        $lang = $code == 'ru' ? '' : $code.'_';
        return  [
                Field::make('text', 'subtitle'.$lang, __("Subtitle (Язык {$code})", THEME_LANG))
                    ->set_help_text(
                        $var = __(
                            'У нас особый подход к реализации ваших идей: это нестереотипное проектирование, это воплощение уникальных и амбициозных идей, желаний и чувств. Мы взяли самое лучшее и предложили его в своих СПА',
                            THEME_LANG
                        )
                    )
                    ->set_default_value($var),
                        ];
    }
    private function getContent(int $number, $code, $flag)
    {
        $lang = $code == 'ru' ? '' : $code.'_';
        $prefix = 'realization_content_block_'.$number.'_'.$lang;
        $fields = [];
        if ($number == 1) {
            $fields[] = Field::make("separator", $prefix."", __("Content (Язык {$code})", THEME_LANG));
        }
        $fields[] = Field::make("html", $prefix."_html", '')
                         ->set_html(sprintf('<h4>%s %s %s</h4>', __('Content block'), $number, "<img src='$flag' alt='$code'/>"));
        if ($number == 1) {
            $fields[] = Field::make('text', $prefix.'bg_text', __('Background text', THEME_LANG))
                             ->set_help_text($var = __('Atmosphere', THEME_LANG))
                             ->set_default_value($var);
        }
        $fields[] = Field::make('rich_text', $prefix.'content', '');

        return $fields;
    }

    private function getConfigurator($code, $flag)
    {
        $lang = $code == 'ru' ? '' : $code.'_';
        $prefix    = 'conf_'.$lang;
        $fields    = [];
        $fields[]  = Field::make("separator", $prefix."conf", __("Configurator (Язык {$code})", THEME_LANG));
        $fields[]  = Field::make('text', $prefix.'title', __('Title', THEME_LANG))
                          ->set_help_text($var = __('Создайте свой эксклюзивный SPA', THEME_LANG))
                          ->set_default_value($var);
        $fields[]  = Field::make('text', $prefix.'subtitle', __('Subtitle', THEME_LANG))
                          ->set_help_text(
                              $var = __(
                                  'Подарите себе здоровье, молодость и красоту. Душа и тело неразрывно связаны, и посещение СПА сегодня- это забота не столько о коже или теле, сколько о балансе внутри себя. Отключитесь от серых будней и негативных новостей в собственном оазисе умиротворения. Мы создаём уникальные СПА- пространства, во главе которых человек, а цель-Ваше душевное благополучие.',
                                  THEME_LANG
                              )
                          )
                          ->set_default_value($var);
        $fields [] = Field::make('complex', $lang.'list', __('List', THEME_LANG))
                          ->add_fields(
                              [
                                  Field::make('hidden', 'name', ''),
                                  Field::make('hidden', 'id', ''),
                                  Field::make('complex', 'item', '')
                                       ->add_fields(
                                           [
                                               Field::make('text', 'title', __('Title', THEME_LANG))
                                                    ->set_width(85),
                                               Field::make("image", "img", __('Svg', THEME_LANG))
                                                    ->set_width(15),
                                               Field::make('text', 'content', __('Content', THEME_LANG)),
                                           ]
                                       )
                                       ->set_layout('tabbed-horizontal')
                                       ->set_header_template('<% if (title) { %><%- title %><% } %>'),
                              ]
                          )
                          ->set_default_value(
                              [
                                  [
                                      'id'   => 'thermal',
                                      'name' => __('термальная зона', THEME_LANG),
                                  ],
                                  [
                                      'id'   => 'aqua',
                                      'name' => __('аква зона', THEME_LANG),
                                  ],
                                  [
                                      'id'   => 'cooling',
                                      'name' => __('зона охлаждения', THEME_LANG),
                                  ],
                                  [
                                      'id'   => 'relax',
                                      'name' => __('релакс зона', THEME_LANG),
                                  ],
                              ]
                          )
                          ->set_layout('tabbed-horizontal')
                          ->set_min(4)
                          ->set_max(4)
                          ->set_header_template('<% if (name) { %> <%- name %> <% } %>');

        return $fields;
    }

    private function getOffers($code, $flag)
    {
        $lang = $code == 'ru' ? '' : $code.'_';
        $prefix   = 'offers_'.$lang;
        $fields   = [];
        $fields[] = Field::make("separator", $prefix."", __("Offers (Язык {$code})", THEME_LANG));
        $fields[] = Field::make('text', $prefix.'title', __('Title', THEME_LANG))
                         ->set_help_text(
                             $var = __('Мы готовы предложить вариант, который подходит именно вам', THEME_LANG)
                         )
                         ->set_default_value($var);
        $fields[] = Field::make('text', $prefix.'subtitle', __('Subtitle', THEME_LANG))
                         ->set_help_text(
                             $var = __(
                                 'Стоимость индивидуальна для каждого проекта в зависимости от степени сложности и эксклюзивности. Не привязана к кв.метрам – и рассчитывается только после заполнения технического задания.',
                                 THEME_LANG
                             )
                         )
                         ->set_default_value($var);
        $fields[] = Field::make('complex', $prefix.'list', __('List', THEME_LANG))
                         ->add_fields(
                             [
                                 Field::make('text', 'stars', __('Stars', THEME_LANG))->set_attribute('type', 'number'),
                                 Field::make('text', 'title', __('Title', THEME_LANG)),
                                 Field::make('text', 'subtitle', __('Subtitle', THEME_LANG)),
                                 Field::make('rich_text', 'content', __('Content', THEME_LANG)),
                                 Field::make('text', 'label', __('Label', THEME_LANG)),
                             ]
                         )
                         /*
                         ->set_default_value(
                             [
                                 [
                                     'stars'    => 3,
                                     'title'    => 'Premium Spa',
                                     'subtitle' => 'Комплексное грамотное функциональное и стилистическое решение СПА пространство',
                                     'content'  => '<p>Комплексное грамотное функциональное и стилистическое решение Спа пространства подробной детализацией, визуализацией и пакетом базовых чертежей.</p><p>Подходит для людей имеющий представление о технической реализации, но не представляющих конечного результата.</p>',
                                 ],
                                 [
                                     'stars'    => 4,
                                     'title'    => 'Exclusive Spa',
                                     'subtitle' => 'Эксклюзивное  решение для СПА пространства',
                                     'content'  => '<p>Комплексное грамотное функциональное и стилистическое решение Спа пространства подробной детализацией, визуализацией и пакетом базовых чертежей.</p><p>Подходит для людей имеющий представление о технической реализации, но не представляющих конечного результата.</p>',
                                 ],
                                 [
                                     'stars'    => 5,
                                     'title'    => 'Exclusive Spa. All-inclusive',
                                     'subtitle' => 'Полное сопровождение от эскиза до запуска в эксплуатацию',
                                     'content'  => '<p>Комплексное грамотное функциональное и стилистическое решение Спа пространства подробной детализацией, визуализацией и пакетом базовых чертежей.</p><p>Подходит для людей имеющий представление о технической реализации, но не представляющих конечного результата.</p>',
                                     'label'    => '+ SPA Bonus',
                                 ],
                             ]
                         )
                         */
                         ->set_layout('tabbed-horizontal')
                         ->set_min(3)
                         ->set_max(3)
                         ->set_header_template('<% if (stars) { %>Stars: <%- stars %><% } %>');

        return $fields;
    }

    private function getFormData($code, $flag)
    {
        $lang = $code == 'ru' ? '' : $code.'_';
        $prefix = 'formdata_'.$lang;
        $fields = [];
        $fields[] = Field::make("separator", $prefix."", __("Form Data (Язык {$code})", THEME_LANG));
        $fields[] = Field::make('text', $prefix.'title', __('Title', THEME_LANG))
            ->set_help_text(
                $var = __('Необходима консультация эксперта?', THEME_LANG)
            )
            ->set_default_value($var);
        $fields[] = Field::make('text', $prefix.'subtitle', __('Subtitle', THEME_LANG))
            ->set_help_text(
                $var = __(
                    'Есть вопросы по проекту? Нужна консультация специалиста. Мы услышим и поймем вас',
                    THEME_LANG
                )
            )
            ->set_default_value($var);
        $fields[] = Field::make('text', $prefix.'buttontext', __('Button text', THEME_LANG))
            ->set_help_text(
                $var = __('Получить консультацию', THEME_LANG)
            )
            ->set_default_value($var);

        return $fields;
    }

}
