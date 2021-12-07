<template> 
  <form class="form-modal" method="post"  
    v-if="!success" 
    @submit.prevent="resetPassword"
  >
    <h2> reset Password </h2> 
    <Notification-V v-if="success" type="success" :message="success" />
    <Notification-V v-if="error" type="danger" :message="error" />

    <div class="form-fields text-white"> 
      <div class="field">
        <label>New Password</label> 
        <input
          v-model="password1"
          type="password" 
          name="password"
        />
      </div> 
      <div class="field">
        <label>Confirm New Password</label> 
        <input
          v-model="password2"
          type="password"
          class="input"
          name="password"
        />
      </div>
      
      <button type="submit" class="button">
        Reset Password
      </button>
    </div>
  </form> 
</template>

<script> 
export default {
  middleware: "guest", 
  asyncData(context) {
    if (!context.route.query.code) context.redirect("/forgot-password")
    else
      return {
      code: context.route.query.code
      }
  },
  data() {
    return {
      password1: "",
      password2: "",
      success: null,
      error: null
    }
  },
  methods: {
    async resetPassword() {
      this.error = null;
      if (this.password1 !== this.password2) {
        this.error = "Passwords do not match."
        return
      }
      try {
        await this.$axios.post("auth/reset-password", {
          code: this.code,
          password: this.password1,
          passwordConfirmation: this.password2
        });
        this.success = "Password updated successfully. You can now use it to log in to your account."
      } catch (e) {
          this.error = e.response.data.message[0].messages[0].message
      }
    }
  }
};
</script>