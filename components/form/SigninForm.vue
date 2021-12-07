<template>
  <form class="form-modal" method="post" @submit.prevent="login">   
    <h2>Login</h2> 

    <form-Error-V v-if="error" class="danger" :error="error" />
    
    <div class="form-fields">
      <div class="field">
        <label>Email</label>
        <input v-model="email" type="email" name="email" placeholder="Email" required>            
      </div>

      <div class="field">
        <label>Password</label>
        <input v-model="password" type="password" name="password" placeholder="Password" required>
        <span class="forgot-password cursor-pointer" @click="forgotPassword"> 
          Forgot password?
        </span> 
      </div>
    </div>

    <div class="flex justify-between s-center">
      <button type="submit">
        Login
      </button> 
      <label class="span">
        <input type="checkbox" checked="checked" name="remember"> Remember me
      </label>
    </div> 
  </form>
</template>

<script>  
export default {  
  middleware: "guest",
  props: {
    isSignin: Boolean 
  }, 
  data () {
		return {
			signinForm: this.isSignin, 
      // Strapi
      email: "",
      password: "",
      error: null,
      // success: null
		} 
	},
	methods: {  
    forgotPassword () { 
      this.signinForm = false 
      this.$emit('emit')
		},
    // Strapi , this.signinForm
    async login() { 
      try {
        await this.$auth.loginWith("local", {
          data: {
            identifier: this.email, 
            password: this.password
          }
        }); 
        // this.$router.push("/dashboard");
        this.success = "Successfull Login!";
        this.$emit('success', this.success );
      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message;
      }
    }
  } 
};
</script>  