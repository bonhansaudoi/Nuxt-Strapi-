<template> 
	<button type="button" @click="back"
		class="md:text-lg uppercase font-bold 
			text-gray-500 hover:text-gray-700"
		>
		<svg-Chevron-left /> 
		Back
	</button>
</template>

<script>
export default {
	methods: {
		back () {
			//this.$router.go(-1);
			this.$router.back()
		},
	}
};
</script>