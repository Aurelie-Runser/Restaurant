<template>
  <div class="recette">
    <div class="recette__retour">
      <a href="/">
        <myButton size="small">Back home</myButton>
      </a>
    </div>
    <div class="recette__img">
      <img :src="`/img/${recette.imgSrc}`" :alt="`photo de ${recette.title}`" />
    </div>

    <div class="recette__donnees">
      <h1 class="recette__donnees-title">{{ recette.title }}</h1>

      <div class="recette__donnees-rapide">
        <div class="rapide__info">
          <p class="rapide__prix">$ {{ recette.prix }}</p>

          <div class="rapide__note">
            <myIcon name="etoile" size="small" etoile="pleine" />
            <p class="note__txt">
              {{ recette.note }}
            </p>
          </div>
        </div>

        <div class="recette__donnes-button">
          <div v-if="!store.cart.includes(recette.recipe_id)">
            <myButton
              variant="rounded"
              size="default"
              @click="store.addToCart(recette.recipe_id)"
              >add to Cart</myButton
            >
          </div>

          <div v-if="store.cart.includes(recette.recipe_id)">
            <myButton
              variant="rounded"
              size="small"
              @click="store.removeFromCart(recette.recipe_id)"
              >remove to Cart</myButton
            >
          </div>
        </div>
      </div>

      <div class="recette__donnees-donnee">
        <div class="cuisine">
          <span class="donnee__type">Origine : </span>
          <span class="donnee__info">{{ recette.cuisine_name }}</span>
        </div>
        <div class="goal">
          <span class="donnee__type">Goal : </span>
          <span class="donnee__info">{{ recette.goal_name }}</span>
        </div>
        <div class="alergy">
          <span class="donnee__type">Allergies : </span>
          <ul class="donnee__liste">
            <li v-for="al in recette.allergies">{{ al.allergy }}</li>
          </ul>
        </div>
        <div class="diertary">
          <span class="donnee__type">Dietary Info : </span>
          <ul class="donnee__liste">
            <li v-for="di in recette.dietaryInfo">{{ di.dietary_info }}</li>
          </ul>
        </div>
      </div>

      <p class="recette__donnees-des">{{ recette.des }}</p>

      <div class="recette__donnees-ingredients">
        <h2 class="ingredients__title">Ingredients</h2>

        <ul class="ingredients__liste ingredients__liste-entete">
          <li>Name</li>
          <li>Quantity</li>
          <li>Unit</li>
        </ul>
        <ul
          class="ingredients__liste"
          v-for="ingredient in recette.ingredients"
        >
          <li>{{ ingredient.name }}</li>
          <li>{{ ingredient.quantity }}</li>
          <li>{{ ingredient.unit }}</li>
        </ul>
      </div>

      <div class="recette__donnees-instructions">
        <h2 class="instructions__title">Instructions</h2>

        <ol class="instructions__liste">
          <li v-for="etape in recette.instructions">
            {{ etape.StepInstruction }}
          </li>
        </ol>
      </div>
    </div>

    <div class="recette__autres">
      <a :href="`/recettes/${recettePreId}`" v-if="recette.recipe_id != 5">
        <myButton variant="rounded">Recette précédente</myButton>
      </a>
      <a :href="`/recettes/${recetteSuivId}`" v-if="recette.recipe_id != recettesLength">
        <myButton variant="rounded">Recette suivante</myButton>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.recette {
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  max-width: $large5XL;
  margin: auto;

  > * {
    flex: auto;
    min-width: 500px;
  }

  &__retour {
    flex: none;
    width: 100%;
    padding: 20px 5%;
  }

  &__img {
    width: 40vw;
    max-width: $medium;
    margin: 0 auto;

    img {
      position: sticky;
      top: 25%;
      width: 80%;
      margin: 5% 10%;
      border-radius: 30px;
      box-shadow: 0 0 15px 5px lighten($color-gray, 15%);
    }
  }

  &__donnees {
    width: 50%;
    padding: 0 5%;

    &-rapide {
      @include h5;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;

      .rapide__info {
        display: flex;
        align-items: center;
        gap: 30px;

        .rapide__note {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
        }
      }
    }

    &-donnee {
      margin: 50px 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: flex-start;
      gap: 30px;

      .donnee__type {
        font-weight: $font_weight-regular;
      }

      .alergy,
      .diertary {
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: flex-start;
        gap: 0.25rem;
      }

      .donnee__info,
      .donnee__liste {
        font-weight: $font_weight-semibold;
        display: inline-block;
      }
    }

    &-des {
      margin: 30px 0;
      padding: 20px;
      background-color: $color-main_light;
    }

    &-ingredients {
      margin: 60px 0;

      .ingredients__title {
        margin-bottom: 20px;
      }

      .ingredients__liste {
        margin: 10px 0;
        display: grid;
        grid-template-columns: 1fr 0.75fr 1fr;

        &-entete {
          color: $color-main;
        }
      }
    }

    &-instructions {
      .instructions__title {
        margin-bottom: 20px;
      }

      .instructions__liste {
        list-style: decimal;
      }
    }
  }

  &__autres {
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 10px;
  }
}
</style>

<script setup>
// import des fonction global pour ajouter/surrpimer du panier les recettes
import { useGlobalStore } from "@/stores/global.js";
const store = useGlobalStore();

// récupération de useRoute pour manipuler les valeurs du lien
const route = useRoute();

// récupération des liens lien systemes
const env = useRuntimeConfig();

const { data: recettes } = await useAsyncData(`recettes`, async () => {
  return $fetch(env.public.apiRecetteUrl + `/recipes`);
});

const { data: recette } = await useAsyncData(`recette`, async () => {
  return $fetch(env.public.apiRecetteUrl + `/recipes/${route.params.id}`);
});

const recettesLength = recettes.value.length;

const recettePreId = recette.value.recipe_id - 1;
const recetteSuivId = recette.value.recipe_id + 1;
</script>
