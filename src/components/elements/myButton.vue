<template>
    <a v-if="href" :href="href" class="button" :class="className"><slot></slot></a>
    <button v-else class="button" :class="className"><slot></slot></button>
</template>

<style lang="scss" scoped>
.button {
  background-color: $color-main;
  background: linear-gradient(lighten($color-main, 15%), $color-main);
  border: none;
  border-radius: rem(15);
  box-shadow: 0px rem(4) rem(4) rgba(0, 0, 0, 0.25);
  display: inline-block;
  color: $color-white;
  font-family: $font;
  font-size: $font_size-regular;
  font-weight: 600;
  padding: rem(33) rem(67);
  text-decoration: none;
  word-wrap: break-word;

  &.-rounded {
    background: $color-main;
    border-radius: rem(37);
    font-weight: 500;
    padding: rem(26) rem(64);
  }
  
  &.-small {
    padding: 14px 29px;
    background: $color-main;
    font-size: $font_size-small;
    font-weight: $font_weight-regular;
  }
}
</style>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: String,
  size: String,
  variant: String
})


const className = computed(() => ({
  ' -rounded': props.variant === 'rounded',
  ' -small': props.size === 'small'
}))
</script>