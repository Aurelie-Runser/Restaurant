<template>
  <body class="error">
    <h1>Erreur {{ error.statusCode }}</h1>
    <p>{{ error.statusMessage }}</p>

    <myButton href="/">Retour accueil</myButton>
  </body>
</template>

<style lang="scss">
.error {
  text-align: center;

  > * {
    margin: 40px auto;
  }
}
</style>

<script setup>
const props = defineProps({
  error: Object,
});
</script>
