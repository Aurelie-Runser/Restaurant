<template>
  <section class="sectionHero">
    <div class="sectionHero__gauche">
      <div class="sectionHero__gauche-delivery">
        <p>Bike Delivery</p>
        <img src="/img/BikeDelivery.jpg" alt="illustration de livraison" />
      </div>

      <!-- <h1 class="sectionHero__gauche-title">
        {{ home.data.hero_title[0].text }}
      </h1> -->
      <PrismicRichText class="sectionHero__gauche-title" :field="title"/>

      <!-- <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, sed
        proin amet a vestibulum enim volutpat lacus. Volutpat arcu sit sed
        tortor etiam volutpat ipsum.
      </p> -->
      <PrismicRichText :field="text"/>

      <div class="sectionHero__gauche-buttons">
        <div v-for="b in buttons" :key="b">
          <myButton :variant="b.button_type" :href="b.button_link.url">{{b.button_label}}</myButton>
        </div>
        
      </div>
    </div>

    <div class="sectionHero__droit">
      <div class="sectionHero__droit-bg"></div>

      <div class="sectionHero__droit-grid">
        <myGridCards typeGrid="small" :gridCards="gridProduitsDinamique" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.sectionHero {
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;

  &__gauche {
    min-width: min-content;
    max-width: 630px;
    width: 48%;

    &-delivery {
      width: 270px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 5px;
      padding: 5px;
      border-radius: 30px;
      background: $color-main_light;

      img {
        width: 54px;
        aspect-ratio: 1/1;
        object-fit: cover;
        border-radius: 100%;
      }

      p {
        @include h5;
        color: $color-main;
        margin-left: 25px;
      }
    }

    &-title {
      margin: 70px 0 50px 0;
      text-transform: capitalize;

      strong {
        color: $color-main;
      }
    }

    &-buttons {
      margin-top: 90px;
      display: flex;
      align-items: center;
      gap: 50px;

      > *{
        flex: none;
      }
    }
  }

  &__droit {
    position: relative;
    min-width: min-content;
    max-width: 600px;
    width: 40%;
    height: fit-content;
    padding: 50px 40px 60px 0;

    &-bg {
      position: absolute;
      top: 0;
      right: 0;
      background: linear-gradient(25deg, transparent, rgba($color-gray, 50%));
      border-radius: 30px;
      width: 77%;
      height: 100%;
    }
  }
}
</style>

<script setup>
import myGridCards from "@/components/myGirdCards.vue";

const env = useRuntimeConfig()

const props = defineProps({
  title: Array,
  text: Array,
  buttons: Array,
})


const {data: recettes} = await useAsyncData("recettes", async () => {
  return $fetch(env.public.apiRecetteUrl + "/recipes")
})

const gridProduitsDinamique = computed(() => {
  if (recettes.value){
    return recettes.value.slice(0, 4)
  } else{
    return []
  }
})
</script>
