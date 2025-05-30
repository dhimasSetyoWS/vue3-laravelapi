<script setup>
import { RouterLink} from 'vue-router';
</script>
<template>
	<nav class="hidden md:grid grid-cols-3 py-4 px-9">
		<div class="bg-white p-2 rounded-md">
			<img src="" alt="Logo">
		</div>
		<div class="content-center text-center">
			<a href="#feature" class="p-2 text-black rounded-md">Features</a>
			<a class="p-2 text-black rounded-md">Solutions</a>
			<a class="p-2 text-black rounded-md">Resources</a>
			<a class="p-2 text-black rounded-md">Pricing</a>
		</div>
		<div class="flex justify-end">
			<a href="" class="py-2 px-5">Sign in</a>
			<a class="py-2 px-5 border rounded-xl border-gray-400">Get Demo</a>
		</div>
	</nav>
</template>
<style scoped>
nav a {
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