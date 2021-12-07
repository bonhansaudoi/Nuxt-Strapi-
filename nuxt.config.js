// Strapi
require("dotenv").config();

export default {
	loading: {
		color: 'blue',
		height: '3px',
		continuous: true
	},

	head: {
		title: 'frontend',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	css: [
		'~/assets/css/extra.css'
	],
	
	plugins: [
		// Strapi
		'~plugins/axios',
		{ src: '~/plugins/vue-backtotop.js', ssr: false },
	],
 
	components: true,

	buildModules: ['@nuxtjs/tailwindcss'],
 
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@nuxtjs/dotenv',
 		'@nuxtjs/auth'
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
 
	pwa: {
		// manifest: {
		// lang: 'en'
		// }
	},

	build: {
		// babel:{
		// 	plugins: [
		// 		['@babel/plugin-proposal-private-methods', { loose: true }]
		// 	]
		// }
   }
}
