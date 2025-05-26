<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
	<nav>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="about">About</RouterLink>
	</nav>
</template>
<style scoped>
nav {
	display : flex;
	justify-content: center;
}

nav * {
	margin : 12px;
	text-decoration: none;
	color : black;
	transition: scale 0.3s linear;
	&:hover {
		color : red;
		scale: 1.15;
	}
}
</style>