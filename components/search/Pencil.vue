<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    id="pencil-icon"
  >
    <g clip-path="url(#clip0)">
      <path
        d="M0.609603 11.0348L4.84089 15.1256L13.6902 6.57249L9.45887 2.48167L0.609603 11.0348Z"
        class="color"
      />
      <path
        d="M15.2486 2.1312L13.8913 0.819735C13.1426 0.0954684 11.9272 0.0954684 11.1785 0.819735L10.2268 1.7392L14.4585 5.82934L15.4102 4.90987C16.1589 4.1856 15.9983 2.85547 15.2486 2.1312Z"
        class="color"
      />
      <path d="M0 16H3.91062L0 11.8827V16Z" class="color" />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<style lang="scss">
@import "~styles/utils.scss";

#pencil-icon {
  .color {
    fill: $gray-dark;
  }
  &.active {
    .color {
      fill: $gray-darkest;
    }
  }
}
</style>
