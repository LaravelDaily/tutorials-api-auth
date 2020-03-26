<?php

Route::group(['prefix' => 'v1', 'as' => 'api.', 'namespace' => 'Api\V1\Admin'], function () {
    // Route where we post our login
    Route::post('login', 'LoginController@login');

    Route::group(['middleware' => ['auth:api']], function () {
        // Logout the user
        Route::post('logout', 'LoginController@logout');

        // Get current logged in user
        Route::get('user', 'AuthenticationController@user');

        // Permissions
        Route::apiResource('permissions', 'PermissionsApiController');

        // Roles
        Route::apiResource('roles', 'RolesApiController');

        // Users
        Route::apiResource('users', 'UsersApiController');

    });
});