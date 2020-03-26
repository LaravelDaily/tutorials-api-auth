# VueJS Examples with Laravel API

Details will be added but lookout for different branches in this repository. Each branch will contain API + VueJS App configured to work with the API.

To set up .env for Client-vue clients, use these instructions:

Create a file `/client-vue/.env.development.local`

Add it's content from `.env.example`:

`VUE_APP_API_URL=http://tutorials-api-auth.test/api/v1/` - API endpoint url

`VUE_APP_AUTH_URL=http://tutorials-api-auth.test/oauth/token` - Used for passport oAuth

`VUE_APP_API_CLIENT_ID=2` - Used for passport oAuth, client ID (password granted token)

`VUE_APP_API_CLIENT_SECRET=ef7lmQ0bauBxJUmHQYGNFhY8YvMuU9KeaToJqHxx` - Used for passport oAuth, client secret (password granted token)

# To run a project

Go into `client-vue` and run `npm install` with following `npm run serve`