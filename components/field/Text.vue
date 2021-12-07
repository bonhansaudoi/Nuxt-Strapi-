<template>
  <div class="field">
    <label for="name">{{ text }}</label>
    <input type="password" name="name" required>
  </div>
</template>

<script>  
export default {
	props: { 
    text: String,
		name: String 
  } 
}
</script> 

