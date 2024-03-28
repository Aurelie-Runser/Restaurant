<template>
  <div class="mainbody page__recettes">
      <h1 class="page__recettes-title">Recipes</h1>
      <myGridCards class="page__recettes-grid" typeGrid="big" :gridCards="gridProduitsBigDinamique" />
  </div>
</template>

<style lang="scss" scoped>
.page__recettes{
  margin-bottom: 135px;
  
  &-title{
      margin: 60px 0;
  }
  
  &-grid{
      margin: auto;
  }
}
</style>

<script setup>
// import et gestion de la base de données json
import myGridCards from '@/components/myGirdCards.vue'

const env = useRuntimeConfig()

const {data: recettes} = await useAsyncData("recettes", async () => {
  return $fetch(env.public.apiRecetteUrl + "/recipes")
})

const gridProduitsBigDinamique = computed(() => {
  if (recettes.value){
      return recettes.value.slice(4)
  } else{
      return []
  }
})

useSeoMeta({
  title: "Recettes du réstaurant FOOD",
  ogTitle: "Recettes du réstaurant FOOD",
  description: "Recettes disponibles au réstaurant FOOD.",
  ogDescription: "Recettes disponibles au réstaurant FOOD.",
  ogImage: "/FtitesBurgers.png",
})
</script>