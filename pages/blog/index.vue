<template>
  <div class="blogs-container d-flex align-center">
    <v-row justify="center">
      <v-col v-for="i in 6" cols="12" md="6" :key="i">
        <v-card class="pa-6">
          <h2>Mitochondrial Eve</h2>
          <p>
            Do we all have a common ancestor? Science says yes, and she’s more recent than we might think. Mitochondrial
            Eve is not a forgotten medieval holiday. It is a person – at least theoretically. Humanity has been around
            in one form or another for millions of years. Just how ‘humanity’ is defined varies from science to science
            and even from person to person...
          </p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useBlogsStore } from '~/store/blogsStore';

const blogStore = useBlogsStore();

blogStore.setBlogs();

const blogs = computed(() => blogStore.getBlogs);
</script>

<style scoped>
.blogs-container {
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;
}
</style>
