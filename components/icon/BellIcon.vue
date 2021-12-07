<template>
  <div class="icon lg:flex"> 
    <TheToggle-V>
      <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hide="true"> 
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>  
      Bell

      <template v-slot:content> 
        <div class="lg:absolute lg:w-48 
          Tborder p-4 space-y-2 mt-1 lg:mt-3 text-base font-semibold
          text-gray-700" 
        >  
          <a href="#" @click="openBell">setting</a>  
        </div> 
      </template>  
    </TheToggle-V>

    <TheModal-V ref="modal"> 
      <form-BellSetting v-show="isBell" />
    </TheModal-V>  
  </div> 
</template>  

<script>  
export default {  
  data () {
		return { 
			isBell: false 
		} 
	},
	methods: {  
    // toggleContent () { 
    //   var content = document.querySelector(".content-icon");
    //   content.classList.toggle("hidden");
		// },
		openBell () { 
      // var content = document.querySelector(".content-icon");
      // content.classList.add("hidden");
      this.$refs.modal.isModal = true
      this.isProfile = true  
		} 
	}  
}; 
</script>  