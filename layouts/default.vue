<template>
  <myHeader v-if="bigWindow"/>
  <NuxtPage v-if="bigWindow"/>
  <myFooter v-if="bigWindow"/>
  <div v-else class="smallWindow">
    <h3>La version mobile arrive prochainement</h3>
    <img src="/img/Logo.png" alt="Logo de FOOD">
  </div>
</template>

<style lang="scss">
.smallWindow{
  width: 100vw;
  height: 100vh;
  margin: auto;
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 100px;

  img{
    max-width: 400px;
  }
}
</style>

<script setup>
const bigWindow = ref(false);

const calculeWindow = () => {
  if (window.innerWidth <= 768) {
    bigWindow.value = false
  } else {
    bigWindow.value = true
  }
};

onMounted(() => {
  calculeWindow();
  window.addEventListener('resize', calculeWindow);
});

onUnmounted(() => {
  window.removeEventListener('resize', calculeWindow);
});
</script>