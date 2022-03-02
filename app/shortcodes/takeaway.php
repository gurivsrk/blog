<?php

namespace App\Shortcodes;
/**
 * Class takeway
 * @package App\Shortcodes
 * @shortcode [takeway ids="1,2,3,4,5,6,7,8,9,10"]
 */
class takewayShortcode {

public function register($shortcode, $content, $compiler, $name, $viewData)
{
    $casinos_ids = $shortcode->ids;

    return view('shortcodes.takeway', compact('shortcode', 'content', 'casinos'));
}
}