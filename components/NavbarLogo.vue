<template>
	<div class="navbar-logo flex justify-between items-center">  
    <a :href="logo.link"
      class="logo inline-flex items-center 
        text-xl md:text-2xl font-bold uppercase tracking-wide"  
    >  
      <svg class="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>  
      {{ logo.text }} 
    </a> 
 
    <button class="hamberger lg:hidden 
      inline-flex items-center" @click="hamberger"
    > 
      <svg class="block h-8 w-8 text-gray-500 font-bold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hide="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16M4 18h16" />
      </svg> 
    </button>
	</div> 
</template>

<script>  
export default { 
  props: {logo: Object}, 
  methods: { 
		hamberger () { 
      // var hamberger = document.querySelector(".hamberger");
      var navbarMenu = document.querySelector(".navbar-menu");
      var a = document.querySelectorAll("a");
      var i;

      // hamberger.onclick = function () {
      //   navbarMenu.classList.toggle("hidden");
      // }

      navbarMenu.classList.toggle("hidden");

      for (i = 0; i < a.length; i++) {   
        a[i].addEventListener("click", function () {
          navbarMenu.classList.add("hidden");
        });
      }
    }
  }
};
</script>