<template>
  <myHeader/>
  <NuxtPage class="bigWindow"/>
  <myFooter/>
  <div class="smallWindow">
    <h3>La version mobile arrive prochainement</h3>
    <img src="/img/Logo.png" alt="Logo de FOOD">
  </div>
</template>

<style lang="scss">
.bigWindow{
  display: none;

  @include xx-large-up{
    display: block;
  }
}

.smallWindow{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
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

  @include xx-large-up{
    display: none
  }
}
</style>
