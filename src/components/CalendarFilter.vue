<template>
  <v-date-picker
    mode="range"
    v-model="range"
    locale="RU"
    :attributes='attrs'
    is-inline
  />
</template>

<script>
export default {
  data() {
    return {
      range: [],
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
};
</script>

<style lang="scss" scoped>

</style>
