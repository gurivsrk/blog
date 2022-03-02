<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class menuTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $menus = ['primary_menu','footer_1','footer_2','footer_3'];

        foreach($menus as $menu){
            DB::table('menu')->insert([
                'name' => $menu
            ]);
        }
    }
}
