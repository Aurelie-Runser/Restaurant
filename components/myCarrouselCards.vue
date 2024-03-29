<template>
  <div class="carrouselCards">
    <div class="iconFleche iconFleche-gauche" @click="showPreviousCard">
      <myIcon
        name="fleche"
        size="medium"
        direction="gauche"
        bg="orange-blanc"
      />
    </div>
    <div class="iconFleche iconFleche-droit" @click="showNextCard">
      <myIcon name="fleche" size="medium" bg="orange-blanc" />
    </div>

    <div class="carrouselCards__carrousel" ref="carrousel">
      <myCardAvis
        class="card"
        :key="card.id"
        v-for="card in donnees"
        :donnees="activeCard"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.carrouselCards {
  position: relative;
  width: 100%;

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

    &:hover{
      filter: brightness(1.2)
    }
  }

  &__carrousel {
    display: flex;
    flex-direction: row-reverse;
    overflow: hidden;
    max-width: 100%;
    min-width: 500px;
    box-shadow: 0px 0px 30px 0px rgba($color-gray, 30%);
    border-radius: 35px;
  }
}
</style>

<script setup>
const props = defineProps({
  donnees: Object,
});

const carrouselRef = ref(null);
const activeCard = ref(props.donnees[0]); // Commencez avec la première carte comme active

const showNextCard = () => {
  const currentIndex = props.donnees.indexOf(activeCard.value);
  console.log(currentIndex);
  if (currentIndex < props.donnees.length - 1) {
    activeCard.value = props.donnees[currentIndex + 1];
  } else {
    activeCard.value = props.donnees[0];
  }
};

const showPreviousCard = () => {
  const currentIndex = props.donnees.indexOf(activeCard.value);
  if (currentIndex > 0) {
    activeCard.value = props.donnees[currentIndex - 1];
  } else {
    activeCard.value = props.donnees[props.donnees.length - 1];
  }
};
</script>
