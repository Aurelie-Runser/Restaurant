<template>
  <div class="title">
    <PrismicText class="h2" :field="title_h2" />
    <PrismicText class="h3" :field="title_h3" />
  </div>
</template>

<style lang="scss" scoped>
.title {
  text-align: center;
  line-height: 1.5;
  margin-bottom: 57px;

  .h2 {
    @include p2;
    color: $color-main;
  }

  .h3{
    text-transform: capitalize;
  }
}
</style>

<script setup>
defineProps({
  title_h2: String,
  title_h3: String
})
</script>
