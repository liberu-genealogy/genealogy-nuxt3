<template>
  <v-app>
    <v-row class="auth-layout">
      <v-col cols="12" md="5" class="section-background text-white pt-14">
        <div class="section-content d-flex justify-center flex-column align-center">
          <div class="logo">
            <a class="navbar-item" href="#">
              <img src="/images/logo1.svg" />
            </a>
          </div>

          <div class="py-6 d-none d-md-block">
            <div class="d-flex py-4">
              <img src="images/bcheckmark.webp" alt="" class="bullet mt-2 mr-3 icon-size" />
              <p class="font-size-14 line-height-24">
                Discover Family Tree 365: Your free gateway to uncovering your roots! Build your family tree, connect
                with DNA matches, and explore historical records. Start your journey now.
              </p>
            </div>
            <div class="d-flex py-4">
              <img src="images/bcheckmark.webp" alt="" class="bullet mt-2 mr-3 icon-size" />
              <p class="font-size-14 line-height-24">
                The platform offers a wide range of features, including numerous charts, reports, and public member
                trees for easy searching. Additionally, it provides robust DNA support. Furthermore, there are exciting
                plans to introduce additional features such as archive databases and collections to enhance the user
                experience.
              </p>
            </div>
            <div class="d-flex py-4">
              <img src="images/bcheckmark.webp" alt="" class="bullet mt-2 mr-3 icon-size" />
              <p class="font-size-14 line-height-24">
                Begin your family tree journey today with our free setup. Enjoy the added benefit of DNA matching at no
                cost. Choose from a variety of pricing tiers tailored to your needs, whether you require multiple trees
                or DNA uploads. Rest assured, our pricing offers great value for optional extras.
              </p>
            </div>
          </div>
        </div>

        <div class="image-container d-none d-md-block">
          <img class="auth-img" src="/images/mockup01@2x.webp" alt="" />
        </div>
      </v-col>
      <v-col cols="12" md="6"><slot /></v-col>
    </v-row>
  </v-app>
</template>

<script setup lang="ts"></script>

<style scoped>
.auth-img {
  width: 100%;
  height: auto;
}

.logo {
  max-height: 44px;
  min-height: auto;
  max-width: 300px;
}

.logo img {
  width: 100%;
  height: auto;
}

.icon-size {
  max-height: 30px;
}

.section-background {
  background-color: #4fcf8d;
}

.section-content {
  max-width: 85%;
  margin: 0 auto;
}
</style>
