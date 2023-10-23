<template>
  <section class="sectionEmail">
    <PrismicImage :field="img"/>

    <div class="sectionEmail__content">
      <PrismicText class="h3 sectionEmail__content-title" :field="title"/>

      <PrismicRichText :field="text"/>

      <myEmail size="big" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sectionEmail {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 74px 50px;
  width: 100%;
  height: 300px;
  border-radius: 50px;
  background-color: $color-black;

  img {
    display: none;
    flex: none;
    width: 38%;
    @include x-large-up {
      display: block;
    }
  }

  &__content {
    flex: none;
    color: $color-white;
    max-width: fit-content;

    @include x-large-up {
      max-width: 46%;
    }

    > * {
      margin: 15px 0;
    }

    &-title{
      text-transform: capitalize;
    }
  }
}
</style>

<script setup>
const props = defineProps({
  title: String,
  text: String,
  img: String,
})
</script>
