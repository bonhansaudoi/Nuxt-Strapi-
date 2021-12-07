<template> 
	<div class="navbar-auth flex item-center"> 
		<!-- Strapi --> 
		<div class="authed" v-if="isAuthenticated">   
			<div class="flex space-x-4">  
				<BellIcon />  
				<UserIcon /> 
			</div>	 
		</div>  
		<div class="auth" v-if="!isAuthenticated">  
			<div class="flex space-x-4">  
				<icon-SigninIcon />  
				<icon-SignupIcon />
			</div>  
		</div> 
	</div> 
</template>   

<script>   
import BellIcon  from "~/components/icon/BellIcon.vue";
import UserIcon  from "~/components/icon/UserIcon.vue";

import { mapGetters } from "vuex";
export default {  
	components: { 
    BellIcon,
		UserIcon
  }, 
	// Strapi
	computed: { 
		...mapGetters(["isAuthenticated", "loggedInUser"]),
	}
};
</script> 