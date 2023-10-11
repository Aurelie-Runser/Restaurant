<template>
  <body class="mainbody">
    <myHero />

    <myCardInfo />

    <section class="sectionGrid">
      <myTitleSection h2="Product" h3="Most Popular Items" />

      <myGridCards typeGrid="big" :gridCards="gridProduitsBigDinamique" />

      <div class="buttonCenter">
        <myButton @click="moreCard()" variant="rounded" icon="true" v-if="recettesEncore">see more product</myButton>
      </div>
    </section>

    <section class="sectionGrid">
      <myTitleSection h2="Services" h3="Why Choose Our Favorite Food" />

      <myGridCards typeGrid="big" :gridCards="gridServices" />
    </section>

    <mySectionAvis />

    <mySectionEmail />
  </body>
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
import {useRoute} from "vue-router"
import { computed, onMounted, ref } from 'vue'
import {API} from '@/utils/axios'

import myHero from '@/components/layouts/myHero.vue'
import myCardInfo from '@/components/myCardInfo.vue'
import mySectionEmail from '@/components/layouts/myLayoutEmail.vue'
import mySectionAvis from '@/components/layouts/myLayoutAvis.vue'

import myTitleSection from '@/components/elements/myTitleSection.vue'
import myGridCards from '@/components/myGirdCards.vue'
import myButton from '@/components/elements/myButton.vue'

// const recettes = ref([])

// const getRecette = async () => {
//   const response = await API.get('/recette')
//   return response.data
// }

// const recettesNames = computed(() => {
//   return recettes.value.map((item) => item.recipe_name)
// })

// const spaghettiRecettes = computed(() => {
//   return recettes.value.filter((item) => item.recipe_name.toLowerCase().includes('spaghetti'))
// })

// const hasGoalId = computed(() => {
//   return recettes.value.some((item) => item.goal_id === 1)
// })

// const route = useRoute()
// console.log(route)

// onMounted(async () => {
//   recettes.value = await getRecette()
// })

const gridPage = ref(1)

const moreCard = () =>{
  gridPage.value++
}

const recettesReactives = computed(() => {
  const nbrCard = 1
  return recettes.value.slice(4, 4 + nbrCard * gridPage.value)
})

const gridProduitsBigDinamique = computed(() => {
  return gridProduitsBig.slice(0, 0+3*gridPage.value)
})

const recettesEncore = computed(() => {
  return gridProduitsBigDinamique.value.length < gridProduitsBig.length
})

const gridProduitsBig = [
  {
    type: 'produit-big',
    imgSrc: '/GyroSandwhic.jpg',
    imgAlt: 'Photo de Gyro Sandwitc',
    title: 'Gyro Sandwhic',
    prix: '15.00',
    note: '4.9',
    lien: "gyro-sandwhic"
  },
  {
    type: 'produit-big',
    imgSrc: '/Enchilade.jpg',
    imgAlt: 'Photo de Enchilade',
    title: 'Enchilade',
    prix: '25.50',
    note: '5.0',
    lien: "enchilade"

  },
  {
    type: 'produit-big',
    imgSrc: '/GreenBeans.jpg',
    imgAlt: 'Photo de Green Beans',
    title: 'Green Beans',
    prix: '12.00',
    note: '4.9',
    lien: "green-beans"

  },
  {
    type: 'produit-big',
    imgSrc: '/Pizza.jpg',
    imgAlt: 'Photo de Pizza',
    title: 'Pizza',
    prix: '18.50',
    note: '5.0',
    lien: "pizza"

  },
  {
    type: 'produit-big',
    imgSrc: '/ChickenPotPie.jpg',
    imgAlt: 'Photo de Chicken Pot Pie',
    title: 'Chicken Pot Pie',
    prix: '25.00',
    note: '4.9',
    lien: "chicken-pot-pie"

  },
  {
    type: 'produit-big',
    imgSrc: '/GreenSalad.jpg',
    imgAlt: 'Photo de Green Salad',
    title: 'Green Salad',
    prix: '15.00',
    note: '4.9',
    lien: "green-salad"

  }
]

const gridServices = [
  {
    type: 'service',
    icon: 'couvertsCroises',
    title: 'Qualityfull Food',
    des: `But I must explain to you how all this
          mistaken idea.`
  },
  {
    type: 'service',
    icon: 'couverts',
    title: 'Healthy Food',
    des: `But I must explain to you how all this
          mistaken idea of denouncing pleasur and
          prasising pain was bron.`
  },
  {
    type: 'service',
    icon: 'camion',
    title: 'Fast Delivery',
    des: `But I must explain to you how all this
          mistaken idea of denouncing pleasur and
          prasising pain was bron.`
  }
]
</script>
