<template>
  <div>
    <v-app-bar :elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Family 365</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-magnify"></v-btn>
        <v-btn icon="mdi-bell"></v-btn>
        <v-btn icon="mdi-account-circle"></v-btn>
        <v-btn icon="mdi-cog"></v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
