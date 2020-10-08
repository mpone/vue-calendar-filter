import Vue from 'vue';

import vuetify from '@/plugins/vuetify';
import VCalendar from 'v-calendar';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VCalendar, {
  locales: {
    ru: {
      id: 'ru',
      firstDayOfWeek: 2,
      masks: {
        weekdays: 'WW',
      },
    },
  },
});

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
