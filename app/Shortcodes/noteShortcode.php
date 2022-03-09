<?php

namespace App\Shortcodes;
/**
 * Class takeway
 * @package App\Shortcodes
 * @shortcode [note note="1|2|3"]
 */
class noteShortcode {

public function register($shortcode, $content, $compiler, $name, $viewData)
{
    $note =$shortcode->note;

    return view('shortcodes.note', compact('shortcode', 'content', 'note'));
}
}