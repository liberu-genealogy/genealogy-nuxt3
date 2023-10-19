<template>
  <div class="hero-section bg-image" :style="{ backgroundImage: `url('images/main-hero.webp')` }">
    <div>
      <nav-bar />
    </div>
    <div class="header-text-container d-flex align-center justify-center">
      <h1 class="text-white text-center app-heading-1 font-size-sm-24 line-height-sm-30">{{ title }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '~/store/appStore';

const appStore = useAppStore();

const title = computed(() => appStore.getHeroSectionTitle);
</script>

<style scoped>
.hero-section {
  min-height: 72vh;
}

.header-text-container {
  height: 100%;
}

.bg-image {
  background-size: cover;
  background-position-x: center;
  background-repeat: no-repeat;
}

@media screen and (min-width: 1024px) {
  .bg-image {
    background-size: cover;
    background-position-x: center;
    background-repeat: no-repeat;
  }
}
</style>
