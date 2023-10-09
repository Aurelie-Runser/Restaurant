<template>
  <div class="cardAvis">
    <div class="cardAvis__personne">
      <img class="cardAvis__pp" src="/WilliansJhone.jpg" alt="" />
      <div class="cardAvis__desc">
        <h5>Willians Jhone</h5>
        <p>CEO & Co-Founder</p>
      </div>
    </div>

    <p class="cardAvis__avis">
      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing
      dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant
      feugiat neque ultrices nunc, dolor egestas mus.”
    </p>
  </div>
</template>

<style lang="scss" scoped>
.cardAvis {
  display: grid;
  place-items: center;
  gap: 45px;
  max-width: 730px;
  min-width: 500px;
  padding: 100px 20px;
  aspect-ratio: 2/1;
  box-shadow: 0px 0px 30px 0px rgba($color-gray, 30%);
  border-radius: 35px;

  &__personne {
    display: flex;
    align-items: center;
    gap: 17px;
    margin: auto;
    width: fit-content;

    img {
      width: 76px;
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: 100%;
    }

    .cardAvis__desc {
      > * {
        margin: 5px 0;
      }

      p {
        @include p2;
      }
    }
  }

  &__avis {
    width: 90%;
    margin: auto;
    text-align: center;
  }
}
</style>

<script setup></script>
