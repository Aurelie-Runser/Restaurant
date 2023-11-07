<template>
  <div>
    <NuxtLayout v-if="windowWidth >= 900"/>
      <div class="mobile" v-if="windowWidth < 900">
        <h3>La version mobile arrive bientôt.</h3>
      </div>
  </div>
</template>

<style lang="scss">
.mobile{
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  padding: 30px;
  text-align: center;
}
</style>

<script setup>
const store = useGlobalStore()

// les "process.client" permet d'être utiliser seulement coté client
const windowWidth = ref(process.client ? window.innerWidth : 0);

const handleResize = () => {
  if (process.client) {
    windowWidth.value = window.innerWidth;
  }
};

onMounted(() => {
  if (process.client) {
    window.addEventListener('resize', handleResize);
  }

  // fonction pour inialiser le panier en fonction des données enregistrées en local par rapport à la dernière visite
  const cart = localStorage.getItem("monPanier")
  store.setCart(JSON.parse(cart))
})

onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener('resize', handleResize);
  }
})

</script>