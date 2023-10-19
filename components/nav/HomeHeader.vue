<template>
  <div class="hero-section bg-image" :style="{ backgroundImage: `url('images/main-hero.webp')` }">
    <div>
      <nav-home-nav-bar />
    </div>

    <v-row justify="center" class="d-flex flex-column align-center text-white pt-16">
      <v-col cols="10" md="7" class="d-flex flex-column justify-center align-center pt-16">
        <h1 class="text-center app-heading-1 font-size-sm-24 line-height-sm-30">
          Family Tree 365 is an online family tree maker that’s feature-rich yet easy to use.
        </h1>

        <div class="py-10">
          <p class="text-center font-size-20 line-height-30 font-size-sm-13 line-height-sm-20">
            It is designed to have extensive functionality while being simple to use, secure, and accessible. You can
            easily import and export GEDCOM files, view and manipulate data, and unlock extra features. Sign-up to start
            your family tree today!
          </p>
        </div>

        <div>
          <v-btn elevation="2" class="text-white text-capitalize pt-md-4 pb-md-8" color="red" rounded
            >Create Your own Tree
          </v-btn>
          <div class="py-4"><nuxt-link to="">Already have an account? Sign in</nuxt-link></div>
        </div>
      </v-col>
    </v-row>
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
