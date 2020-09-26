<template>
  <section class="users-table">
    <table class="users-table__users users">
      <thead>
        <tr class="users__head users__string">
          <th class="users__cell users__cell--head"><input type="checkbox" /></th>
          <th class="users__cell users__cell--head">Пользователь</th>
          <th class="users__cell users__cell--head">Дата регистрации</th>
          <th class="users__cell users__cell--head">Последняя активность</th>
          <th class="users__cell users__cell--head">Последнее действие</th>
          <th class="users__cell users__cell--head">Продукт</th>
          <th class="users__cell users__cell--head"></th>
        </tr>
      </thead>

      <tbody class="users__body">
        <tr
          v-for="user in users"
          :key="user.id"
          class="users__string"
        >
          <td class="users__cell">
            <input type="checkbox">
          </td>

          <td class="users__info users__cell users__cell--body">
            <span class="users__name"> {{ user.name }} </span>
            <span class="users__email"> {{ user.email }} </span>
          </td>

          <td class="users__registration users__cell users__cell--body">
            {{ user.registration }}
          </td>

          <td class="users__activity users__cell users__cell--body">
            {{ user.activity }}
          </td>

          <td class="users__action users__cell users__cell--body">
            {{ user.action }}
          </td>

          <td class="users__product users__cell users__cell--body">
            {{ user.product }}
          </td>

          <td class="users__buttons users__cell users__cell--body">
            <button></button>
            <button></button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "@/styles/main.scss";

  $tablePadding: $mainContentGapLeft;
  $cellBrdrRadius: 5px;
  $cellBrdrOnHoverColor: #ebeef3;
  $cellBrdrWidth: 2px;
  $bodyPaddingY: 5px;

  .users-table {
    padding-left: $tablePadding;
    padding-right: $tablePadding;
    margin-top: $componentsGapY;
    background: $lightColor;
    border-radius: $mainBorderRadius;
  }

  .users {
    $blockName: &;

    width: 100%;
    border-collapse: collapse;

    &__head {
      height: 62px;
      border-bottom: 1px solid #e7ecf1;
    }

    &__body {
      display: block;
      margin: $bodyPaddingY 0;
    }

    &__string {
      display: flex;
      align-items: center;
      height: 57px;
      margin-bottom: $bodyPaddingY;

      &:last-child {
        margin-bottom: 0;
      }

      #{$blockName}__cell--head,
      #{$blockName}__cell--body {

        &:nth-child(2) {
          margin-left: $mainGapX;
        }

        &:nth-child(n+2) {
          padding-left: $mainGapX / 2;
          padding-right: ($mainGapX * 2) -($mainGapX / 2);
        }

        &:nth-child(n+2):nth-child(-n+6) {
          width: 17%;
        }

        &:last-child {
          width: 160px;
          padding-right: 0;
          border: 1px solid;
        }
      }

      #{$blockName}__cell--head {
        font-size: 13px;
        font-weight: 700;
      }

      #{$blockName}__cell--body {
        transition: border-color $animOnHover;

        &:nth-child(2) {
          border-radius: $cellBrdrRadius 0 0 $cellBrdrRadius;
          border-left: $cellBrdrWidth solid transparent;
        }

        &:nth-child(n+2):nth-child(-n+6) {
          border-top: $cellBrdrWidth solid transparent;
          border-bottom: $cellBrdrWidth solid transparent;
        }

        &:nth-child(6) {
          border-radius: 0 $cellBrdrRadius $cellBrdrRadius 0;
          border-right: $cellBrdrWidth solid transparent;
        }
      }

      &:hover #{$blockName}__cell--body:nth-child(2),
      &:hover #{$blockName}__cell--body:nth-child(n+2):nth-child(-n+6),
      &:hover #{$blockName}__cell--body:nth-child(6) {
        border-color: $cellBrdrOnHoverColor;
      }
    }

    &__cell {
      display: inherit;
      align-items: center;
      height: 100%;
      text-align: left;
    }

    &__info {
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
    }

    &__name {
      font-weight: 600;
      margin-bottom: 7px;
    }

    &__email {
      font-size: 13px;
      font-weight: 300;
    }
  }
</style>
