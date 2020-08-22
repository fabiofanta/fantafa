<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use Illuminate\Support\Facades\Hash;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        for ($i=0; $i < 10 ; $i++) {
            $user = new User;
            $user->name = $faker->name;
            $user->email = $faker->email;
            $user->password = Hash::make('1234');
            $user->save();

        }
    }
}
