<template>
  <div class="footer__menu">
    <h4 class="footer__menu__title">{{ title }}</h4>

    <nav class="footer__nav">
      <ul class="footer__list">
        <li class="footer__item" v-for="lien in liens" :key="lien">
          <a v-if="lien.href" :href="lien.txt"> {{ lien.txt }} </a>
          <p v-else>{{ lien.txt }}</p>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.footer__menu {
  width: fit-content;
  height: fit-content;
  border: red solid 2px;

  &__title {
    margin-bottom: 68px;
  }

  .footer__nav {
    color: darken($color_gray, 20%);

    .footer__list {
      line-height: 1.5;
    }
  }
}
</style>

<script setup>
// import { computed } from 'vue'

// const props = defineProps({
defineProps({
    title: String,
    liens: Array
})

// const className = computed(() => ({
//     ' -rounded': props.variant === 'rounded',
//     ' -small': props.size === 'small',
//     ' -icon': props.icon === 'true'
// }))
</script>