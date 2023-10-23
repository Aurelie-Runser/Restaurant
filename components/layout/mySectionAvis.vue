<template>
  <section class="sectionAvis">
    <myTitleSection :title_h2="home.data.avis__title_h2" :title_h3="home.data.avis__title_h3" />

    <div class="sectionAvis__content">
      <myCarrouselCards :donnees="donnees" />
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

    .sectionAvis__img {
      width: 45%;
      flex: none;
      display: none;
      @include x-large-up {
        display: block;
      }
    }
  }
}
</style>

<script setup>
// import de Prismic
const { client } = usePrismic();
const { data: home, error } = await useAsyncData("home", () =>
  client.getSingle("homepage")
)

if (!home.value || error.value){
  throw createError({statusCode: 404, statusMessage: "La page d'accueil est introuvable"})
}

const props = defineProps({
  donnees: Object
})
</script>
