<template>
  <div class="hero-section bg-image" :style="{ backgroundImage: `url('images/main-hero.webp')` }">
    <div>
      <nav-bar />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero-section {
  min-height: 72vh;
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
