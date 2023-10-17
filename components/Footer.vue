<template>
  <div class="bg-image">
    <div class="container footer">
      <v-row class="py-16">
        <v-col cols="12" md="8">
          <div>
            <h1 class="app-heading-1 font-size-sm-24 line-height-36">Start Your Free Tree Now!</h1>
            <p class="font-size-16 line-height-24">
              Your first tree is 100% free! If you need more, we offer affordable upgrades via our simple subscription
              plans. Need help? We can assist you to get started and explain Family Tree 365 features. Any issues? You
              can always contact our support team.
            </p>
          </div>
        </v-col>

        <v-col cols="12" md="4" align-self="center">
          <div class="text-md-center">
            <v-btn class="text-white text-capitalize" elevation="0" color="#4FCF8D" rounded
              >Create Your own Tree
            </v-btn>
          </div>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-row class="py-16">
        <v-col cols="12" md="4">
          <div class="font-size-14">
            <h3>Family Tree 365</h3>
            <p>Copyright © Family Tree 365 Ltd,</p>
            <p>Kemp House, 82 James Carter Road, Mildenhall, Suffolk, IP28 7DE</p>
            <p>Company number: 14652026</p>
          </div>
        </v-col>

        <v-col cols="6" md="4">
          <div>
            <h3>Quick Links</h3>
            <ul class="foot-list-style font-size-14">
              <template v-for="(item, i) in quickLinks" :key="i">
                <li>{{ item.name }}</li>
              </template>
            </ul>
          </div>
        </v-col>

        <v-col cols="6" md="4">
          <div>
            <ul class="foot-list-style font-size-14">
              <template v-for="(item, i) in moreLinks" :key="i">
                <li>{{ item.name }}</li>
              </template>
            </ul>
          </div>
        </v-col>

        <v-col cols="12" md="4">
          <div>
            <h3>Contact Details</h3>
            <ul class="foot-list-style">
              <template v-for="(item, i) in contactList" :key="i">
                <li>{{ item.name }}</li>
              </template>
            </ul>
          </div>
        </v-col>
      </v-row>

      <v-divider></v-divider>
      <div class="d-flex py-10 justify-center">
        <p class="">Copyright &copy; {{ new Date().getFullYear() }} Family Tree 365 Ltd</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const contactList = [
  {
    name: 'support@familytree365.com',
    link: ''
  },
  {
    name: '+44 20 8058 4401',
    link: ''
  },
  {
    name: '+44 20 8058 4401',
    link: ''
  }
];

const quickLinks = [
  {
    name: 'Home',
    link: ''
  },
  {
    name: 'Features',
    link: ''
  },
  {
    name: 'Why Family Tree 365?',
    link: ''
  },
  {
    name: 'About',
    link: ''
  }
];

const moreLinks = [
  {
    name: 'Sign in',
    link: ''
  },
  {
    name: 'Privacy Policy',
    link: ''
  },
  {
    name: 'Terms & Conditions',
    link: ''
  }
];
</script>

<style scoped>
.foot-list-style {
  list-style-type: none;
}

.container {
  max-width: 80%;
  margin: 0 auto;
}

.bg-image {
  background: url('images/footer-bg.png') no-repeat;
  background-size: cover;
}
</style>
