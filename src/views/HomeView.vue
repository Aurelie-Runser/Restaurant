<template>
  <body class="mainbody">
    <myHero />

    <myCardInfo />

    <section class="sectionGrid">
      <myTitleSection h2="Product" h3="Most Popular Items" />

      <myGridCards typeGrid="big" :gridCards="gridProduitsBig" />

      <div class="buttonCenter">
        <myButton href="#" variant="rounded" icon="true">see more product</myButton>
      </div>
    </section>

    <section class="sectionGrid">
      <myTitleSection h2="Services" h3="Why Choose Our Favorite Food" />

      <myGridCards typeGrid="big" :gridCards="gridServices" />
    </section>

    <mySectionAvis />

    <mySectionEmail />

    <ul>
      <li v-for="(recette, index) in recettes" :key="index">
        <p v-if="index < 4">{{ recette.recipe_name }}</p>
      </li>
    </ul>
    <br/>
    <ul>
      <li v-for="(recette, index) in recettes" :key="index">
        <p v-if="index > 4">{{ recette.recipe_name }}</p>
      </li>
    </ul>
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
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'

import myHero from '@/components/layouts/myHero.vue'
import myCardInfo from '@/components/myCardInfo.vue'
import mySectionEmail from '@/components/layouts/myLayoutEmail.vue'
import mySectionAvis from '@/components/layouts/myLayoutAvis.vue'

import myTitleSection from '@/components/elements/myTitleSection.vue'
import myGridCards from '@/components/myGirdCards.vue'
import myButton from '@/components/elements/myButton.vue'

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

const recettes = ref([])

const getRecette = async () => {
  const response = await API.get('/recipes')
  return response.data
}

const recettesNames = computed(() => {
  return recettes.value.map((item) => item.recipe_name)
})

const spaghettiRecettes = computed(() => {
  return recettes.value.filter((item) => item.recipe_name.toLowerCase().includes('spaghetti'))
})

const hasGoalId = computed(() => {
  return recettes.value.some((item) => item.goal_id === 1)
})

onMounted(async () => {
  recettes.value = await getRecette()
})

const gridProduitsBig = [
  {
    type: 'produit-big',
    imgSrc: '/GyroSandwhic.jpg',
    imgAlt: 'Photo de Gyro Sandwitc',
    border: 'shadow',
    title: 'Gyro Sandwhic',
    prix: '15.00',
    note: '4.9'
  },
  {
    type: 'produit-big',
    imgSrc: '/Enchilade.jpg',
    imgAlt: 'Photo de Enchilade',
    border: 'shadow',
    title: 'Enchilade',
    prix: '25.50',
    note: '5.0'
  },
  {
    type: 'produit-big',
    imgSrc: '/GreenBeans.jpg',
    imgAlt: 'Photo de Green Beans',
    border: 'shadow',
    title: 'Green Beans',
    prix: '12.00',
    note: '4.9'
  },
  {
    type: 'produit-big',
    imgSrc: '/Pizza.jpg',
    imgAlt: 'Photo de Pizza',
    border: 'shadow',
    title: 'Pizza',
    prix: '18.50',
    note: '5.0'
  },
  {
    type: 'produit-big',
    imgSrc: '/ChickenPotPie.jpg',
    imgAlt: 'Photo de Chicken Pot Pie',
    border: 'shadow',
    title: 'Chicken Pot Pie',
    prix: '25.00',
    note: '4.9'
  },
  {
    type: 'produit-big',
    imgSrc: '/GreenSalad.jpg',
    imgAlt: 'Photo de Green Salad',
    border: 'shadow',
    title: 'Green Salad',
    prix: '15.00',
    note: '4.9'
  }
]

const gridServices = [
  {
    type: 'service',
    border: 'border',
    icon: 'couvertsCroises',
    title: 'Qualityfull Food',
    des: `But I must explain to you how all this
          mistaken idea of denouncing pleasur and
          prasising pain was bron.`
  },
  {
    type: 'service',
    border: 'shadow',
    icon: 'couverts',
    title: 'Healthy Food',
    des: `But I must explain to you how all this
          mistaken idea of denouncing pleasur and
          prasising pain was bron.`
  },
  {
    type: 'service',
    border: 'border',
    icon: 'camion',
    title: 'Fast Delivery',
    des: `But I must explain to you how all this
          mistaken idea of denouncing pleasur and
          prasising pain was bron.`
  }
]
</script>
