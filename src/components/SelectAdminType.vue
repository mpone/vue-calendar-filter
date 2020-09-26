<template>
  <section class="user-type">
    <div class="user-type__select">
      Эксперт

      <span class="user-type__arrow">
        <svg
          width="11"
          height="6"
          viewBox="0 0 11 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 6C5.21552 6 5.02591 5.91178 4.83625 5.7353L0.284483 1.50002C-0.0948276
          1.14708 -0.0948276 0.617647 0.284483 0.264706C0.663793 -0.0882353 1.23278 -0.0882353
          1.61209 0.264706L5.5 3.88239L9.38791 0.264706C9.76722 -0.0882353 10.3362 -0.0882353
          10.7155 0.264706C11.0948 0.617647 11.0948 1.14708 10.7155 1.50002L6.16375
          5.7353C5.97409 5.91178 5.68965 6 5.5 6Z"
            fill="black"
          />
        </svg>
      </span>
    </div>

    <div class="user-type__icon">
      <svg class="user-type__icon-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.8 23.8C21.3 23.8 21.8 23.3 21.8 22.8V10H19.8V21.8H12V23.8H20.8Z"
        />
        <path
          d="M2 22.8C2 23.4 2.4 23.8 3 23.8H12V21.8H4V10H2V22.8Z" />
        <path
          d="M8.5 14C7.69234 14 7 14.6923 7 15.5C7 16.3076 7.69234 17 8.5 17C9.30766 17 10
          16.3076 10 15.5C10 14.6923 9.30766 14 8.5 14Z" />
        <path
          d="M16 17C15.4616 17 15 17.4615 15 18C15 18.5384 15.4616 19 16 19C16.5384 19 17
          18.5384 17 18C16.9231 17.4615 16.5384 17 16 17Z" />
        <path
          d="M14 9C13.4616 9 13 9.46152 13 9.99998C13 10.5384 13.4616 11 14 11C14.5385 11
          15 10.5384 15 9.99998C14.9231 9.46152 14.5385 9 14 9Z" />
        <path
          d="M0 7C0 3.13401 5.37258 0 12 0C18.6274 0 24 3.13401 24 7C24 9.1307 22.3681
          11.0391 19.7935 12.3229V10.0236C21.1738 9.14783 22 8.07392 22 7C22 4 17.1797
          2 12 2C6.47715 2 2 4.35253 2 7C2 8.22309 2.74418 9.27997 4 10.1029V12.2176C1.545
          10.9358 0 9.07317 0 7Z" />
      </svg>
    </div>
  </section>
</template>

<style lang="scss">
  @import "@/styles/main.scss";

  $paddingX: 20px;

  .user-type {
    $blockName: &;

    position: relative;
    display: flex;
    align-items: center;
    height: 54px;

    &__select {
      z-index: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: $sidebarWidth;
      padding-left: $paddingX;
      padding-right: $paddingX;
      height: 100%;

      @extend %ptSansFontSidebar;

      background: $mainLightColor;
      border-radius: $mainBorderRadius;

      &:hover {
        cursor: pointer;
      }

      &:hover + #{$blockName}__icon #{$blockName}__icon-svg {
        fill: $activeOrangeColor;
      }

      &::before {
        content: "";
        z-index: -1;
        top: 0;
        left: 0;
        position: absolute;
        display: block;
        width: $sidebarWidth;
        height: 100%;
        border-radius: $mainBorderRadius;
        box-shadow: $componentsBoxShadow;
      }
    }

    &__arrow {
      margin-bottom: 3px;
    }

    &__icon {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 124px;
      height: 100%;
      padding-right: $paddingX;
      background: $mainLightColor;
      border-radius: $mainBorderRadius;
      transform: translateX(-50%);
      box-shadow: $componentsBoxShadow;
    }

    &__icon-svg {
      fill: $mainDarkColor;
      transition: fill $animOnHover;
    }
  }
</style>
