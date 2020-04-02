# About
**TBD...**

# Setting up Laravel API
Base setup for our Laravel API is the same across all of the branches.

### Requirements
[https://laravel.com/docs/7.x#server-requirements](https://laravel.com/docs/7.x#server-requirements)

### Steps

- Enter `api` directory in your terminal.
- Run `composer install`
- Copy `.env.example` file to `.env` and fill out your details.
- Run `php artisan key:generate`
- Run `php artisan migrate:fresh --seed`
- Configure domain to serve your application via chosen server provider (WAMP, MAMP, LAMP, Valet, homestead, VPS or something different)

That is it - your base API should be ready to go. You can confirm by visiting the configured domain and seeing a login page. This is your administrator login.

# Master branch - Public API

### Laravel
Requires no additional steps

### VueJS

**Important**: Make sure you have nodejs and npm installed (yarn will work too but replace our commands).

To set up public API test you'll need to follow these steps:

- Enter `client-vue` directory
- Run `npm install` - this takes a while
- Copy `.env.example` to `.env.development.local`
- Fill out details: `VUE_APP_API_URL` should point to: `YOURDOMAIN/api/v1/` (replace YOURDOMAIN with the domain you set up for the API)
- Run `npm serve` and open the given address (should look something like: `http://localhost:808*` where * is number from 0 to 9)
- Visit `Users list` in the loaded page and you should see the data.

# Demo/Sanctum branch - Laravel sanctum protected
This demo uses [https://laravel.com/docs/7.x/sanctum#introduction](https://laravel.com/docs/7.x/sanctum#introduction) to protect the API from unauthorised access. In this example we are using JWT tokens.

### Laravel
Requires no additional steps

### VueJS

**Important**: Make sure you have nodejs and npm installed (yarn will work too but replace our commands).

To set up sanctum API test you'll need to follow these steps:

- Enter `client-vue` directory
- Run `npm install` - this takes a while
- Copy `.env.example` to `.env.development.local`
- Fill out details: `VUE_APP_API_URL` should point to: `YOURDOMAIN/api/v1/` (replace YOURDOMAIN with the domain you set up for the API)
- Run `npm serve` and open the given address (should look something like: `http://localhost:808*` where * is number from 0 to 9)
- You should see Home and Login navigation buttons on the page.
- Click on login and login using these details `admin@admin.com` with password `password`
- Users list should appear
- Click on users list and you should see users being listed.

# Demo/Passport - Laravel passport protected
This example uses [https://laravel.com/docs/7.x/passport#introduction](https://laravel.com/docs/7.x/passport#introduction) to protect the API from unauthorised access. In this example we are using JWT tokens.

### Laravel
Requires no additional steps

### VueJS

**Important**: Make sure you have nodejs and npm installed (yarn will work too but replace our commands).

To set up passport API test you'll need to follow these steps:

- Enter `client-vue` directory
- Run `npm install` - this takes a while
- Copy `.env.example` to `.env.development.local`
- Fill out details: `VUE_APP_API_URL` should point to: `YOURDOMAIN/api/v1/` (replace YOURDOMAIN with the domain you set up for the API)
- Run `npm serve` and open the given address (should look something like: `http://localhost:808*` where * is number from 0 to 9)
- You should see Home and Login navigation buttons on the page.
- Click on login and login using these details `admin@admin.com` with password `password`
- Users list should appear
- Click on users list and you should see users being listed.

# Demo/Passport-oAuth - Laravel passport protected
This example uses [https://laravel.com/docs/7.x/passport#introduction](https://laravel.com/docs/7.x/passport#introduction) to protect the API from unauthorised access. In this example we are using oAuth protection

### Laravel
- Enter `api` directory
- Run `php artisan passport:install`

### VueJS

**Important**: Make sure you have nodejs and npm installed (yarn will work too but replace our commands).

To set up public API test you'll need to follow these steps:

- Enter `client-vue` directory
- Run `npm install` - this takes a while
- Copy `.env.example` to `.env.development.local`
- Fill out details:
- `VUE_APP_API_URL` should point to: `YOURDOMAIN/api/v1/` (replace YOURDOMAIN with the domain you set up for the API)
- `VUE_APP_AUTH_URL` should point to: `YOURDOMAIN/oauth/token` (replace YOURDOMAIN with the domain you set up for the API)
- `VUE_APP_API_CLIENT_ID` should be set to database `id` column from table: `oauth_clients` where `password_client` is equal to `1`
- `VUE_APP_API_CLIENT_SECRET` should be set to database `secret` column from table: `oath_clients` where `password_client` is equal to 1
- Run `npm serve` and open the given address (should look something like: `http://localhost:808*` where * is number from 0 to 9)
- You should see Home and Login navigation buttons on the page.
- Click on login and login using these details `admin@admin.com` with password `password`
- Users list should appear
- Click on users list and you should see users being listed.

