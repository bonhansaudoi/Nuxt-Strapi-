<template>
  <div class="lg:flex"> 
    <div class="dropdown"
      v-for="item in dropdown"
      :key="item.text" 
    > 
      <TheToggle-V>  
        {{ item.text }} 
        <svg-Arrow-down />  

        <template v-slot:content>
          <div class="dropdown-content
            lg:absolute lg:w-48 
            border-2 rounded-lg shadow-md border-gray-400
            p-4 space-y-2 mt-1 lg:mt-3 text-base font-semibold"  
          >  
            <NuxtLink class="block"
              v-for="item in item.content"
              :key="item.text" 
              :to="item.link"  
            >  
              {{ item.text }}
            </NuxtLink>  
          </div>
        </template>
      </TheToggle-V>  
    </div>  
  </div> 
</template>

<script>   
export default {
	props: { 
		dropdown: Array, 
  } 
}; 
</script> 