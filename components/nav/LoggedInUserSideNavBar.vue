<template>
  <div class="side-nav-container">
    <v-card height="100%">
      <v-layout full-height>
        <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          @click="rail = false"
          class="side-nav-container primary-bg-color text-white"
        >
          <v-list density="compact">
            <v-list-item
              v-for="(item, i) in menuItems"
              :key="i"
              :prepend-icon="item.icon"
              :title="item.title"
              :value="item.title"
            ></v-list-item>
          </v-list>

          <v-list-group value="Users">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Users"></v-list-item>
            </template>

            <v-list-group value="Admin">
              <template v-slot:activator="{ props }">
                <v-list-item v-bind="props" title="Admin"></v-list-item>
              </template>

              <v-list-item
                v-for="([title, icon], i) in admins"
                :key="i"
                :title="title"
                :prepend-icon="icon"
                :value="title"
              ></v-list-item>
            </v-list-group>
          </v-list-group>
        </v-navigation-drawer>
        <v-main style="height: 250px"></v-main>
      </v-layout>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const drawer = ref(true);
const rail = ref(false);
const admins = [
  ['Management', 'mdi-account-multiple-outline'],
  ['Settings', 'mdi-cog-outline']
];

const menuItems = [
  { title: 'Dashboard', icon: 'mdi-home-city', path: '' },
  { title: 'Calendar', icon: 'mdi-home-city', path: '' },
  { title: 'Files', icon: 'mdi-home-city', path: '' },
  { title: 'Administration', icon: 'mdi-home-city', path: '' }
];
</script>

<style scoped>
.side-nav-container {
  height: 100% !important;
}

.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
