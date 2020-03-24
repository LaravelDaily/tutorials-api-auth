<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        $users = [
            [
                'id'             => 1,
                'name'           => 'Admin',
                'email'          => 'admin@admin.com',
                'password'       => '$2y$10$FFFhmgaqyinw4L5.36LoberzB.EI074LPx/c.UnisD9ZzhDTPlLBm',
                'remember_token' => null,
            ],
        ];

        User::insert($users);

    }
}
