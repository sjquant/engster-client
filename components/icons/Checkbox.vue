<template>
  <svg
    class="checkbox-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
  >
    <rect x="0.5" y="0.5" width="23" height="23" rx="1.5" fill="#22292F" stroke="#22292F" />
    <path
      d="M5 12L8.66599 15.2994C9.42494 15.9824 10.5766 15.9841 11.3375 15.3033L19.5 8"
      stroke="white"
      stroke-width="2"
    />
  </svg>
</template>

<style lang="scss">
@import "~styles/utils.scss";

.checkbox-icon {
  cursor: pointer;
}

.checkbox--unchecked > rect {
  fill: white;
}

.checkbox--checked > rect {
  fill: $black;
}
</style>