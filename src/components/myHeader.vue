<template>
    <header class="header">
        <div class="header__content">
            <a class="header__content__logo" href="/">
                <img src="/Logo.png" alt="Logo de 'FOOD'">
            </a>
    
            <myHeaderMenu/>
            <myHeaderSearch/>
        </div>
    </header>
</template>

<style lang="scss" scoped>

.header{
    position: sticky;
    top: 0;
    display: block;
    width: 100vw;
    margin-top: 15px;
    background: $color-white;
    
    .header__content{
        max-width: 85vw;
        margin: auto;
        padding: 15px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    
        &__logo{
            display: block;
            width: 100px;
        }
    }
}
</style>

<script setup>
import myHeaderMenu from "@/components/elements/myHeaderMenu.vue"
import myHeaderSearch from "@/components/elements/myHeaderSearch.vue"
</script>