<template>
  <div class="icon"> 
    <TheToggle-V>
      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg> icon
      <!-- lg:min-w-48 lg:origin-top-right lg:right-2  -->
      <template v-slot:content>   
        <div class="lg:absolute flex flex-col
          min-w-40 
          border-2 rounded-lg border-gray-500  
          p-2 space-y-2 mt-1 lg:mt-3 
          text-sm font-semibold text-gray-500"    
        >  
          <a class="" href="#" @click="openProfile">Profile</a>    
          <a class="" href="#" @click="logout">logout</a> 
        </div>
      </template>  
    </TheToggle-V > 
 
    <TheModal-V ref="modal">
      <form-UserProfile v-show="isProfile"/> 
    </TheModal-V>  
  </div>
</template>   

<script>  
export default {  
  data () {
		return { 
      isDropdown: false,
      isIcon: true,
			isProfile: false 
		} 
	},
	methods: {  
		openProfile () {  
      this.$refs.modal.isModal = true
      this.isProfile = true  
		}, 
    // Strapi
    async logout() {
      await this.$auth.logout()
    }
	}
}; 
</script>  

<style lang="postcss"></style>  