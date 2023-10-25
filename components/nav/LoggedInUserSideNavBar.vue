<template>
  <div class="side-nav-container d-flex">
    <v-card>
      <v-layout>
        <v-navigation-drawer v-model="drawer" :rail="rail" @click="rail = false">
          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
          </v-list>

          <v-list-group value="Users">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Users"></v-list-item>
            </template>
          </v-list-group>

          <v-list-group value="Users">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" prepend-icon="mdi-account-circle" title="Users"></v-list-item>
            </template>
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
</script>

<style scoped>
.side-nav-container {
  min-height: 100% !important;
}
</style>
