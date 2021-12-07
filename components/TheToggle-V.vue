<template>
  <div> 
    <button class="btn-toggle w-full inline-flex items-center p-2 uppercase"  
      @click="toggle"
    >  
      <slot></slot> 
    </button> 

    <div class="content-toggle hidden" 
      ref="content"
    >  
      <slot name="content"></slot> 
    </div>   
  </div>
</template>  
 
<script>  
export default {  
  methods: {  
    toggle() {    
      var c = document.getElementsByClassName("content-toggle");
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

      window.onclick = function(event) {
        if (!event.target.matches('.btn-toggle')) {
          var c = document.getElementsByClassName("content-toggle");
          var i;

          for (i = 0; i < c.length; i++) {
            var cI = c[i];
            if (!cI.classList.contains('hidden')) {
              cI.classList.add('hidden');
            }
          }
        }
      }
    } 
  }  
}; 
</script>   