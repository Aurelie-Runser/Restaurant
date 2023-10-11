<template>
  <div class="about">
    <RouterLink to="/">retour acueil</RouterLink>
    <h1>recette avec l'id = {{ recette.lien }}</h1>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup>
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { API } from '@/utils/axios.js'

const route = useRoute()
const recette = ref([])

const getRecette = async () => {
  const response = await API.get(`/recette/${route.params.id}`)
  return response.data
}

onMounted(async () => {
  recette.value = await getRecette()
})

// console.log(recette)
</script>
