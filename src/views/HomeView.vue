<template>
  <body class="mainbody">

    <myCardAvis/>

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

    <mySectionEmail/>
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
import mySectionEmail from '@/components/layouts/myLayoutEmail.vue'
import myTitleSection from '@/components/elements/myTitleSection.vue'
import myButton from '@/components/elements/myButton.vue'
import myGridCards from '@/components/myGirdCards.vue'
import myCardAvis from '@/components/myCardAvis.vue'

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

// const gridProduitsSmall = [
//   {
//     type: 'produit-small',
//     imgSrc: '/Burger.png',
//     imgAlt: 'Photo de Gyro Sandwitc',
//     title: 'Gyro Sandwhic',
//     prix: '15.00',
//     des: 'LALAL'
//   },
//   {
//     type: 'produit-small',
//     imgSrc: '/Cake.png',
//     imgAlt: 'Photo de Enchilade',
//     title: 'Enchilade',
//     prix: '25.50'
//   },
//   {
//     type: 'produit-small',
//     imgSrc: '/Nugets.png',
//     imgAlt: 'Photo de Green Beans',
//     title: 'Green Beans',
//     prix: '12.00'
//   }
// ]
</script>
