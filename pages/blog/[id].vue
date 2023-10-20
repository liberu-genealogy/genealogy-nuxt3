<template>
  <div class="full-page-view-height d-flex align-center">
    <div class="page-container">
      <v-card class="py-16 px-md-10 px-4">
        <div>
          <p class="font-size-20 line-height-35 font-size-sm-18 line-height-sm-30">{{ blog.description }}</p>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBlogsStore } from '~/store/blogsStore';
import { Blog } from '~/types/app';

const blogId = computed(() => useRoute().params.id).value.toString();

const blogStore = useBlogsStore();

const blog = computed<Blog>(() => blogStore.getBlog);

onMounted(() => {
  blogStore.setBlog(parseInt(blogId));
});
</script>
