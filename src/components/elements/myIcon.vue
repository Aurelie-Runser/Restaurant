<template>
    <i class="icon">
      <!-- <component :is="getIcon" /> -->
    </i>
  </template>
  
  <style lang="scss" scoped>
  .icon {
    display: inline-flex;
    align-items: center;
    border-radius: 100%;
    background: $color-white;
    color: black;
    box-shadow: 0 0 5px gray;
    height: rem(50);
    width: rem(50);
    justify-content: center;
  }
  </style>
  
  <script setup>
  import { computed } from 'vue'
  
//   import IconCommunity from '../icons/IconCommunity.vue'
//   import IconDocumentation from '../icons/IconDocumentation.vue'
//   import IconEcosysteme from '../icons/IconEcosystem.vue'
//   import IconSupport from '../icons/IconSupport.vue'
  
//   const props = defineProps({
//     name: String
//   })
  
//   const getIcon = computed(() => {
//     switch (props.name) {
//       case 'community':
//         return IconCommunity
//       case 'documentation':
//         return IconDocumentation
//       case 'ecosysteme':
//         return IconEcosysteme
//       case 'support':
//         return IconSupport
//     }
//   })
  </script>