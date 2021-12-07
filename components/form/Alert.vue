<template> 
  <div class="bg-[#ff9800] p-4 text-white
    transition-opacity ease-in-out" 
  > 
    <span onclick="this.parentElement.style.display='none';"
      class="cursor-pointer float-right 
      transition duration-700 ease-in-out
      text-lg font-bold hover:text-white"
    >
      &times;
    </span> 
      <slot></slot>  
  </div>
</template> 

<script>
export default {
  name: 'Alert',
  props: {
    message: String 
  }, 
};
</script>