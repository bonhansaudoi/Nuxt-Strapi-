<template> 
  <div class="p-4 text-white
    transition-opacity ease-in-out" 
  > 
    <span class="cursor-pointer float-right  
      transition duration-700 ease-in-out
      text-lg font-bold hover:text-white"
      onclick="this.parentElement.style.display='none';"
    >
      &times;
    </span> 
      {{ message }}
  </div> 
</template>

<script>
export default {
  name: "Notification",
  props: {
    message: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "success",
      validator: (val) => ["danger", "success"].includes(val)
    } 
  }
};
</script>

<style lang="postcss" scoped>
.danger {@apply bg-yellow-500;} 
.success {@apply bg-green-500;} 
</style> >

 