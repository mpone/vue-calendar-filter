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
            @click="() => {
              range = [];
            }"
            class="calendar__dates-button button button--reject button--date-picker">
            Отмена
          </button>

          <button
            @click="$emit('handle-calendar-click')"
            class="calendar__dates-button button button--confirm"
            :class="{
              'button--date-picker-disabled': !range,
              'button--date-picker': range,
            }"
            :disabled="true"
          >
            Обновить
          </button>
        </article>
    </section>
  </article>
</template>

<script>

export default {
  data() {
    return {
      range: [
        { start: 'Tue Sep 29 2020 00:00:00 GMT+0300 (Eastern European Summer Time)' },
        { end: 'Tue Sep 29 2020 00:00:00 GMT+0300 (Eastern European Summer Time)' },
      ],
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
  watch: {
    range() {
      console.log(this.range);
    },
  },
  methods: {
    handleOutsideClick(event) {
      if (event.target.className === 'bg-before') {
        this.$emit('handle-calendar-click');
      }
      console.log(this.range);
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
