<template>
  <div class="px-4">
    <div class="dashboard">
      <div class="dashboard-header">
        <h1 class="is-size-4 has-text-black">
          <span class="has-text-weight-medium">Hi {{ `login user name` }}</span
          >, <span class="has-text-weight-light"> Welcome Back!</span>
        </h1>

        <nav class="py-2 mb-0" aria-label="breadcrumbs">
          <ul class="d-flex">
            <li>
              <a class="is-size-7 has-text-weight-medium has-text-link" href="/dashboard">Home</a>
            </li>
            <li class="px-2 has-text-weight-medium is-active">
              <a href="/dashboard" aria-current="page">Dashboard</a>
            </li>
          </ul>
        </nav>

        <div>
          <dashboard-table />
        </div>

        <div class="py-6">
          <v-row>
            <v-col cols="12" md="4">
              <v-card class="d-flex py-4 px-8" elevation="4">
                <div><v-avatar image="/images/gedcom.svg" size="64"></v-avatar></div>
                <v-spacer></v-spacer>
                <div class="d-flex flex-column align-end">
                  <p>0</p>
                  <v-spacer></v-spacer>
                  <v-btn variant="tonal" class="color-primary">GEDCOM Import</v-btn>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" md="4">
              <v-card class="d-flex py-4 px-8" elevation="4">
                <div><v-avatar image="/images/families.svg" size="64"></v-avatar></div>
                <v-spacer></v-spacer>
                <div class="d-flex flex-column align-end">
                  <p>0</p>
                  <v-spacer></v-spacer>
                  <p>Families Joined</p>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" md="4">
              <v-card class="d-flex py-4 px-8" elevation="4">
                <div><v-avatar image="/images/peoples.svg" size="64"></v-avatar></div>
                <v-spacer></v-spacer>
                <div class="d-flex flex-column align-end">
                  <p>0</p>
                  <v-spacer></v-spacer>
                  <p>Peoples Attached</p>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>

        <div class="py-6">
          <v-row>
            <v-col cols="12" md="4">
              <v-card
                height="100%"
                elevation="4"
                class="d-flex flex-column py-16 align-center justify-center primary-bg-color"
              >
                <h3>Buy Plan</h3>
                <v-btn>subscribe</v-btn>
              </v-card>
            </v-col>
            <v-col cols="12" md="8">
              <v-row>
                <v-col cols="12" md="6">
                  <v-card>
                    <div class="elevation-2 py-3 px-4">Activity</div>
                    <div class="py-4 px-4">
                      <p>New Column added</p>
                      <p>on 15th Sep, 2020 at 23:20 pm</p>
                      <p>Password Changed</p>
                      <p>on 15th Sep, 2020 at 23:20 pm</p>
                    </div>
                  </v-card>
                </v-col>

                <v-col cols="12" md="6">
                  <v-card>
                    <div class="elevation-2 py-3 px-4">Files</div>
                    <div class="py-4 px-4">
                      <p>File_22012020.xlsx</p>
                      <p>on 15th Sep, 2020 at 23:20 pm</p>
                      <p>Tree_Table_Report.xlsx</p>
                      <p>on 15th Sep, 2020 at 23:20 pm</p>
                    </div>
                  </v-card>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" md="6">
                  <v-card class="py-6 px-8">
                    <v-select density="compact" label="Select" :items="['California']" variant="outlined"></v-select>
                    <div class="text-center">
                      <v-avatar size="50" color="green">
                        <v-icon icon="mdi-account-circle"></v-icon>
                      </v-avatar>
                      <p class="pt-2">email</p>
                      <p>full name</p>
                      <h5>USE TREE</h5>
                    </div>
                  </v-card>
                </v-col>

                <v-col cols="12" md="6">
                  <v-card class="py-6 px-8">
                    <v-select density="compact" label="Select" :items="['California']" variant="outlined"></v-select>
                    <div class="text-center">
                      <v-avatar size="50" color="green">
                        <v-icon icon="mdi-account-circle"></v-icon>
                      </v-avatar>
                      <p class="pt-2">email</p>
                      <p>full name</p>
                      <h5>USE TREE</h5>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'logged-in-user'
});

const apiList = ref(['Member tree', 'Open arch', 'Wikitree', 'Family search', 'UK national arch', 'Genealogy cloud']);
const loaded = false;
const trees = ref([]);
const companies = ref([]);
const invited_companies = ref([]);
const selected_company = ref(null);
const invited_company = ref(null);
const selected_tree = ref(null);
const isLoading = ref(false);
const fullPage = ref(true);
const color = '#4fcf8d';
const changedb = ref(null);
const backgroundColor = '#ffffff';
const trial = ref(null);
const familiesjoined = ref(0);
const peoplesattached = ref(0);
const pieChartData = ref(null);
const chartOptions = ref(null);
const apiSelected = ref('Member tree');
const dateMenu = ref(false);
const filter = reactive({
  firstName: '',
  lastName: '',
  date: ''
});
const totalCount = ref(0);

const loading = ref(true);
const options = ref({});
</script>

<style scoped></style>
