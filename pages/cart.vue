<template>
  <div class="mainbody page-panier">
    <h1 class="page-panier__title">My Cart</h1>

    <!-- textes et boutons à afficher si le panier est vide-->
    <div class="page-panier__vide" v-if="store.count == 0">
      <p>You have no recipes in your cart.</p>

      <a href="/recettes">
        <myButton>Add recipes</myButton>
      </a>
    </div>

    <!-- textes, grid et boutons à afficher si le panier n'est pas vide-->
    <div v-if="store.count != 0">
      <myGridCards
        class="page-panier__grid"
        typeGrid="big"
        :gridCards="gridProduitsPanier"
      />

      <hr class="page-panier__ligne" />

      <div class="page-panier__caisse">
        <p class="caisse__prix">
          Prix total :
          <span class="caisse__prix-valeur">$ {{ prixTotal }}</span>
        </p>

        <div class="caisse__boutons">
          <myButton @click="store.emptyCart()">Buy</myButton>
          <myButton size="small" @click="store.emptyCart()">Empty my cart</myButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-panier {
  margin-bottom: 135px;

  &__title {
    margin: 60px 0;
  }

  &__vide {
    text-align: center;

    p {
      margin: 60px 0;
    }
  }

  &__ligne {
    margin: 60px 0;
    color: $color-main;
  }

  &__caisse {
    margin: 0 auto;
    width: fit-content;
    display: flex;
    align-items: start;
    gap: 120px;

    .caisse__prix {
      font-size: $font_size-regular;

      &-valeur {
        font-weight: $font_weight-bold;
        color: darken($color-main, 10%);
      }
    }

    .caisse__boutons {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }
  }

  .caisse__popup {
    position: fixed;
    text-align: center;
    padding: 60px;
    border: 2px solid $color-main;
    background: $color-white;
    top: 50%;
    left: 50%;
    transform: translate(-50%);

    .popup__title {
      @include h4;
      margin-bottom: 30px;
    }

    .popup__boutons {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
}
</style>

<script setup>
import myGridCards from "@/components/myGirdCards.vue";

// import des fonctions globales
import { useGlobalStore } from "@/stores/global.js";
const store = useGlobalStore();

// import des variables d'environnement
const env = useRuntimeConfig();

const { data: recettes } = await useAsyncData("recettes", async () => {
  return $fetch(env.public.apiRecetteUrl + "/recipes");
});

// récupération des recette dont l'id est enregistré dans la liste "store.cart"
const gridProduitsPanier = computed(() => {
  if (recettes.value) {
    const recettesInCart = recettes.value.filter((recette) =>
      store.cart.includes(recette.recipe_id)
    );
    return recettesInCart;
  } else {
    return [];
  }
});

// récupération des prix des recettes pour en afficher le total
const prixTotal = computed(() => {
  return gridProduitsPanier.value.reduce(
    (total, recette) => total + recette.prix,
    0
  );
});

useSeoMeta({
  title: "Mon Panier",
  ogTitle: "Mon Panier",
  description: "Mon Panier de recettes.",
  ogDescription: "Mon Panier de recettes."
});
</script>
