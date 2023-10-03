<template>
    <header class="header">
        <a class="header__logo" href="/">
            <img src="/Logo.png" alt="Logo de 'FOOD'">
        </a>

        <myHeaderMenu/>
        <myHeaderSearch/>

    </header>
</template>

<style lang="scss" scoped>
.header{
    position: sticky;
    top: 0;
    padding: 15px 0;
    background: $color-white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo{
        display: block;
        width: 100px;
    }
}
</style>

<script setup>
import myHeaderMenu from "@/components/elements/myHeaderMenu.vue"
import myHeaderSearch from "@/components/elements/myHeaderSearch.vue"
</script>