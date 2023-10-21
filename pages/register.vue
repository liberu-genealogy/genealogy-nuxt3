<template>
  <div class="d-flex align-center container">
    <div class="flex-grow-1">
      <NuxtLink to="/register" class="link-style primary-color font-size-20">Back to Home</NuxtLink>
      <h2>Create your account</h2>

      <div>
        <div class="d-flex flex-column py-10">
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="loginPayload.firstname"
                prepend-inner-icon="mdi-account"
                variant="outlined"
                :rules="[rules.required]"
                label="First name"
                required
              ></v-text-field
            ></v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="loginPayload.lastname"
                prepend-inner-icon="mdi-account"
                :rules="[rules.required]"
                variant="outlined"
                label="List name"
                required
              ></v-text-field
            ></v-col>
          </v-row>

          <v-text-field
            v-model="loginPayload.email"
            variant="outlined"
            prepend-inner-icon="mdi-email"
            :rules="[rules.required]"
            label="Email address"
            required
          ></v-text-field>

          <v-text-field
            v-model="loginPayload.password"
            variant="outlined"
            prepend-inner-icon="mdi-lock"
            :rules="[rules.required]"
            label="Password"
            required
          ></v-text-field>

          <v-text-field
            v-model="loginPayload.password"
            variant="outlined"
            :rules="[rules.required]"
            prepend-inner-icon="mdi-lock"
            label="Confirm Password"
            required
          ></v-text-field>
          <v-btn size="large" color="#4fcf8d" class="text-white" @click="handleRegistration">Register</v-btn>
        </div>

        <div class="d-flex">
          <P class="text-center mx-1">Already have an account?</P>
          <NuxtLink to="/login" class="link-style primary-color">Sign in</NuxtLink>
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
  firstname: '',
  lastname: '',
  email: '',
  password: ''
});

function handleRegistration() {}
</script>

<style scoped>
.container {
  min-height: 100vh;
  max-width: 75%;
  margin: 0 auto;
}
</style>
