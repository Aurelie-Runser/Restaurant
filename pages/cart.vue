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
          <myButton @click="ACHATS = !ACHATS">Buy</myButton>
          <myButton size="small" @click="VIDE_CART = !VIDE_CART">Empty my cart</myButton>
        </div>
      </div>

      <!-- popup si achat -->
      <div class="panier__popup" v-if="ACHATS">
        <p class="popup__title">Do you really want to buy these recipes?</p>
        <MyButton variant="rounded" @click="(CONFIRME_ACHATS = !CONFIRME_ACHATS) && (ACHATS = !ACHATS)">Yes</MyButton>
        <MyButton variant="rounded" size="small" @click="ACHATS = !ACHATS">No</MyButton>
      </div>
      
      <!-- popup si confirmation d'achat -->
      <div class="panier__popup" v-if="CONFIRME_ACHATS">
        <p class="popup__title">Your transaction has been successfully processed.</p>
        <MyButton variant="rounded" @click="store.emptyCart()">Okay</MyButton>
      </div>

      <!-- popup si vider le panier -->
      <div class="panier__popup" v-if="VIDE_CART">
        <p class="popup__title">Do you really want to empty your cart?</p>
        <MyButton variant="rounded" @click="VIDE_CART = !VIDE_CART">No</MyButton>
        <MyButton variant="rounded" size="small" @click="store.emptyCart()">Yes</MyButton>
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

  .panier__popup {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 60px;
    border: 2px solid $color-main;
    background: $color-white;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .popup__title {
      @include h4;
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

// variables pour afficher ou non les popups
const ACHATS = ref(false)
const CONFIRME_ACHATS = ref(false)
const VIDE_CART = ref(false)

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
