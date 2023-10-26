<template>
    <div class="mainbody page__panier">
        <h1 class="page__panier-title">My Cart</h1>
        <myGridCards class="page__panier-grid" typeGrid="big" :gridCards="gridProduitsPanier" />
    </div>
</template>

<style lang="scss" scoped>
.page__panier{
    margin-bottom: 135px;
    
    &-title{
        margin: 60px 0;
    }
}
</style>

<script setup>
import myGridCards from '@/components/myGirdCards.vue'

// import des fonctions globales
import { useGlobalStore } from "@/stores/global.js";
const store = useGlobalStore();

// import des variables d'environnement
const env = useRuntimeConfig()

const {data: recettes} = await useAsyncData("recettes", async () => {
  return $fetch(env.public.apiRecetteUrl + "/recipes")
})

const gridProduitsPanier = computed(() => {
    if (recettes.value) {
    const recettesInCart = recettes.value.filter(recette => store.cart.includes(recette.recipe_id));
    return recettesInCart;
  } else{
    return []
  }
})

useSeoMeta({
  title: "Mon Panier",
  ogTitle: "Mon Panier",
  description: "Mon Panier de recettes.",
  ogDescription: "Mon Panier de recettes."
})
</script>