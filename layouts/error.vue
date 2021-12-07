<template>
	<div class="center">
    <div class="container-card">
			<h1 v-if="error.statusCode === 404">Page not found</h1>
			<h2 v-else>An error occurred</h2>
			<NuxtLink to="/">Home page</NuxtLink>
    </div>
	</div>	
</template>

<script>
export default {
    props: ['error'],
    layout: 'error'  
}
</script>

<style lang="postcss" scoped></style>  