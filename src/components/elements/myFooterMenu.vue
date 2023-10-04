<template>
  <div class="footer__menu">
    <myLogo v-if="logo" class="footer__menu__logo"/>

    <h4 v-if="title" class="footer__menu__title">{{ title }}</h4>

    <nav v-if="liens" class="footer__nav">
      <ul class="footer__list">
        <li class="footer__item" v-for="lien in liens" :key="lien">
          <a v-if="lien.href" :href="lien.txt"> {{ lien.txt }} </a>
          <p v-else>{{ lien.txt }}</p>
        </li>
      </ul>
    </nav>

    <p v-if="texte" class="footer__texte">{{ texte }}</p>

    <div v-if="icons" class="footer__icons">
      <myIcon v-for="icon in icons" :key="icon" :name="icon" size="medium" bg="orange" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer__menu {
  width: fit-content;
  max-width: 380px;
  height: fit-content;
//   border: red solid 2px;

  &__logo{
    width: 180px;
    margin-bottom: 30px;
  }

  &__title {
    margin-bottom: 68px;
  }

  .footer__nav,
  .footer__texte {
    @include p1;
    color: darken($color_gray, 20%);
    
}

.footer__nav{
    line-height: 1.75;
  }

  .footer__icons {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    margin: 20px 0;
  }
}
</style>

<script setup>
import myLogo from '@/components/elements/myLogo.vue'
import myIcon from '@/components/elements/myIcon.vue'

defineProps({
    title: String,
    logo: String,
    liens: Array,
    texte: String,
    icons: Array
})
</script>
