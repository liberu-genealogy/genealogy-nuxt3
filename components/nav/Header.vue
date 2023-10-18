<template>
  <div class="hero-section bg-image">
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
  background: url('images/main-hero.png') no-repeat center;
  background-size: cover;
}

@media screen and (min-width: 1024px) {
  .bg-image {
    background: url('images/main-hero.png') no-repeat;
    background-size: cover;
  }
}
</style>
