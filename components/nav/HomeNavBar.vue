<template>
  <div class="d-flex nav py-4 px-4 px-md-8" :class="{ clearHeader: isClear, darkHeader: isDark }">
    <div class="logo">
      <a class="navbar-item" href="#">
        <img src="/images/logo1.svg" />
      </a>
    </div>
    <v-spacer></v-spacer>
    <div class="d-none d-lg-block text-capitalize">
      <template v-for="(item, i) in navMenu" :key="i">
        <NuxtLink class="px-4 my-link text-white" :to="item.link"> {{ item.name }} </NuxtLink>
      </template>
      <v-btn elevation="1" class="home-btn text-white text-capitalize pt-md-3 pb-md-7" color="red" rounded
        >Create Your own Tree
      </v-btn>
    </div>

    <div class="d-block d-lg-none">
      <v-app-bar-nav-icon class="text-white"></v-app-bar-nav-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
const isDark = ref(false);
const isClear = ref(true);
const isAuth = ref(true);

const navMenu = [
  { name: 'home', link: '/' },
  { name: 'Features', link: '#features' },
  { name: 'Why Family Tree 365', link: '#why-us' },
  { name: 'Blog', link: '/blog' },
  { name: 'Sign in', link: '/login' }
];

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

.my-link {
  list-style-type: none !important;
  text-decoration: none;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.nav .logo {
  max-height: 44px;
  min-height: auto;
  max-width: 300px;
}

.logo img {
  width: 100%;
  height: auto;
}

.clearHeader {
  background-color: transparent !important;
}

.darkHeader {
  background-color: rgb(1 17 9 / 0.6) !important;
}
</style>
