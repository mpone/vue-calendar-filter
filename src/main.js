import Vue from 'vue';

import vuetify from '@/plugins/vuetify';
import VCalendar from 'v-calendar';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VCalendar, {
  locales: {
    ru: {
      id: 'ru',
      firstDayOfWeek: 2,
      masks: {
        dayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Неделя'],
        dayNamesShorter: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
        weekdays: 'WW',
      },
    },
  },
});

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
