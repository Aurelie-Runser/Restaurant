<template>
  <section class="sectionWork">
    <myTitleSection
      :title_h2="title_h2"
      :title_h3="title_h3"
    />

    <div class="sectionWork__etap">

      <div class="workLine workLine-1">
        <WorkLine num="1" />
      </div>
      <div class="workLine workLine-2">
        <WorkLine num="2" />
      </div>
      
      <div class="etap" v-for="i in infos">
        <div class="etap__img">
          <PrismicImage class="img" :field="i.how_to_img"/>
        </div>

        <div>
          <PrismicText class="h4 etap__title" :field="i.how_to_title" />
          <PrismicRichText class="etap__txt" :field="i.how_to_text" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.sectionWork {
  &__etap {
    position: relative;
    display: flex;
    gap: 0 8%;

    .etap {
      z-index: 1;
      display: flex;
      gap: 25px;
      flex-direction: column;
      min-width: min-content;
      width: fit-content;
      max-width: 400px;

      &__img {
        width: 100%;
        text-align: center;

        .img {
          width: 85%;
        }
      }

      &__title {
        text-transform: uppercase;
        margin-bottom: 25px;
      }
    }

    
    > :nth-child(2n){
      flex-direction: column-reverse;

      .etap__title{
        text-align: center;
      }

    }

    > :last-child{
      text-align: right;
    }

    .workLine {
      position: absolute;
      z-index: 0;
      width: 400px;

      &-1 {
        top: 10%;
        left: 10%;
      }

      &-2 {
        top: 10%;
        right: 10%;
      }
    }
  }
}
</style>

<script setup>

const props = defineProps({
  title_h2: String,
  title_h3: String,
  infos: Array,
})
</script>
