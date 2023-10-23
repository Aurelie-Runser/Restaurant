<template>
  <div>
    <div class="mainbody">
      <myHero :title="home.data.hero_title" :text="home.data.hero_texte" :buttons="home.data.hero_buttons"/>

      <myCardInfo :cardsInfo="home.data.card_info"/>

      <section id="menu" class="sectionGrid">
        <myTitleSection h2="Product" h3="Most Popular Items" />

        <myGridCards typeGrid="big" :gridCards="gridProduitsBigDinamique" />

        <div class="buttonCenter">
          <myButton @click="moreCard()" variant="rounded" icon="true" v-if="recettesEncore">
            see more product
          </myButton>
        </div>
      </section>

      <section id="services" class="sectionGrid">
        <myTitleSection h2="Services" h3="Why Choose Our Favorite Food" />

        <myGridCards typeGrid="big" :gridCards="home.data.card_service" />
      </section>

      <myWork :infos="home.data.how_to"/>

      <mySectionAvis :donnees="home.data.card_avis"/>

      <mySectionEmail />
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sectionGrid {
  > * {
    margin: 57px 0;
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

// const gridProduitsBig = [
//   {
//     type: 'produit-big',
//     imgSrc: '/GyroSandwhic.jpg',
//     imgAlt: 'Photo de Gyro Sandwitc',
//     title: 'Gyro Sandwhic',
//     prix: '15.00',
//     note: '4.9',
//     lien: "gyro-sandwhic"
//   },
//   {
//     type: 'produit-big',
//     imgSrc: '/Enchilade.jpg',
//     imgAlt: 'Photo de Enchilade',
//     title: 'Enchilade',
//     prix: '25.50',
//     note: '5.0',
//     lien: "enchilade"

//   },
//   {
//     type: 'produit-big',
//     imgSrc: '/GreenBeans.jpg',
//     imgAlt: 'Photo de Green Beans',
//     title: 'Green Beans',
//     prix: '12.00',
//     note: '4.9',
//     lien: "green-beans"

//   },
//   {
//     type: 'produit-big',
//     imgSrc: '/Pizza.jpg',
//     imgAlt: 'Photo de Pizza',
//     title: 'Pizza',
//     prix: '18.50',
//     note: '5.0',
//     lien: "pizza"

//   },
//   {
//     type: 'produit-big',
//     imgSrc: '/ChickenPotPie.jpg',
//     imgAlt: 'Photo de Chicken Pot Pie',
//     title: 'Chicken Pot Pie',
//     prix: '25.00',
//     note: '4.9',
//     lien: "chicken-pot-pie"

//   },
//   {
//     type: 'produit-big',
//     imgSrc: '/GreenSalad.jpg',
//     imgAlt: 'Photo de Green Salad',
//     title: 'Green Salad',
//     prix: '15.00',
//     note: '4.9',
//     lien: "green-salad"

//   }
// ]

// const gridServices = [
//   {
//     type: 'service',
//     icon: 'couvertsCroises',
//     title: 'Qualityfull Food',
//     des: `But I must explain to you how all this
//           mistaken idea.`
//   },
//   {
//     type: 'service',
//     icon: 'couverts',
//     title: 'Healthy Food',
//     des: `But I must explain to you how all this
//           mistaken idea of denouncing pleasur and
//           prasising pain was bron.`
//   },
//   {
//     type: 'service',
//     icon: 'camion',
//     title: 'Fast Delivery',
//     des: `But I must explain to you how all this
//           mistaken idea of denouncing pleasur and
//           prasising pain was bron.`
//   }
// ]

useSeoMeta({
  title: home.value.data.meta_title,
  ogTitle: home.value.data.meta_title,
  description: home.value.data.meta_description,
  ogDescription: home.value.data.meta_description,
  ogImage: home.value.data.meta_image,
})
</script>
