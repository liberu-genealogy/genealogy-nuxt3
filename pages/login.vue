<template>
  <div class="d-flex align-center container">
    <div class="flex-grow-1">
      <NuxtLink to="/register" class="link-style primary-color font-size-20">Back to Home</NuxtLink>
      <h2>Sign in to your account</h2>

      <div>
        <div class="d-flex flex-column py-10">
          <v-text-field
            v-model="loginPayload.email"
            :rules="[rules.required]"
            variant="outlined"
            label="Email address"
            required
          ></v-text-field>

          <v-text-field
            v-model="loginPayload.password"
            :rules="[rules.required]"
            variant="outlined"
            label="Password"
            required
          ></v-text-field>
          <v-btn size="large" color="#4fcf8d" class="text-white" @click="handleLogin">LOGIN</v-btn>
        </div>

        <div class="d-flex">
          <P class="text-center mx-1">Don't have an account?</P>
          <NuxtLink to="/register" class="link-style primary-color">Register Now</NuxtLink>
        </div>

        <div class="d-flex pt-4 align-center">
          <v-divider></v-divider>
          <div class="px-2">OR</div>
          <v-divider></v-divider>
        </div>

        <div class="d-flex flex-column py-10">
          <v-btn size="large" variant="outlined" class="mb-3" prepend-icon="mdi-google">CONTINUE WITH GOOGLE</v-btn>
          <v-btn size="large" variant="outlined" class="mb-3" prepend-icon="mdi-facebook">CONTINUE WITH FACE</v-btn>
          <v-btn size="large" variant="outlined" class="mb-3" prepend-icon="mdi-github">CONTINUE WITH GITHUB</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth'
});

const rules = reactive({
  required: (v: string) => !!v || 'This field is required.',
  hasWhiteSpace: (s: string) => {
    return !/(^\s+)|(\s+$)/.test(s) || 'Please do not leave spaces in your input';
  }
});

const loginPayload = reactive({
  email: '',
  password: ''
});

function handleLogin() {}
</script>

<style scoped>
.container {
  min-height: 100vh;
  max-width: 75%;
  margin: 0 auto;
}
</style>
