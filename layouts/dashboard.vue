<template>  
  <main>  
    <client-only> 
      <Navbar
        :logo="logo"  
        :menu ="menu"
        :search="search" 
      >  
      </Navbar> 
    </client-only> 

    <Nuxt />   
  </main>  
</template> 

<script> 
export default { 
  // middleware: "guest",
  data: () => ({
    search: true, 
    logo: { 
      text: 'dashboard',
      link: '/test/dashboard/',  
    },
    menu: [
			{
        navbarLink: [         
          {
            text: "home",
            link: "/"
          } 
        ] 
      }
    ]      
  }), 
  created () {},  
  computed: {} 
}
</script>  

<style lang="postcss" scoped> 
</style>   