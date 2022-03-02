<?php

namespace App\Providers;

use App\Models\staticPages;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $gd = staticPages::getAllFields('GD');
        View::share('gd', $gd);
    }
}