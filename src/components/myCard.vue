<template>
    <div class="card" :class="className">
        <div class="card__img">
            <img :src="imgSrc" :alt="imgAlt" />
        </div>

        <div class="card__content">
            <div class="card__content-gauche">
                <div class="card__title">
                    <h4>{{title}}</h4>
                </div>
    
                <div class="card__button">
                    <myButton variant="rounded" size="small">{{buttonTxt}}</myButton>
                </div>
            </div>

            <div class="card__content-droit">
                <div class="card__note">
                    <myIcon name="etoile" etoile="pleine" size="small" />
                    <p>{{note}}</p>
                </div>
    
                <div class="card__prix">
                    <p>${{prix}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card{
    max-width: 500px;
    min-width: 400px;
    height: 485px;
    border-radius: 20px;
    overflow: hidden;

    &.-border{
        border: 1px solid $color-gray;
    }

    &.-shadow{
        box-shadow: 0px 2px 30px 0px rgba($color-gray, 60%);
    }

    &__img{
        width: 100%;
        height: 333px;
        object-fit: contain;
        overflow: hidden;
    }

    &__content{
        display: flex;
        justify-content: space-between;
        align-items: start;
        margin: 0 32px;
        
        &-gauche{

            > :nth-child(n) {
                margin-top: 16px;
            }
            .card__title{
                font-size: $font_size-regular;
                font-weight: $font_weight-bold;
            }
        }
        
        &-droit{
            text-align: right;

            > :nth-child(n) {
                margin-top: 25px;
            }

            .card__note{
                display: flex;
                justify-content: space-around;
                align-items: center;
                gap: 10px;
            }

            .card__prix{
                font-size: $font_size-litle;
                font-weight: $font_weight-medium;
            }
        }
    }
}
</style>

<script setup>
import { computed } from 'vue'

import myIcon from "@/components/elements/myIcon.vue"
import myButton from "@/components/elements/myButton.vue"

const props = defineProps({
    imgSrc: String,
    imgAlt: String,
    title: String,
    buttonTxt: String,
    note: String,
    prix: String,

    border: String
})

const className = computed(() => ({
    ' -shadow': props.border === 'shadow',
    ' -border': props.border === 'border'
}))


</script>