<template>
  <div>
    <p>header section</p>
  </div>
</template>

<script setup lang="ts">
const isDark = ref(false);
const isClear = ref(true);
const isAuth = ref(true);

function logoutAccount() {}

function handleScroll() {
  if (window.scrollY >= 10) {
    isClear.value = false;
    isDark.value = true;
  } else {
    isClear.value = true;
    isDark.value = false;
  }
}

onMounted(() => window.addEventListener('scroll', handleScroll));
</script>

<style scoped>
@media screen and (max-width: 1006px) {
  .navbar.is-fixed-top {
    display: inline !important;
  }
}
</style>
