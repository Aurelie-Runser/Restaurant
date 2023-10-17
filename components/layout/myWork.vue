<template>
  <section class="sectionWork">
    <myTitleSection
      h2="How to work"
      h3="Food Us An Important Part Of A Balanced Diet"
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


      <!-- <div class="etap etap-2">
        <div class="etap__img">
          <img
            class="etap__img"
            src="Nugets.png"
            alt="Photo illustrative d'un plat de nugets"
          />
        </div>

        <div>
          <h4 class="etap__title">Prepare food</h4>
          <p class="etap__txt">
            Do you want to lose weight, exercise, adhere to a therapeutic diet?
            Our dietitian will help you with choosing the right program!
          </p>
        </div>
      </div>

      <div class="etap etap-3">
        <div class="etap__img">
          <img
            class="etap__img"
            src="Sacs.png"
            alt="Photo illustrative de sacs"
          />
        </div>

        <div>
          <h4 class="etap__title">Deliver</h4>
          <p class="etap__txt">
            Do you want to lose weight, exercise, adhere to a therapeutic diet?
            Our dietitian will help you with choosing the right program!
          </p>
        </div>
      </div> -->
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
  infos: Array,
})
</script>
