<script setup lang="ts">
import { ref, onMounted } from "vue";
import LandingPageView from "./views/LandingPageView.vue";
import ReviewView from "./views/ReviewView.vue";
import { useRoute } from "vue-router";

const isMobile = ref(false);
const isTablet = ref(false);
const isPC = ref(false);

onMounted(() => {
  const width = window.innerWidth;
  isMobile.value = width <= 768; // Phone width (you can adjust this value)
  isTablet.value = width > 768 && width <= 1024; // Tablet width
  isPC.value = width > 1024; // PC width
});
</script>

<template>
  <div v-if="isMobile">
    <router-view />
  </div>
  <div v-else-if="isTablet || isPC" class="mx-auto text-center">
    <LandingPageView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
