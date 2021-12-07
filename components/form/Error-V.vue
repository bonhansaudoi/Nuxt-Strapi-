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
      {{ error }}
  </div> 
</template>

<script>
export default { 
  props: {
    error: String 
  }, 
};
</script>  

<style lang="postcss" scoped>
.danger {@apply bg-yellow-500;}
</style> 