<template>
  <header class="header">
    <div class="header__content">
      <myLogo class="header__content__logo" />
      <myHeaderMenu />
      <myHeaderSearch />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: none;
  z-index: 50;
  position: sticky;
  top: 0;
  display: block;
  width: 100%;
  margin-top: 15px;
  background: $color-white;

  @include xx-large-up{
    display: block;
  }

  &__content {
    width: 85vw;
    max-width: $large3XL;
    margin: auto;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo {
      display: block;
      width: 100px;
    }
  }
}
</style>

<script setup>
</script>
