<template>
  <section class="cardsInfo">
    <div class="cardsInfo__card">
      <myIcon name="heure" size="medium" bg="orange-blanc"/>
      <h5>Today 10:00am - 10:00pm</h5>
      <p>Working time</p>
    </div>

    <span class="cardsInfo__separateur"></span>

    <div class="cardsInfo__card">
      <myIcon name="ping" size="medium" bg="orange-blanc"/>
      <h5>Washington, D.C., DC,USA</h5>
      <p>Our Location</p>
    </div>

    <span class="cardsInfo__separateur"></span>

    <div class="cardsInfo__card">
      <myIcon name="phone" size="medium" bg="orange-blanc"/>
      <h5>+0123 456 7891</h5>
      <p>Phone Number</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cardsInfo{
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1600px;
    height: min-content;
    border-radius: 50px;
    box-shadow: 0px 0px 50px 0px rgba($color-gray, 20%);
    
    &__card{
        flex: 1 1 0%;
        padding: 60px;
        text-align: center;

        h5{
            margin: 12px 0 6px 0;
        }

        p{
            @include p2
        }

    }

    &__separateur{
        flex: none;
        width: 1.5px;
        height: 160px;
        background: $color-gray;
    }
}
</style>

<script setup>
</script>
