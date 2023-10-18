<template>
  <v-app>
    <nav-home-header />
    <slot />
    <Footer />
  </v-app>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  width: 80%;
  margin: 0 auto;
}
</style>
