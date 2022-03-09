<?php

namespace App\Providers;

use App\Models\staticPages;
use App\Models\menu;
use App\Models\category;
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
        $menus = menu::select('name','data','id')->get();
        $cate = category::select('bgcolor','id')->get();
        View::share(['gd'=>$gd,'menus'=>$menus, 'cate'=>$cate]);
    }
}
