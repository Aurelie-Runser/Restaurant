<template>
  <div class="grid" :class="className">
    <myCard
      v-for="cardData in gridCards"
      :key="cardData"
      :dataCard="cardData"
      :type="cardData.type"
    />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  justify-items: center;
  align-items: stretch;
  grid-template-rows: 1fr;

  &.-big {
    grid-template-columns: repeat(auto-fit, minmax(335px, 1fr));
    gap: 50px;
  }

  &.-small {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
  }

}
</style>

<script setup>
import { computed } from 'vue'
import myCard from '@/components/myCard.vue'

const props = defineProps({
  typeGrid: String,
  gridCards: Object // Déclarer le type de la prop gridCards comme un tableau
})

console.log(props.gridCards)

const className = computed(() => ({
  ' -big': props.typeGrid === 'big',
  ' -small': props.typeGrid === 'small'
}))
</script>
