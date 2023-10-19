<template>
  <div class="blogs-container d-flex align-center">
    <v-row justify="center">
      <v-col v-for="(blog, i) in blogs" cols="12" md="6" :key="i">
        <v-card class="pa-6" @click="() => getBlog(blog.id, blog.title)">
          <h2>{{ blog.title }}</h2>
          <p>
            {{ `${truncateString(blog.description)}` }}
          </p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useBlogsStore } from '~/store/blogsStore';
import { Blog } from '~/types/app';
import { useAppStore } from '~/store/appStore';

const appStore = useAppStore();
const blogStore = useBlogsStore();

appStore.setHeroSectionTitle('Blogs');
blogStore.setBlogs();

const blogs = computed<Array<Blog>>(() => blogStore.getBlogs);

function truncateString(str: string) {
  if (str.length > 380) {
    return str.substring(0, 380) + '...';
  } else {
    return str;
  }
}

function getBlog(id: number, blogTitle: string) {
  appStore.setHeroSectionTitle(blogTitle);
  return navigateTo({
    path: `/blog/${id}`
  });
}
</script>

<style scoped>
.blogs-container {
  width: 80%;
  margin: 0 auto;
  min-height: 100vh;
}
</style>
