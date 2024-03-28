<template>
  <section class="sectionAvis">
    <myTitleSection :title_h2="home.data.avis__title_h2" :title_h3="home.data.avis__title_h3" />

    <div class="sectionAvis__content">
      <myCarrouselCards :donnees="home.data.card_avis" />
      <PrismicImage class="sectionAvis__img" :field="home.data.avis_img" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sectionAvis {
  max-width: $large4XL;
  
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 45px;

    .sectionAvis__img {
      width: 45%;
      flex: none;
      display: none;
    }
    @include xx-large-up {
      justify-content: space-between;

      .sectionAvis__img{
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

</script>
