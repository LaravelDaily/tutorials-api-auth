<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;

class AuthenticationController extends Controller
{
    public function user()
    {
        return auth()->user();
    }
}