<template> 
  <div>  
    <button class="icon-auth flex uppercase" 
      @click="openSigninForm"
    >  
      <svg class="w-6 h-6 mt-1 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd"></path>
      </svg> 
      login
    </button> 

    <TheModal-V ref="modal">  
      <form-SigninForm 
        v-show="isSignin" 
        :isSignin="isSignin"  
        @emit="openPasswordForgotForm" @success="success(success)"
      />  
      <form-PasswordForgotForm
        v-show="isPassword" 
        :isPassword="isPassword" 
      />
    </TheModal-V>
  </div>  
</template> 

<script>  
export default {  
  data () {
		return {
			isSignin: false,
	    isPassword: false,
      message: null
		} 
	},
	methods: { 
		openSigninForm () { 
      this.$refs.modal.isModal = true
      this.isSignin = true, 
      this.isPassword = false 
		},
    openPasswordForgotForm () { 
      this.isSignin = false
      this.isPassword = true 
		},
    success (success) { 
      this.$root.isModal1 = true
      this.$root.message = success 
		},
	}
}; 
</script> 

