<template>
  <div class="container d-flex align-center justify-center">
    <div class="products-container">
      <h1 class="app-heading-1 font-size-sm-24 line-height-36">Our Product Features</h1>

      <v-row>
        <v-col cols="12" md="4" v-for="(product, i) in products" :key="i">
          <div class="py-6">
            <div class="py-2">
              <img :src="`${product.image}`" alt="" />
            </div>
            <div>
              <h3>{{ product.title }}</h3>
              <p class="font-size-16 line-height-24">{{ product.description }}</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
const products = [
  {
    title: 'Easy to use & secure.',
    description: `With an intuitive interface, you can get up and running quickly.
       There’s no steep learning curve. In-built security features keep your family tree private and secure.`,
    image: 'images/secured.svg'
  },
  {
    title: 'Easily Import & Export',
    description: `Our user-friendly import/export tool makes uploading and downloading existing family trees a breeze.
       Compatible with GEDCOM (family tree standard data format).`,
    image: 'images/import.svg'
  },
  {
    title: 'Record your Family',
    description: `Create your family tree(s) and view in different formats using our tree viewer.
       Even if you’re new to genealogy, you can quickly get to grips with our platform.`,
    image: 'images/record.svg'
  },
  {
    title: 'No limit for Family Tree',
    description: `We impose no limits on the size of your family tree so you are free to expand as you wish.
     The platform can easily support hundreds of thousands of records.`,
    image: 'images/upload.svg'
  },
  {
    title: 'Upload your Files',
    description: `Upload a range of media formats to support your family tree, including source documents,
     photographs, and other files related to your genealogy search.`,
    image: 'images/upload.svg'
  },
  {
    title: 'GEDCOM Import',
    description: `We support GEDCOM, the de facto standard file format for genealogy data.
     You can import and export GEDCOM family tree data at the click of a button.`,
    image: 'images/gimport.svg'
  }
];
</script>

<style scoped>
.container {
  min-height: 100vh;
}
.products-container {
  width: 80%;
  margin: 0 auto;
}
</style>
