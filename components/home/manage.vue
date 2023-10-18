<template>
  <div class="container d-flex flex-column pt-10">
    <div class="text-center">
      <h1 class="app-heading-1 font-size-sm-24 line-height-36">Create & manage your family tree</h1>

      <p class="py-4 px-8">
        Family Tree 365 lets you create and manage your family tree the quick and easy way. Register to access our
        user-friendly <br />
        platform that gives you all the tools you need to create, manage, and research your family genealogy.
      </p>
    </div>

    <div class="flex-grow-1">
      <v-carousel cycle height="80vh" :show-arrows="false" hide-delimiters>
        <v-carousel-item src="/images/mockup01@2x.webp"></v-carousel-item>
        <v-carousel-item src="/images/mockup03@2x.webp"></v-carousel-item>
        <v-carousel-item src="/images/mockup03@2x.webp"></v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  min-height: 100vh;
}
.img-container {
  max-width: 70%;
}
img {
  width: 100%;
}
</style>
