<template>
  <div class="title">
    <h2>{{ h2 }}</h2>
    <h3>{{ h3 }}</h3>
  </div>
</template>

<style lang="scss" scoped>
.title {
  margin: 57px auto;
  text-align: center;
  line-height: 1.5;

  h2 {
    @include p2;
    color: $color-main;
  }
}
</style>

<script setup>
defineProps({
  h2: String,
  h3: String
})
</script>
