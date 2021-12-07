<template>  
	<nav class="sidebar 
		flex flex-col
		card px-2 py-2
		uppercase lg:text-base"  
	> 
		<NuxtLink 
			v-for="item in links"
			:key="item.text" 
			:to="item.link"        
			class="px-2 py-2 text-gray-400"
		> 
			{{ item.text }}
		</NuxtLink>   

		<div class="relative" 
			v-for="item in dropdown" 
			:key="item.text" 
		>   
			<button class="sidebar-btn  
				w-full inline-flex items-center p-2
				text-left uppercase	text-gray-400"  
			>
				{{ item.text }} 
				<svg-arrow-down></svg-arrow-down>
			</button> 

			<div class="sidebar-content hidden  
				w-full 
				border rounded-md shadow-md border-gray-500
				p-4 space-y-2 mt-1 text-base font-semibold" 
			>  
				<NuxtLink  
					v-for="item in item.content"
					:key="item.text" 
					:to="item.link" 
					class="block"
				> 
					{{ item.text }}
				</NuxtLink>  
			</div>  
		</div> 
 	</nav>	
</template>

<script> 
export default { 
	props: {
		links: Array,
		dropdown: Array 
  },
	mounted () { 
		var sidebarBtn = document.getElementsByClassName("sidebar-btn");
		var sidebarContent = document.getElementsByClassName("sidebar-content"); 
		var i; 

		function hideSidebar() {
			for (i = 0; i < sidebarContent.length; i++) {
				sidebarContent[i].classList.add("hidden");
			} 
		} 

		for (i = 0; i < sidebarBtn.length; i++) {
			sidebarBtn[i].addEventListener("click", function () {
				if (!this.nextElementSibling.classList.contains("hidden")) {
					this.nextElementSibling.classList.add("hidden");
				}
				else {
					hideSidebar();
					this.nextElementSibling.classList.toggle("hidden");
				}
			})
		}  
	} 
};
</script> 
 
<style lang="postcss" scoped></style> 
 
