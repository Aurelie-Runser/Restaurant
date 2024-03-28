<template>
  <a v-if="href" :href="href" class="button" :class="className">
    <myIcon v-if="variant === 'video'" name="play" size="big" bg="blanc-orange" shadow="true"/>

    <slot></slot>
    <myIcon  v-if="icon"  class="button-icon"  name="chevron"  size="medium"  bg="blanc-orange"/>
  </a>

  <button v-else class="button" :class="className">
    <myIcon  v-if="variant === 'video'"  name="play"  size="big"  bg="blanc-orange"  shadow="true"/>

    <slot></slot>
    <myIcon  v-if="icon"  class="button-icon"  name="chevron"  size="medium"  bg="blanc-orange"/>
  </button>
</template>

<style lang="scss" scoped>
.button {
  @include h5;
  background-color: $color-main;
  background: linear-gradient(lighten($color-main, 15%), $color-main);
  border: none;
  border-radius: 15px;
  display: inline-block;
  color: $color-white;
  padding: 33px 67px;
  text-decoration: none;
  text-transform: capitalize;
  width: fit-content;
  word-wrap: break-word;
  cursor: pointer;

  &.-rounded {
    @include p1;
    background: $color-main;
    border-radius: 50px;
    padding: 26px 64px;
  }

  &.-video {
    @include h4;
    display: flex;
    align-items: center;
    gap: 25px;
    width: fit-content;
    height: fit-content;
    padding: 0;
    background: transparent;
    color: $color-black;
  }

  &.-small {
    @include p2;
    padding: 14px 29px;
    background: $color-main;
  }

  &.-icon {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 20px;
  }

  &:hover{
    filter: brightness(1.2);
  }
}
</style>

<script setup>
const props = defineProps({
  href: String,
  size: String,
  variant: String,
  icon: String,
});

const className = computed(() => ({
  " -rounded": props.variant === "rounded",
  " -video": props.variant === "video",
  " -small": props.size === "small",
  " -icon": props.icon === "true",
}));
</script>
