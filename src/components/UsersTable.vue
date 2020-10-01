<template>
  <section class="users-table">
    <table class="users-table__users users">
      <thead>
        <tr class="users__head users__string">
          <th class="users__cell users__cell--head">
            <span class="users__checkbox"></span>
          </th>
          <th class="users__cell users__cell--head">Пользователь</th>
          <th class="users__cell users__cell--head">Дата регистрации</th>
          <th class="users__cell users__cell--head">Последняя активность</th>
          <th class="users__cell users__cell--head">Последнее действие</th>
          <th class="users__cell users__cell--head">Продукт</th>
          <th class="users__cell users__cell--head">
            <div class="users__quantity">
              <label for="quantity" class="users__quantity-title">
                Отобразить
              </label>

              <select
                class="users__quantity-select"
                name="quantity"
                id="quantity"
              >
                <option value="15">15</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>

              <span class="users__arrow">
                <svg
                  width="8"
                  height="5"
                  viewBox="0 0 11 6"
                  fill="black"
                >
                  <path
                    d="M5.5 6C5.21552 6 5.02591 5.91178 4.83625 5.7353L0.284483 1.50002C-0.0948276
                  1.14708 -0.0948276 0.617647 0.284483 0.264706C0.663793 -0.0882353 1.23278
                  -0.0882353 1.61209 0.264706L5.5 3.88239L9.38791 0.264706C9.76722 -0.0882353
                  10.3362 -0.0882353 10.7155 0.264706C11.0948 0.617647 11.0948 1.14708 10.7155
                  1.50002L6.16375 5.7353C5.97409 5.91178 5.68965 6 5.5 6Z"
                  />
                </svg>
              </span>
            </div>
          </th>
        </tr>
      </thead>

      <tbody class="users__body">
        <tr
          v-for="user in users"
          :key="user.id"
          class="users__string"
        >
          <td class="users__cell">
            <span class="users__checkbox"></span>
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
            <button class="users__btn users__btn--change button button--change">
              <svg
                class="users__btn-icon"
                width="23"
                height="23"
                viewBox="0 0 23 23"
              >
                <path d="M1 22.2C0.7 22.2 0.500003 22.1 0.300003 21.9C0.100003
                21.7 0 21.4 0 21.1L0.300003 16C0.300003 15.8 0.399991 15.5
                0.599991 15.4L15.7 0.299988C15.9 0.0999878 16.1 0 16.4 0C16.7
                0 16.9 0.0999878 17.1 0.299988L21.9 5.10004C22.1 5.30004 22.2
                5.49999 22.2 5.79999C22.2 6.09999 22.1 6.3 21.9 6.5L6.8 21.6C6.6
                21.8 6.4 21.9 6.2 21.9L1 22.2ZM2.2 16.5L2 20.1L5.59999 19.9L19.8
                5.70001L16.4 2.29999L2.2 16.5Z"/>
                <path d="M18.5 8.90004C18.2 8.90004 18 8.80005 17.8 8.60005L13.5
                4.3C13.1 3.9 13.1 3.30004 13.5 2.90004C13.9 2.50004 14.4999
                2.50004 14.8999 2.90004L19.1999 7.20002C19.5999 7.60002 19.5999
                8.20005 19.1999 8.60005C18.9999 8.80005 18.7 8.90004 18.5 8.90004Z"/>
                <path d="M1.5 18.7C1.4 18.7 1.4 18.7 1.3 18.7C1.2 18.7 1.19999
                18.7 1.09999 18.7L1 21.2L3.39999 21.1C3.39999 21 3.4 20.9 3.5
                20.8C3.5 19.6 2.7 18.7 1.5 18.7Z"/>
              </svg>
            </button>

            <button class="users__btn users__btn--delete button button--delete">
              <svg
                class="users__btn-icon"
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
              >
                <path d="M21.8 4.70001H1C0.4 4.70001 0 4.30001 0 3.70001C0
                3.10001 0.4 2.70001 1 2.70001H21.8C22.4 2.70001 22.8 3.10001
                22.8 3.70001C22.8 4.30001 22.3 4.70001 21.8 4.70001Z"/>
                <path d="M14.0001 4.09998C13.8001 2.89998 12.7 2 11.4 2C10.2
                2 9.10005 2.89998 8.80005 4.09998L6.80005 3.70001C7.20005 1.60001
                9.10005 0 11.3 0C13.5 0 15.4 1.60001 15.8 3.70001L14.0001 4.09998Z"/>
                <path d="M4.6001 24C3.6001 24 2.7001 23.1 2.6001 22.1L1.6001
                4.79998C1.6001 4.19998 2.00012 3.80001 2.50012 3.70001C3.10012
                3.70001 3.5001 4.09997 3.6001 4.59997L4.6001 21.9L18.1001
                22L19.1001 4.59997C19.1001 3.99997 19.6001 3.60001 20.2001
                3.70001C20.8001 3.70001 21.2001 4.19998 21.1001 4.79998L20.1001
                22.1C20.0001 23.2 19.2001 24 18.1001 24H4.6001Z"/>
                <path d="M7.59991 23.9155C7.09991 23.9155 6.59991 23.5155 6.59991
                23.0155L5.8999 11.1155C5.8999 10.5155 6.29993 10.1155 6.79993
                10.0155C7.29993 10.0155 7.7999 10.4155 7.8999 10.9155L8.59991
                22.8156C8.59991 23.4156 8.19991 23.9155 7.59991 23.9155Z"/>
                <path d="M15.2 23.9152C15.2 23.9152 15.1 23.9152 15.2 23.9152C14.6
                23.9152 14.2 23.4152 14.2 22.8152L14.9 10.9152C14.9 10.3152 15.4
                9.91519 16 10.0152C16.6 10.0152 17 10.5152 16.9 11.1152L16.2
                23.0152C16.1 23.5152 15.7 23.9152 15.2 23.9152Z"/>
                <path d="M11.3999 20.3C10.7999 20.3 10.3999 19.9 10.3999
                19.3V7.39996C10.3999 6.79996 10.7999 6.39996 11.3999 6.39996C11.9999
                6.39996 12.3999 6.79996 12.3999 7.39996V19.3C12.3999 19.9 11.8999
                20.3 11.3999 20.3Z"/>
              </svg>
            </button>
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

  $tablePadding: $mainContentGapX;
  $cellBrdrRadius: 5px;
  $cellBrdrOnHoverColor: #ebeef3;
  $cellBrdrWidth: 2px;
  $bodyPaddingY: 5px;
  $checkboxSize: 26px;

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
      border-bottom: 1px solid $secondaryBorderColor;
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
        }
      }

      #{$blockName}__cell--head {
        font-size: 13px;
        font-weight: 700;
      }

      #{$blockName}__cell--body {
        transition: border-color $animOnHover;

        @for $i from 2 through 6 {
          &:nth-child(#{$i}) {

            &::after {
              content: "";
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(
                90deg, transparent 60%, $lightColor 90%,
              );
            }
          }
        }

        &:nth-child(2) {
          border-radius: $cellBrdrRadius 0 0 $cellBrdrRadius;
          border-left: $cellBrdrWidth solid transparent;
        }

        &:nth-child(n+2):nth-child(-n+6) {
          border-top: $cellBrdrWidth solid transparent;
          border-bottom: $cellBrdrWidth solid transparent;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
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
      position: relative;
      display: inherit;
      align-items: center;
      height: 100%;
      text-align: left;
    }

    &__checkbox {
      width: $checkboxSize;
      height: $checkboxSize;
      border-radius: 50%;
      border: 2px solid $usersTableCheckbox;
    }

    &__quantity {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    &__quantity-title,
    &__quantity-select {
      font-weight: 500;
    }

    &__quantity-title {
      padding-right: $mainGapX / 2;
    }

    &__quantity-select {
      z-index: 2;
      font-family: inherit;
      height: 100%;
      border: none;
      padding-right: $mainGapX / 2;
      background: transparent;

      &:focus {
        outline: none;
        height: auto;
      }

      &:hover {
        cursor: pointer;
      }
    }

    &__arrow {
      position: absolute;
      transform: translateY(-3px);
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
      font-weight: 400;
    }

    &__buttons {
      display: flex;
      justify-content: flex-end;
    }

    &__btn-icon {
      fill: $mainDarkColor;
      transition: fill $animOnHover;
    }

    &__btn {

      &--delete {
        margin-left: $mainGapX * 2;
      }

      &:hover #{$blockName}__btn-icon {
        fill: $simpleOrangeColor;
        cursor: pointer;
      }
    }
  }
</style>
