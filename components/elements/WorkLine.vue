<template>
  <svg
    v-if="num === '1'"
    width="inherit"
    height="auto"
    viewBox="0 0 540 289"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 273.498C88.6667 289.332 237.6 303.498 290 241.498C355.5 163.998 255 -3.5 525.5 7.99989"
      stroke="#F48E28"
      stroke-width="3"
      stroke-dasharray="5 8"
    />
    <circle cx="532.5" cy="7.5" r="7.5" fill="#F48E28" />
    <circle cx="7.5" cy="271.5" r="7.5" fill="#F48E28" />
  </svg>

  <svg v-if="num === '2'"
    width="inherit"
    height="auto"
    viewBox="0 0 541 282"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M527 269.5C413.5 295.5 247.082 270.657 211.5 229.5C148.5 156.629 277.5 7.50034 13.5 7.5"
      stroke="#F48E28"
      stroke-width="3"
      stroke-dasharray="5 8"
    />
    <circle cx="533.5" cy="267.5" r="7.5" fill="#F48E28" />
    <circle cx="7.5" cy="7.5" r="7.5" fill="#F48E28" />
  </svg>
</template>

<script setup>
const props = defineProps({
  num: String,
})

</script>
