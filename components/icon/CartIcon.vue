<template> 
  <div>
    <button @click="openCart" class="btn-cart flex item-center uppercase mr-8">   
      <svg class="w-6 h-6 mt-1 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg> cart
    </button> 

    <TheModal-V ref="modal">  
      <div class=""> 
        <h2 class="text-center uppercase">cart</h2>
      </div>  
    </TheModal-V>  
  </div>    
</template> 

<script> 
export default {  
	methods: { 
		openCart () { 
      this.$refs.modal.isModal = true 
		} 
	}
}; 
</script> 

<style lang="postcss" scoped>
.modal-v {@apply bg-gray-900;
/* impossible */
  & .modal-content-v {@apply md:w-3/4 !important;} 
} 
</style>> 