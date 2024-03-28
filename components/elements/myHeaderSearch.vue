<template>
  <div class="header__search">
    <div class="header__search__input">
      <div class="input__icon">
        <myIcon name="loupe" size="small" @click="filtreRecettes"/>
      </div>
      <input type="text" size="15" placeholder="Search" v-model="RecetteChercher" @blur="handleDelayedBlur">

      <!-- liste des recettes rechercher -->
      <ul class="input__resultat-liste" v-if="RecetteChercher != 0">
        <li class="input__resultat-item" v-for="recette in filtreRecette" :key="recette.id">
          <a :href="`/recettes/${recette.recipe_id}`">{{ recette.title }}</a>
        </li>
      </ul>
    </div>

    <span class="header__search__separation"></span>

    <!-- panier -->
    <a href="/cart" class="header__search__panier">
      <div class="panier__notif" v-if="store.count">{{ store.count }}</div>
      <div class="panier__icon">
        <myIcon name="sac" size="small"/>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.header__search{
    display: flex;
    align-items: center;
    justify-content: right;
    width: fit-content;
    height: fit-content;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba($color-gray, 50%);

    &__input{
      width: max-content;
      position: relative;

      > * {
          display: inline-block;
          padding: 20px;
      }

      input{
        @include p1;
        border: none;
        padding-left: 5px;
        
        &:focus{
            outline: solid 2px $color-main;
        }
        
        &::placeholder{
            @include h5;
            color: $color-black;
        }
      }

      .input__resultat-liste{
        position: absolute;
        top: 110%;
        left: 0;
        width: 100%;
        background: $color-white;
        border-radius: 15px;
        box-shadow: 0 5px 10px rgba($color-gray, 50%);
        line-height: 200%;
      }
    }

    &__separation{
        display: block;
        height: 37px;
        width: 1px;
        background-color: $color-gray;
    }

    &__panier{
        position: relative;
        margin: 21px 32px;

        .panier__notif{
            @include p2;
            position: absolute;
            top: -50%;
            right: -50%;
            width: 20px;
            height: 20px;
            padding: 3px;
            border-radius: 100%;
            background: $color-main;
            box-shadow: 0 0 22px rgba($color-main, 100%);
            text-align: center;
            color: $color-white;
        }
    }
}
</style>

<script setup>
// import de la fonction global pour ajouter/retirer une recette du panier
import { useGlobalStore } from "@/stores/global.js"
const store = useGlobalStore()

// fonctions pour rechercher une recette dans la base de donnée

const env = useRuntimeConfig()

const {data: recettes} = await useAsyncData("recettes", async () => {
  return $fetch(env.public.apiRecetteUrl + "/recipes")
})

// ne fait la recerche que sur les recettes où il y a une page (pas les 4premiere afficher dans le hero)
const recettesLiens = computed(() => {
  if (recettes.value){
    return recettes.value.slice(4)
  } else{
    return []
  }
})

// fonction qui filtre les recettes
const RecetteChercher = ref('');
const filtreRecettes = () => {
  return recettesLiens.value.filter(recette =>
    recette.title.toLowerCase().includes(RecetteChercher.value.toLowerCase())
  );
};

// fonction pour vider le champs texte lorsque l'utilisateur clique autre pars
const handleDelayedBlur = () => {
  setTimeout(() => {
    RecetteChercher.value = '';
  }, 500);
};

// appelle la fonction de filtre à chaque fois que le composant est chargé
const filtreRecette = computed(() => {
  return filtreRecettes();
});
</script>