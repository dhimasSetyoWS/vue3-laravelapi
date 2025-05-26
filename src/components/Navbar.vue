<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
	<nav class="grid grid-cols-3 py-4 px-9">
		<div class="bg-white p-2 rounded-md">
			<img src="" alt="Logo">
		</div>
		<div class="content-center text-center">
			<RouterLink class="p-2 text-black rounded-md" to="/">Features</RouterLink>
			<RouterLink class="p-2 text-black rounded-md" to="about">Solutions</RouterLink>
			<RouterLink class="p-2 text-black rounded-md" to="about">Resources</RouterLink>
			<RouterLink class="p-2 text-black rounded-md" to="about">Pricing</RouterLink>
		</div>
		<div class="flex justify-end">
			<p class="py-2 px-5">Sign in</p>
			<RouterLink class="py-2 px-5 border rounded-xl border-gray-400">Get Demo</RouterLink>
		</div>
	</nav>
</template>
<style scoped>
nav RouterLink {
	margin: 12px;
	text-decoration: none;
	color: black;
	transition: scale 0.3s linear;

	&:hover {
		color: red;
		scale: 1.15;
	}
}
</style>