<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class subscriberTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $emails = ['gursharan@vsrkcapital.com','admin@vsrkcapital.com'];

        foreach($emails as $email){
            DB::table('subscriber')->insert([
                'email' => $email,
                'status' => 'subscribe',
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
    }
}
