<template>
  <article
    class="calendar-wrapper"
    @click="(event) => handleOutsideClick(event)"
  >
    <section class="bg-before"></section>

    <section class="calendar">
      <article class="calendar__periods">
        <ul class="calendar__periods-list">
          <li class="calendar__periods-item">
            <button
              @click="handleAllDatesBack"
              class="calendar__button button button--choose-period"
              :class="{ 'button--choosen-peiod': range === {}}"
            >
              Весь срок
            </button>
          </li>
          <li class="calendar__periods-item">
            <button
              @click="handleToday"
              class="calendar__button button button--choose-period"
              :class="{ 'button--choosen-peiod': range === today}"
            >
              Сегодня
            </button>
          </li>
          <li class="calendar__periods-item">
            <button
              @click="handleYesterday"
              class="calendar__button button button--choose-period"
              :class="{ 'button--choosen-peiod': range === yesterday}"
            >
              Вчера
            </button>
          </li>
          <li class="calendar__periods-item">
            <button
              @click="handleLast7Days"
              class="calendar__button button button--choose-period"
              :class="{ 'button--choosen-peiod': range === last7Days}"
            >
              Последние 7 дней
            </button>
          </li>
          <li class="calendar__periods-item">
            <button
              @click="handleLast30Days"
              class="calendar__button button button--choose-period"
              :class="{ 'button--choosen-peiod': range === last30Days}"
            >
              Последние 30 дней
            </button>
          </li>
          <li class="calendar__periods-item">
            <button
              @click="handleThisMonth"
              class="calendar__button button button--choose-period"
              :class="{ 'button--choosen-peiod': range === thisMonth}"
            >
              В этом месяце
            </button>
          </li>
          <li class="calendar__periods-item">
            <button
              @click="handlePreviousMonth"
              class="calendar__button button button--choose-period"
              :class="{ 'button--choosen-peiod': range === previousMonth}"
            >
              Прошлый месяц
            </button>
          </li>
        </ul>
      </article>

      <v-date-picker
        class="calendar__picker"
        mode="range"
        v-model="range"
        locale="RU"
        :attributes='attrs'
        is-inline
      >
      </v-date-picker>

        <article class="calendar__dates-buttons">
          <button
            @click="() => range = []"
            class="calendar__dates-button button button--reject button--date-picker">
            Отмена
          </button>

          <button
            @click="handleRefreshClick"
            class="calendar__dates-button button button--confirm"
            :class="{
              'button--date-picker-disabled': !range,
              'button--date-picker': range,
            }"
            :disabled="!range"
          >
            Обновить
          </button>
        </article>
    </section>
  </article>
</template>

<script>

export default {
  props: {
    datesRange: {
      type: Object,
    },
  },
  data() {
    return {
      range: {},
      today: {
        end: new Date(),
        start: new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate(),
        ),
      },
      yesterday: {
        end: new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate() - 1,
        ),
        start: new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate() - 1,
        ),
      },
      last7Days: {
        end: new Date(),
        start: new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate() - 6,
        ),
      },
      last30Days: {
        end: new Date(),
        start: new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate() - 30,
        ),
      },
      thisMonth: {
        end: new Date(),
        start: new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
        ),
      },
      previousMonth: {
        end: new Date(
          new Date().getFullYear(),
          new Date().getMonth() - 1,
        ),
        start: new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          0,
        ),
      },

      attrs: [
        {
          key: 'today',
          highlight: {
            color: 'gray',
            fillMode: 'light',
          },
          dates: new Date(),
        },
      ],
    };
  },
  // watch: {
  //   range() {
  //     console.log(this.range);
  //   },
  // },
  mounted() {
    this.range = this.datesRange;
    console.log(this.range);
    console.log(this.today);
  },
  methods: {
    handleAllDatesBack() {
      this.range = {};
    },
    handleToday() {
      this.range = this.today;
    },
    handleYesterday() {
      this.range = this.yesterday;
    },
    handleLast7Days() {
      this.range = this.last7Days;
    },
    handleLast30Days() {
      this.range = this.last30Days;
    },
    handleThisMonth() {
      this.range = this.thisMonth;
    },
    handlePreviousMonth() {
      this.range = this.previousMonth;
    },
    handleRefreshClick() {
      this.$emit('handle-dates-range', this.range);
    },
    handleOutsideClick(event) {
      if (event.target.className === 'bg-before') {
        this.$emit('handle-calendar-click');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/main.scss";

  $sectionHeight: 330px;
  $calendarWidth: 290px;

  .bg-before {

    &::before {
      z-index: 10;
      content: "";
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(240, 246, 252, 0.8);
      filter: blur(10px);
    }
  }

  .calendar {
    z-index: 10;
    position: absolute;
    display: flex;
    top: $mainGapX * 9;
    transform: translateX(-$mainGapX);

    &__periods,
    &__picker,
    &__dates-buttons {
      z-index: 4;
    }

    &__periods,
    &__picker {
      box-shadow: 0px 10px 40px rgba(128, 158, 191, 0.2);
    }

    &__picker,
    &__dates-buttons {
      width: $calendarWidth;
      border: none;
    }

    &__periods {
      height: $sectionHeight;
      border-radius: $mainBorderRadius;

      margin-right: $mainGapX / 2;
      padding: $mainGapX / 2;
      background: $mainLightColor;
    }

    &__periods-item {
      margin-bottom: $mainGapX / 4;
    }

    &__dates-buttons {
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      padding: $mainGapX / 2;
    }

    &__dates-button {
      flex: 1 1 auto;

      &:first-child {
        margin-right: $mainGapX / 2;
      }
    }
  }
</style>
