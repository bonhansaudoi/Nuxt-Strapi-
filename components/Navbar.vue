<template>   
	<nav class="navbar
		lg:fixed z-10 lg:top-0
		w-full lg:flex px-4 py-2 lg:text-lg uppercase" 
	>  
		<NavbarLogo :logo="logo" />

		<div class="navbar-menu hidden
			lg:flex lg:flex-grow lg:items-center
			px-2 mt-4 lg:mt-0
			border-2 rounded-xl border-gray-500 lg:border-none" 
		> 
			<NavbarLink :menuLink="menuLink" />  

			<Dropdown :dropdown="dropdown" />  

			<NuxtLink to="/dashboard/" v-if="isAuthenticated"> 
				dashboard
			</NuxtLink> 

			<a href="http://localhost:1337/admin" target="_blank" v-if="isAuthenticated"> 
				Strapi
			</a>  
		  
			<div class="navbar-right
				lg:flex lg:items-center lg:ml-auto lg:space-x-4"
			> 
				<slot></slot>
			</div>  
		</div>
	</nav>    
</template> 

<script>  
import { mapGetters } from "vuex"; 
export default {
	props: {
		logo: Object,  
		menuLink: Array,
		dropdown: Array 
  },  
 	// Strapi
 	computed: { 
		...mapGetters(["isAuthenticated", "loggedInUser"]),
	},
	methods: { 
		async logout() {
      await this.$auth.logout()
    }
	} 
};
</script>