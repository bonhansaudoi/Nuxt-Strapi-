<template>   
  <form class="form-modal" action="" method="post" @submit.prevent="forgotPassword">  
    <h2> reset Password </h2> 

    <Notification-V v-if="error" type="danger" :message="error" />

    <div class="form-fields text-white">
      <div class="field">
        <label>Email</label>
        <input v-model="email" type="email" name="email" placeholder="Email" required>            
      </div>
    </div>

    <button type="submit" class="w-full"> 
      Email me a reset link
    </button> 
  </form>   
</template>  

<script>  
export default { 
  props: {
    isPassword: Boolean
  },
  // Strapi
  middleware: "guest",
  data () {
    return {
      isForm: this.isPassword,
      // Strapi
      email: "",
      success: null,
      error: null,
    } 
  },
  methods: {  
    // Strapi
    async forgotPassword() {
      try {
        await this.$axios.post("auth/forgot-password", {
          email: this.email,
        })
        this.error = null
        this.success = `A reset password link has been sent to your email account. \
        Please click on the link to complete the password reset.`
      } catch (e) {
          this.error = e.response.data.message[0].messages[0].message
      }
    }
  } 
}; 
</script> 