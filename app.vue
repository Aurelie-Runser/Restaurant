<template>
  <div>
    <NuxtLayout/>
  </div>
</template>

<script setup>
const store = useGlobalStore()

onMounted(() => {
  // fonction pour inialiser le panier en fonction des données enregistrées en local par rapport à la dernière visite
  const cart = localStorage.getItem("monPanier")
  store.setCart(JSON.parse(cart))
})
</script>