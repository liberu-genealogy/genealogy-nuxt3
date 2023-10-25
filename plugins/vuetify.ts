// plugins/vuetify.js
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { VDataTable, VDataTableServer, VDataTableVirtual } from 'vuetify/labs/VDataTable';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    directives,
    components
  });

  const vuetifyTable = createVuetify({
    components: {
      VDataTable,
      VDataTableServer,
      VDataTableVirtual
    }
  });

  nuxtApp.vueApp.use(vuetify);
  nuxtApp.vueApp.use(vuetifyTable);
});
