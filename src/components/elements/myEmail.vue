<template>
  <div class="email">
    <input class="email__input" type="email" size="25" placeholder="Enter your email..." />
    <myIcon name="chevron" size="medium" bg="orange-blanc" />
  </div>
</template>

<style lang="scss" scoped>
.email {
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 8px 10px;
  border-radius: 32.5px;
  background: $color-white;
  box-shadow: 0 0 15px rgba($color-gray, 30%);

  &__input {
    @include p2;
    border: none;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: darken($color-gray, 50%);
    }
  }
}
</style>

<script setup>
import myIcon from '@/components/elements/myIcon.vue'
</script>
