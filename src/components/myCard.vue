<template>
    <div v-if="type === 'produit-big'" class="card" :class="className">
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
    <div v-if="type === 'produit-small'" class="card" :class="className">
        <div class="card__bg"></div>

        <div class="card__img">
            <img :src="imgSrc" :alt="imgAlt" />
        </div>

        <div class="card__content">
            <h4>{{ title }}</h4>
            <p class="card__content__des">{{ descriptionCourte }}</p>
            <p class="card__content__prix">{{ prix }}</p>
        </div>

        <div class="card__buttons">
            <myIcon name="fleche" size="medium" bg="black"/>
            <myIcon name="fleche" size="medium" bg="white" direction="gauche"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card{

    &.-border{
        border: 1px solid $color-gray;
    }

    &.-produit-big{
        max-width: 500px;
        min-width: 400px;
        height: 485px;
        border-radius: 20px;
        box-shadow: 0px 2px 30px 0px rgba($color-gray, 60%);
        overflow: hidden;

        .card__img{
            width: 100%;
            height: 333px;
            object-fit: contain;
            overflow: hidden;
        }
    
        .card__content{
            display: flex;
            justify-content: space-between;
            align-items: start;
            margin: 0 32px;
            
            &-gauche{
    
                > :nth-child(n) {
                    margin-top: 16px;
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

    &.-produit-small{
        position: relative;
        max-width: 270px;
        min-width: 250px;
        height: 380px;

        .card__bg{
            position: absolute;
            z-index: -1;
            bottom: 0;
            width: 100%;
            height: 275px;
            background: $color-white;
            border-radius: 30px;
            box-shadow: 0px 0px 31px 0px rgba($color-gray, 80%);
        }

        .card__img{
            width: 90%;
            aspect-ratio: 1/1;
            margin: auto;
            object-fit: contain;
            overflow: hidden;
        }
    
        .card__content{
            text-align: center;
            margin: 24px auto;

            > * + * {
                margin: 11px;
            }

            .card__content__des{
                font-size: $font_size-litle;
                font-weight: $font_weight-medium;
            }

            .card__content__prix{
                font-size: $font_size-litle;
                font-weight: $font_weight-semibold;

                &::before{
                    content: "$";
                    color: #d92f26;
                }
            }
        }

        .card__buttons{
            position: absolute;
            bottom: -20px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15%;
        }
    }

}
</style>

<script setup>
import { computed } from 'vue'

import myIcon from "@/components/elements/myIcon.vue"
import myButton from "@/components/elements/myButton.vue"

const props = defineProps({
    type: String,
    title: String,

    imgSrc: String,
    imgAlt: String,

    prix: String,
    buttonTxt: String,
    note: String,

    descriptionCourte: String
})

const className = computed(() => ({
    ' -produit-big': props.type === 'produit-big',
    ' -produit-small': props.type === 'produit-small',
}))


</script>