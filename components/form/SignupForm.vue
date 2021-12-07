<template>
  <form class="form-modal" v-if="!success" method="post" @submit.prevent="register">  
    <h2>signup</h2>  

    <Notification-V v-if="success" type="success" :message="success" />
    <Notification v-if="error" type="danger" :message="error" />

    <div class="form-fields">
      <div class="field">
        <label>name</label>
        <input 
          v-model="username" 
          type="text" 
          name="username" 
          placeholder="name" 
          required
        >            
      </div>

      <div class="field">
        <label>Email</label>
        <input v-model="email" type="email" name="email" placeholder="Email" required>            
      </div>

      <div class="field">
        <label>Password</label>
        <input v-model="password" type="password" name="password" placeholder="Password" required>
      </div>

      <!-- <div class="field">
        <label for="psw">Confirm Password</label>
        <input type="password" name="psw" placeholder="Password" required>
      </div> -->
    </div>

    <button type="submit" class="w-full">
      SUBMIT
    </button>   
  </form>
</template>

<script>  
export default { 
  props: {},
  data () {
    return {
      username: "",
      email: "",
      password: "",
      success: null,
      error: null 
    } 
  },
  methods: {  
    async register() {
      this.error = null;
      try {
        this.$axios.setToken(false);
        await this.$axios.post("auth/local/register", {
          username: this.username,
          email: this.email,
          password: this.password, 
        }) 

       /*  await this.$auth.loginWith('local', {
          data: {
						email: this.email,
						password: this.password
          },
        })  */

        

        this.success = `A confirmation link has been sent to your email account. \
        Please click on the link to complete the registration process.`;
this.$router.push('/dashboard')

        this.$emit('emit', this.success )

      } catch (e) {
        this.error = e.response.data.message[0].messages[0].message
      }
    }
	}
}; 
</script> 