<?php

namespace App\Providers;

use App\Shortcodes\takewayShortcode;
use App\Shortcodes\noteShortcode;
use Illuminate\Support\ServiceProvider;
use Webwizo\Shortcodes\Facades\Shortcode;


class ShortcodesServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        Shortcode::register('takeway', takewayShortcode::class);
        Shortcode::register('note', noteShortcode::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
