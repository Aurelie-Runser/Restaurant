<template>
  <div class="carrouselCards">
    <div class="iconFleche iconFleche-gauche">
      <myIcon name="fleche" size="medium" direction="gauche" bg="orange-blanc" />
    </div>
    <div class="iconFleche iconFleche-droit">
      <myIcon name="fleche" size="medium" bg="orange-blanc" />
    </div>

    <div class="carrouselCards__carrousel">
      <myCardAvis />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carrouselCards {
  position: relative;
  width: 730px;

  .iconFleche {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    &-droit {
      right: 0;
      transform: translateX(50%);
    }

    &-gauche {
      left: 0;
      transform: translateX(-50%);
    }
  }

  &__carrousel{
    display: flex;
    width: 100%;

    >*{
        flex: none;
    }
  }
}
</style>

<script setup>
import myCardAvis from '@/components/myCardAvis.vue'
import myIcon from '@/components/elements/myIcon.vue'
</script>
