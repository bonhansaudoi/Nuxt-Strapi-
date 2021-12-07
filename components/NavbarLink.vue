<template>
  <div class="lg:flex">  
    <div class="navbar-link flex flex-col lg:flex-row lg:justify-between lg:items-center" 
      v-for="item in menuLink" 
      :key="item.text" 
    > 
      <NuxtLink
        v-for="item in item.navbarLink"
        :key="item.text"
        :to="item.link"   
      >
        {{ item.text }}
      </NuxtLink>  

      <a target="_blank" 
				v-for="item in item.externalLink"
        :key="item.text"
        :href="item.link"   
      >
        {{ item.text }} 
			</a>   
    </div>   
  </div>     
</template> 

<script>  
export default { 
	props: { 
		menuLink: Array, 
  }
};
</script> 