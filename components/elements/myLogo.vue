<template>
  <div>
    <a href="/">
      <PrismicImage class="cardAvis__pp" :field="home.data.logo" />
    </a>
  </div>
</template>

<script setup>
// import de Prismic
const { client } = usePrismic();
const { data: home, error } = await useAsyncData("home", () =>
  client.getSingle("homepage")
)

if (!home.value || error.value){
  throw createError({statusCode: 404, statusMessage: "La page d'accueil est introuvable"})
}
</script>