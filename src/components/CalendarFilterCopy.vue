<template>
  <section class="calendar">
    <!-- <article class="calendar__dates"> -->
      <!-- <v-app class="wrap"> -->
        <v-date-picker
          class="calendar__date-picker"
          v-model="picker"
          no-title
          first-day-of-week="1"
          mode="range"
          @change="sendRange"
          color="#ff7439"
        ></v-date-picker>
      <!-- </v-app> -->

      <section class="calendar__dates-buttons">
        <button
        @click="$emit('handle-calendar-click')"
          class="calendar__dates-button button"
        >
          Отмена
        </button>

        <button class="calendar__dates-button button">
          Обновить
        </button>
      </section>
    <!-- </article> -->
  </section>
</template>

<script>
// import VCalendar from 'v-calendar';
// import 'v-calendar/lib/v-calendar.min.css';

export default {
  // components: {
  //   VCalendar,
  // },
  // data() {
  //   return {
  //     range: [],
  //   };
  // },
  // components: {
  // },
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      rangeValue: this.range,
      firstDayOfWeek: 2,
    };
  },
  methods: {
    showChange() {
      console.log(this.change);
    },
    sendRange() {
      this.$emit('setRange', this.rangeValue);
      console.log(this);
    },
  },
};
</script>

<style lang="scss">
  @import "@/styles/main.scss";

  // v-app {
  //   height: 330px !important;
  // }
  // .wrap .v-application--wrap {
  //   max-height: 330px !important;
  // }

  .test {
    width: 600px;
    border: 1px solid;
  }

  .calendar {
    z-index: 10;
    position: absolute;

    display: flex;
    overflow: hidden;
    transform: translate(-$mainGapX, -$mainGapX * 4);

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
      margin-bottom: $mainGapX / 4;
    }

    // &__date-picker {
    //   height: 330px !important;
    // }

    &__dates-buttons {
      border: 1px solid;
    }
  }
</style>
