<template>
  <section class="sectionAvis">
    <myTitleSection h2="Testimonials" h3="Our Happy Client Says" />

    <div class="sectionAvis__content">
      <myCarrouselCards />
      <img
        class="sectionAvis__img"
        src="/FritesBurgers.png"
        alt="photo illustrative d'un frite/burger"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sectionAvis {
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 45px;
    margin-top: 57px;

    .sectionAvis__img {
      width: 45%;
      flex: none;
    }
  }
}
</style>

<script setup>
import myTitleSection from '@/components/elements/myTitleSection.vue'

import myCarrouselCards from '@/components/myCarrouselCards.vue'
</script>
