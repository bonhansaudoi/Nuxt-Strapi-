# Nuxt-Strapi 

## Install
	- Strapi  
	- Nuxt

### Auth: 
		- @nuxtjs/axios
		- @nuxtjs/auth
		- @nuxtjs/dotenv
		- @nuxtjs/tailwindcss
		- vue-backtotop 

### Ecommerce: 
		- @nuxtjs/apollo
		- graphql 

		- Stripe for payments in Nuxt & strapi
		- Nodemailer to send emails in strapi
			- [Gmai] (https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4OD724ym5ty4t60NUPXT8aosa2tKS74uj8tOusI3doFiR8-tm4Ts0VnjCAoEV25mnad5syU5QIN8hZkTohkehFGKRNj4w)
		- @nuxtjs/strapi for Strapi backend API
		- @nuxtjs/swal for alert 

## Config 

### Auth:

- assets/css/
  - tailwind.css 
- plugins:
  - axios.js
  - vue-backtotop.js 
- store:
  - index.js  
- middleware:
  - guest.js 
- .env 
- tailwind.config.js
- nuxt.config.js 

```js [] 
  // Strapi
  require("dotenv").config();

  plugins: [
		// Strapi
		'~plugins/axios',
		{ src: '~/plugins/vue-backtotop.js', ssr: false },
	],

	axios: {
		// Strapi
		baseURL: process.env.API_AUTH_URL
	}, 
	auth: {
		// Strapi
		strategies: {
			local: {
				endpoints: {
					login: {
						url: 'auth/local',
						method: 'post',
						propertyName: 'jwt'
					},
					user: {
						url: 'users/me',
						method: 'get',
						propertyName: false
					},
					logout: false
				}
			}
		}
	}, 
```

### Ecommerce

- apollo/queries/product/
		- product.gql
		- products.gql
- layouts/default.vue
	- <div hidden id="snipcart" data-api-key=""></div>
- pages/products/_id/
	- index.vue
- nuxt.config.js

```js
mode: 'universal',
target: 'static',
link: [
	{ rel: 'preconnect', href: "https://app.snipcart.com" },
	{ rel: 'preconnect', href: "https://cdn.snipcart.com" },
	{ rel: 'stylesheet', href: "https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" } 
],
script: [
	{ src: 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js'} 
],
modules: [
	'@nuxtjs/apollo',
],
	apollo: {  
	clientConfigs: {
		default: {
			httpEndpoint: process.env.BACKEND_URL || "http://localhost:1337/graphql"
		}
	}
},
env: {
	storeUrl: process.env.STORE_URL ||"http://localhost:1337" 
},
``` 

## Database

- MongoDB

## Build Setup Nuxt

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Github

```bash 
git init
git add . 
git remote add origin https://github.com/bonhansaudoi/Nuxt-Strapi-.git
git commit -m "commit" 
git push -u origin master  
```

## Template

- https://www.bignulled.com/free-download-bolster-vue-nuxt-js-ecommerce-template-nulled-latest-version/
- https://madewithvuejs.com/blog/the-best-vue-js-admin-dashboards

## Link

- [nuxt-strapi] (https://strapi.io/)
	- https://strapi.io/blog/how-to-build-an-e-commerce-store-with-nuxt-js-and-strapi 
	- https://snipcart.com/blog/strapi-nuxt-ecommerce-tutorial
- [nuxt-commercejs] (https://commercejs.com/frameworks/nuxt-ecommerce/)
- [nuxt-netlify] (https://functions.netlify.com/examples/)

- Notification 
	- https://www.youtube.com/watch?v=blGp6vslw7s
	- https://openbase.com/categories/js/best-vue-notification-libraries
