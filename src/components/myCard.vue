<template>
  <div v-if="type === 'produit-big'" class="card" :class="className">
    <div class="card__img">
      <img :src="imgSrc" :alt="imgAlt" />
    </div>

    <div class="card__content">
      <div class="card__content-gauche">
        <div class="card__title">
          <h4>{{ title }}</h4>
        </div>

        <div class="card__button">
          <myButton variant="rounded" size="small">add to Cart</myButton>
        </div>
      </div>

      <div class="card__content-droit">
        <div class="card__note">
          <myIcon name="etoile" etoile="pleine" size="small" />
          <p>{{ note }}</p>
        </div>

        <div class="card__prix">
          <p>{{ prix }}</p>
        </div>
      </div>
    </div>
  </div>

  <div v-if="type === 'produit-small'" class="card" :class="className">
    <div class="card__bg">
      <div class="card__content">
        <h4>{{ title }}</h4>

        <p v-if="des" class="card__content__des">{{ des }}</p>
        <p v-else class="card__content__des"><slot /></p>

        <p class="card__content__prix">{{ prix }}</p>
      </div>

      <div class="card__buttons">
        <myIcon name="fleche" size="medium" bg="black" />
        <myIcon name="fleche" size="medium" bg="white" direction="gauche" />
      </div>
    </div>

    <div class="card__img">
      <img :src="imgSrc" :alt="imgAlt" />
    </div>
  </div>

  <div v-if="type === 'service'" class="card" :class="className">
    <div class="card-service__content">
      <myIcon :name="icon" size="big" bg="orange" />
      <h4>{{ title }}</h4>

      <p v-if="des">{{ des }}</p>
      <p v-else><slot /></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes animImg {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(10deg);
  }

  75% {
    transform: rotate(-10deg);
  }
}

.card {
  &.-produit-big {
    max-width: 500px;
    min-width: 335px;
    aspect-ratio: 1/1;
    border-radius: 35px;
    background: $color-white;
    overflow: hidden;
    box-shadow: 0 2px 30px rgba($color-gray, 40%);

    .card__img {
      width: 100%;
      height: 65%;
      object-fit: contain;
      overflow: hidden;

      img {
        transition: all ease-in-out 0.5s;
      }
    }

    &:hover .card__img img {
      transform: scale(1.1);
    }

    .card__content {
      display: flex;
      justify-content: space-between;
      align-items: start;
      margin: 0 32px;

      &-gauche {
        > :nth-child(n) {
          margin-top: 16px;
        }
      }

      &-droit {
        text-align: right;

        > :nth-child(n) {
          margin-top: 25px;
        }

        .card__note {
          @include p2;
          display: flex;
          justify-content: right;
          align-items: center;
          gap: 10px;
        }
      }
    }
  }

  &.-produit-small {
    position: relative;
    max-width: 300px;
    min-width: 200px;
    aspect-ratio: 2/3;
    z-index: 0;

    .card__bg {
      position: absolute;
      z-index: 0;
      bottom: 0;
      display: grid;
      place-items: end;
      width: 100%;
      height: 80%;
      background: $color-white;
      border-radius: 30px;
      box-shadow: 0px 0px 20px 0px rgba($color-gray, 50%);
    }

    .card__img {
      width: 90%;
      margin: auto;
      object-fit: contain;
      overflow: hidden;
      filter: drop-shadow(0 8px 8px $color-gray);
    }

    &:hover .card__img {
      animation: animImg 2s 0s linear infinite;
    }

    .card__content {
      text-align: center;
      margin: 15% auto;

      > * + * {
        margin: 11px;
      }

      .card__content__des {
        z-index: 10;
        @include p1;
      }

      .card__content__prix {
        z-index: 10;
        @include h5;

        &::before {
          content: '$ ';
          color: #d92f26;
        }
      }
    }

    .card__buttons {
      position: absolute;
      bottom: -20px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15%;

      > * {
        cursor: pointer;
      }
    }
  }

  &.-service {
    display: grid;
    place-items: center;
    max-width: 500px;
    min-width: 335px;
    min-height: fit-content;
    padding: 52px;
    background: $color-white;
    border-radius: 35px;
    overflow: hidden;
    text-align: center;
    border: 1px solid $color-gray;
    transition: all 0.5s ease-in-out;

    &:hover {
      border: transparent 1px solid;
      box-shadow: 0 2px 30px rgba($color-gray, 60%);
    }

    :nth-child(n) {
      margin: 21px auto;
    }
  }
}
</style>

<script setup>
import { computed } from 'vue'

import myIcon from '@/components/elements/myIcon.vue'
import myButton from '@/components/elements/myButton.vue'

const props = defineProps({
  type: String,
  title: String,

  imgSrc: String,
  imgAlt: String,

  prix: String,
  note: String,

  icon: String,
  des: String,

})

const className = computed(() => ({
  ' -produit-big': props.type === 'produit-big',
  ' -produit-small': props.type === 'produit-small',
  ' -service': props.type === 'service'
}))
</script>
