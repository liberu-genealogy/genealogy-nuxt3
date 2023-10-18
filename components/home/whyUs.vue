<template>
  <div class="px-4 px-md-0" id="why-us">
    <v-row>
      <v-col class="d-flex justify-center justify-md-start" cols="12" md="6">
        <img src="/images/sd.svg" class="section-image" alt="" />
      </v-col>

      <v-col cols="12" md="6" class="d-flex align-center">
        <div class="pr-6">
          <h1 class="app-heading-1 font-size-sm-24 line-height-36">Why Choose Family Tree 365?</h1>

          <div class="d-flex py-4 align-center">
            <img src="/images/Checkmark.svg" alt="" class="bullet mt-2 mr-3" />
            <p class="font-size-16 line-height-24">
              Family Tree 365 is the simple and secure way to create your own family tree online. It is designed to be
              easy to understand with great functionality..
            </p>
          </div>

          <div class="d-flex py-4 align-center">
            <img src="/images/Checkmark.svg" alt="" class="bullet mt-2 mr-3" />
            <p class="font-size-16 line-height-24">
              It has an intuitive yet powerful tree viewer and DNA matching. More features are also planned, as the
              inclusion of archive databases and collections.
            </p>
          </div>

          <div class="d-flex py-4 align-center">
            <img src="/images/Checkmark.svg" alt="" class="bullet mt-2 mr-3" />
            <p class="font-size-16 line-height-24">
              Set up your first family tree with a 14 day trial. We offer different pricing levels with optional
              subscriptions if you need to create extra trees
            </p>
          </div>

          <v-btn class="text-white text-capitalize btn-sm pt-md-4 pb-md-8" elevation="0" color="#4FCF8D" rounded
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

.section-image {
  height: auto;
  max-width: 100%;
}
</style>
