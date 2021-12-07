<template>
  <div class="fixed inset-0 z-60 center hidden cursor-pointer bg-black" 
		v-show="isModal" @click="closeModal"
	>  
		<div class="md:w-2/5 mx-auto p-4 card cursor-text"  
			@click.stop
		>
			<div class="flex justify-end"> 
				<span class="w-6 -mt-2 cursor-pointer text-2xl lg:text-4xl text-gray-400"
					@click="closeModal"					
				>
					&times; 
				</span>  
			</div> 
			<slot></slot>  
		</div>  
  </div> 	
</template>

<script> 
export default {   
	data () {
		return {
			isModal: false 
		} 
	},
	methods: { 
		closeModal () { 
			this.isModal = false;   
		} 
	}
} 
</script>  