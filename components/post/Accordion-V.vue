<template>
	<div>  
		<div class="cursor-pointer relative" @click="accordionV"> 
			<slot></slot> 
			<icon-ReadmoreIcon class="icon absolute -mt-6 ml-56 md:-mt-7 md:ml-28" />
		</div>

		<div class="accordion-content hidden mt-4 md:mt-6 space" ref="content">
			<slot name="content"></slot> 
		</div>
	</div> 
</template>

<script>   
export default { 
 	methods: { 
		accordionV () { 
			var c = document.getElementsByClassName("accordion-content");
			var i;

			function hideContent() {
				for (i = 0; i < c.length; i++) {
					c[i].classList.add("hidden");
				} 
			}
          
			if (!this.$refs.content.classList.contains("hidden")) {
				this.$refs.content.classList.add("hidden");
			}
			else {
				hideContent();
				this.$refs.content.classList.toggle("hidden");
			} 
		} 
	} 
};
</script>  