<template>
  <div>
    <div class="mainbody">
      <myHero :title="home.data.hero_title" :text="home.data.hero_texte" :buttons="home.data.hero_buttons"/>

      <myCardInfo :cardsInfo="home.data.card_info"/>

      <section id="menu" class="sectionGrid">
        <myTitleSection :title_h2="home.data.produits__title_h2" :title_h3="home.data.produits__title_h3" />

        <myGridCards typeGrid="big" :gridCards="gridProduitsBigDinamique" />

        <div class="buttonCenter">
          <myButton @click="moreCard()" variant="rounded" icon="true" v-if="recettesEncore">
            see more product
          </myButton>
        </div>
      </section>

      <section id="services" class="sectionGrid">
        <myTitleSection :title_h2="home.data.service__title_h2" :title_h3="home.data.service__title_h3" />

        <myGridCards typeGrid="big" :gridCards="home.data.card_service" />
      </section>

      <myWork :title_h2="home.data.how_to__title_h2" :title_h3="home.data.how_to__title_h3" :infos="home.data.how_to"/>

      <mySectionAvis/>

      <mySectionEmail :title="home.data.newsletter__title" :text="home.data.newsletter__text" :img="home.data.newsletter__img" />
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sectionGrid {
  > * {
    margin: 57px auto;
  }

  .buttonCenter {
    width: fit-content;
    margin: auto;
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

// import et gestion de la base de données json
import myGridCards from '@/components/myGirdCards.vue'

const gridPage = ref(1)

const moreCard = () =>{
  gridPage.value++
}

const env = useRuntimeConfig()

const {data: recettes} = await useAsyncData("recettes", async () => {
  return $fetch(env.public.apiRecetteUrl + "/recipes")
})

const gridProduitsBigDinamique = computed(() => {
  if (recettes.value){
    return recettes.value.slice(4, 4+3*gridPage.value)
  } else{
    return []
  }
})

const recettesEncore = computed(() => {
  return gridProduitsBigDinamique.value.length < recettes.value.length-4
})

useSeoMeta({
  title: home.value.data.meta_title,
  ogTitle: home.value.data.meta_title,
  description: home.value.data.meta_description,
  ogDescription: home.value.data.meta_description,
  ogImage: home.value.data.meta_image,
})
</script>
