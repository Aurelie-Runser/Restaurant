<template>
  <div class="header__search">
    <div class="header__search__input">
      <div class="input__icon">
        <myIcon name="loupe" size="small"/>
      </div>
      <input type="text" size="15" placeholder="Search">
    </div>
        
    <span class="header__search__separation"></span>

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

        > * {
            display: inline-block;
            padding: 20px;
        }

        input{
            @include p1;
            border: none;
            padding-left: 5px;
            
            &:focus{
                outline: solid 3px $color-main;
            }

            &::placeholder{
                @include h5;
                color: $color-black;
            }
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
import { useGlobalStore } from "@/stores/global.js"
const store = useGlobalStore()
</script>