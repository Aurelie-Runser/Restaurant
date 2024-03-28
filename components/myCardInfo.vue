<template>
  <section class="cardsInfo">
    <div class="cardsInfo__card" v-for="(c, index) in cardsInfo">
      <myIcon :name="c.info_icon" size="medium" bg="orange-blanc" />
      <PrismicRichText :field="c.info_title" />
      <PrismicRichText class="p2" :field="c.info_desc" />
      <span class="separateur" v-if="index + 1 < cardsInfo.length"></span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cardsInfo {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: $large4XL;
  height: min-content;
  border-radius: 50px;
  box-shadow: 0px 0px 50px 0px rgba($color-gray, 20%);

  &__card {
    flex: 1 1 0%;
    position: relative;
    padding: 60px;
    text-align: center;

    > * {
      margin: 12px 0 6px 0;
    }

    .p2 {
      @include p2;
    }
  }

  .separateur {
    flex: none;
    position: absolute;
    top: 45%;
    right: 0;
    transform: translateY(-50%);
    display: block;
    width: 1px;
    height: 70%;
    background: $color-gray;
  }
}
</style>

<script setup>
const env = useRuntimeConfig();

const props = defineProps({
  cardsInfo: Object,
});
</script>
