<template>
  <div id="app">
    <Header />

    <main class="main content-container">
      <section class="sidebar">
        <SelectAdminType />
        <Menu />
      </section>

      <section class="content">
        <FiltersBar
          @handle-calendar-click="handleCalendarClick"
          :dates-refreshed="datesRefreshed"
          :dates-range="datesRange"
          @reset-dates-range="resetDatesRange"
        />

        <article class="content__calendar-filter">
          <CalendarFilter
            v-if="isCalendarClicked"
            @handle-calendar-click="handleCalendarClick"
            @handle-dates-range="handleDatesRange"
            :dates-range="datesRange"
          />
        </article>

        <UsersTable :users="filterDates" />
      </section>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import SelectAdminType from '@/components/SelectAdminType.vue';
import Menu from '@/components/Menu.vue';
import FiltersBar from '@/components/FiltersBar.vue';
import CalendarFilter from '@/components/CalendarFilter.vue';
import UsersTable from '@/components/UsersTable.vue';

import getUsersFromServer from '@/api/usersApi';

export default {
  name: 'App',
  components: {
    Header,
    SelectAdminType,
    Menu,
    FiltersBar,
    CalendarFilter,
    UsersTable,
  },
  data() {
    return {
      isCalendarClicked: false,
      datesRefreshed: false,
      datesRange: {},
      users: [],
    };
  },
  mounted() {
    this.users = getUsersFromServer();
  },
  computed: {
    filterDates() {
      if ('start' in this.datesRange) {
        return this.users.filter(
          (user) => {
            const parse = (date) => +Date.parse(date).toString().substr(0, 10);

            return parse(user.registration) >= parse(this.datesRange.start)
            && parse(user.registration) <= parse(this.datesRange.end);
          },
        );
      }

      return this.users;
    },
  },
  methods: {
    handleCalendarClick() {
      this.isCalendarClicked = !this.isCalendarClicked;
    },
    handleDatesRange(range) {
      if (range === null) {
        this.datesRange = {};
        this.datesRefreshed = false;
        return;
      }

      this.datesRange = range;
      this.datesRefreshed = true;
    },
    resetDatesRange() {
      this.datesRange = {};
      this.datesRefreshed = false;
    },
  },
};
</script>

<style lang="scss">
  @import "@/styles/main.scss";

  .main {
    display: flex;
    justify-content: start;
    margin-top: 48px;
  }

  .sidebar {
    margin-right: $sidebarMrgnRight;
  }

  .content {
    flex: 1 1 auto;
  }

</style>
