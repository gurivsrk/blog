<?php

namespace App\Shortcodes;
/**
 * Class takeway
 * @package App\Shortcodes
 * @shortcode [takeway list="1|2|3"]
 */
class takewayShortcode {

public function register($shortcode, $content, $compiler, $name, $viewData)
{
    $list = explode('|',$shortcode->list);

    return view('shortcodes.takeway', compact('shortcode', 'content', 'list'));
}
}