<template>
  <div id="app">
    <Header />

    <main class="main content-container">
      <section class="sidebar">
        <SelectAdminType />
        <Menu />
      </section>

      <section class="content">
        <FiltersBar @handle-calendar-click="handleCalendarClick"/>

        <article class="content__calendar-filter">
          <CalendarFilter
            v-if="isCalendarClicked"
            @handle-calendar-click="handleCalendarClick"
          />
        </article>

        <UsersTable :users="users" />
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
      users: [
        {
          id: 1, name: 'User1', email: 'test@gmail.com', registration: 'registration', activity: 'activity', action: 'action', product: 'product',
        },
        {
          id: 2, name: 'User2', email: 'test@gmail.com', registration: 'registration', activity: 'activity', action: 'action', product: 'product',
        },
        {
          id: 3, name: 'User3', email: 'test@gmail.com', registration: 'registration', activity: 'activity', action: 'action', product: 'product',
        },
        {
          id: 4, name: 'User4', email: 'test@gmail.com', registration: 'registration', activity: 'activity', action: 'action', product: 'product',
        },
        {
          id: 5, name: 'User5', email: 'test@gmail.com', registration: 'registration', activity: 'activity', action: 'action', product: 'product',
        },
        {
          id: 6, name: 'User6', email: 'test@gmail.com', registration: 'registration', activity: 'activity', action: 'action', product: 'product',
        },
        {
          id: 7, name: 'User7', email: 'test@gmail.com', registration: 'registration', activity: 'activity', action: 'action', product: 'product',
        },
        {
          id: 8, name: 'User8', email: 'test@gmail.com', registration: 'registration', activity: 'activity', action: 'action', product: 'product',
        },
      ],
    };
  },
  methods: {
    handleCalendarClick() {
      this.isCalendarClicked = !this.isCalendarClicked;
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
    width: 1269px;
  }

</style>
