<template>
  <form class="form-modal" action="" method="post"> 
    <h2>{{titleForm}}</h2>  

    <form-Alert />

    <div class="form-fields">
      <field-Text />
      <field-Email /> 
      <field-Password /> 
    </div>

    <button type="submit" class="w-full">{{nameButton}}</button>   
  </form> 
</template>

<script>  
export default {  
  props: [ 
    'titleForm',
    'nameButton' 
  ], 
  data() {
  return {
  
  }
  },
  
  computed: {
    formInfo() {
      return this.$store.state.form.formInfo
    } 
  },

  methods: {
    submit () {         
        //this.$store.dispatch('auth', this.formInfo, this.signal)        
      this.$store.dispatch('login', this.formInfo)        
    }
  }
};
</script>  