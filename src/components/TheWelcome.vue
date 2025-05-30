<script setup>
import HeroSection from './HeroSection.vue';
import SolutionSection from './SolutionSection.vue';

import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from "vue";
onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
	gsap.to(".heroTitle", {
		scrollTrigger : "#solutions",
		x : 1280,
		duration : 2,
    ease : "power2.inOut"
	})
}) 

</script>
<template>
  <HeroSection/>
  <SolutionSection/>
</template>
<style scoped>
</style>