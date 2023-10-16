<template>
  <div class="container">
    <v-row>
      <v-col cols="12" md="6">
        <div>
          <img src="images/sd.svg" class="flot-block" alt="" />
        </div>
      </v-col>
      <v-col cols="12" md="6" class="d-flex align-center">
        <div class="pr-6">
          <h1>Why Choose Family Tree 365?</h1>

          <div class="d-flex py-4 align-center">
            <img src="images/Checkmark.svg" alt="" class="bullet mt-2 mr-3" />
            <p>
              Family Tree 365 is the simple and secure way to create your own family tree online. It is designed to be
              easy to understand with great functionality..
            </p>
          </div>

          <div class="d-flex py-4 align-center">
            <img src="images/Checkmark.svg" alt="" class="bullet mt-2 mr-3" />
            <p>
              It has an intuitive yet powerful tree viewer and DNA matching. More features are also planned, as the
              inclusion of archive databases and collections.
            </p>
          </div>

          <div class="d-flex py-4 align-center">
            <img src="images/Checkmark.svg" alt="" class="bullet mt-2 mr-3" />
            <p>
              Set up your first family tree with a 14 day trial. We offer different pricing levels with optional
              subscriptions if you need to create extra trees
            </p>
          </div>

          <v-btn class="home-btn text-white text-capitalize" elevation="0" color="#4FCF8D" size="x-large" rounded
            >Create Your own Tree</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  min-height: 80vh;
}
</style>
