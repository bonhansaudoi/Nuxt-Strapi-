<template> 
  <div class="fixed inset-0 z-70 center hidden cursor-pointer bg-black" 
		v-show="isMessageV" @click="closeMessage"
	>  
    <div class="md:w-2/5 mx-auto p-4 bg-green-700 text-center text-xl text-white transition-opacity ease-in-out">
			<slot></slot>  
    </div> 	 
  </div>
</template>

<script> 
export default {  
	data () {
		return {
			isMessageV: false  
		} 
	},
	methods: { 
		closeMessage () { 
			this.isMessageV = false;   
		} 
	}
} 
</script>  