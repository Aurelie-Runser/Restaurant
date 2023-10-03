<template>
    <div class="card">
        <div class="card__img">
            <img :src="imgSrc" :alt="imgAlt" />
        </div>

        <div class="card__content">
            <div class="card__title">
                <h2>{{title}}</h2>
            </div>

            <div class="card__description">
                <p>{{description}}</p>
            </div>

            <div class="card__button">
                <myButton variant="rounded" size="small">{{buttonLab}}</myButton>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.card{
    max-width: 500px;
    min-width: 400px;
    max-height: 500px;
    min-height: 400px;
    border: 1px solid $color-gray;
    border-radius: 20px;
    overflow: hidden;

    &__content{
        margin: 5%;

        > * + *{
            margin-top: 20px;
        }


    }
    
    &__img{
        width: 100%;
        height: 300px;
        object-fit: contain;
        overflow: hidden;
    }

    &__button{
        text-align: center;
    }

}
</style>

<script setup>
import myButton from "@/components/elements/myButton.vue"

const props = defineProps({
    title: String,
    description: String,
    buttonLab: String,
    imgSrc: String,
    imgAlt: String
})

</script>