<template>
  <div>
    <v-card>
      <v-card-title>Search</v-card-title>

      <div class="table">
        <div class="table-header">
          <v-row class="px-4">
            <v-col cols="2">
              <v-select variant="underlined" label="API" :items="apiList"></v-select>
            </v-col>

            <v-col cols="2">
              <v-text-field label="First name" variant="underlined"></v-text-field>
            </v-col>

            <v-col cols="2">
              <v-text-field label="Last name" variant="underlined"></v-text-field>
            </v-col>

            <v-col cols="3">
              <v-text-field label="Date" variant="underlined"></v-text-field>
            </v-col>

            <v-col cols="3" class="d-flex align-center">
              <v-btn min-width="100%">SEARCH</v-btn>
            </v-col>
          </v-row>

          <div class="data-table">
            <v-data-table class="elevation-1" :headers="headers" :items="result"></v-data-table>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const headers = computed<any>(() => {
  return [
    { key: 'Id', title: 'ID' },
    { key: 'Name', title: 'Name' },
    { key: 'User', title: 'User' }
  ];
});

const result = ref([
  { Id: 12, Name: 'name', User: 'user' },
  { Id: 1, Name: 'string', User: 'user' },
  { Id: 13, Name: 'name', User: 'user' }
]);
</script>

<style scoped></style>
