<template>
  <section class="calendar">
    <article class="calendar__periods">
      <ul class="calendar__periods-list">
        <li class="calendar__periods-item">
          <button class="calendar__button button button--choose-period">
            Сегодня
          </button>
        </li>
        <li class="calendar__periods-item">
          <button class="calendar__button button button--choose-period">
            Вчера
          </button>
        </li>
        <li class="calendar__periods-item">
          <button class="calendar__button button button--choose-period">
            Последние 7 дней
          </button>
        </li>
        <li class="calendar__periods-item">
          <button class="calendar__button button button--choose-period">
            Последние 30 дней
          </button>
        </li>
        <li class="calendar__periods-item">
          <button class="calendar__button button button--choose-period">
            В этом месяце
          </button>
        </li>
        <li class="calendar__periods-item">
          <button class="calendar__button button button--choose-period">
            Прошлый месяц
          </button>
        </li>
      </ul>
    </article>

    <article class="calendar__dates">
      <v-app class="wrap">
        <v-date-picker
          class="calendar__date-picker"
          v-model="picker"
          no-title
          first-day-of-week="1"
          range
          change
          color="#ff7439"
        ></v-date-picker>
      </v-app>

      <section class="calendar__dates-buttons">
        <button class="calendar__dates-button button">
          Отмена
        </button>

        <button class="calendar__dates-button button">
          Обновить
        </button>
      </section>
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      color: 'red',
      change: [],
    };
  },
  watch: {
    change() {
      console.log(this.change);
    },
  },
  methods: {
    showChange() {
      console.log(this.change);
    },
  },
};
</script>

<style lang="scss">
  @import "@/styles/main.scss";

  // v-app {
  //   height: 330px !important;
  // }
  .wrap .v-application--wrap {
    max-height: 330px !important;
  }

  .calendar {
    z-index: 10;
    position: absolute;
    top: 0;
    // background: red;

    display: flex;
    overflow: hidden;
    transform: translate(-$mainGapX, $mainContentGapX * 2);

    &__periods,
    &__date-picker {
      height: 330px;
      border-radius: $mainBorderRadius;
      box-shadow: 0px 10px 40px rgba(128, 158, 191, 0.2);
    }

    &__periods {
      margin-right: $mainGapX / 2;
      padding: $mainGapX / 2;
      background: $mainLightColor;
    }

    &__periods-item {
      margin-bottom: 5px;
    }

    &__date-picker {
      height: 330px !important;
    }

    &__dates-buttons {
      border: 1px solid;
    }
  }
</style>
