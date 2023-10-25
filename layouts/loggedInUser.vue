<template>
  <v-app>
    <NavLoggedInUserNavBar />

    <v-main class="d-flex">
      <div>
        <NavLoggedInUserSideNavBar />
      </div>
      <div class="flex-grow-1">
        <slot />
      </div>
    </v-main>

    <footer-login-user-footer />
  </v-app>
</template>

<script setup lang="ts"></script>

<style scoped></style>
