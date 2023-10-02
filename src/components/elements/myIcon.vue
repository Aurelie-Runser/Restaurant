<template>
    <i class="icon" :class="className">
        <component :is="getIcon"/>
    </i>
</template>
  
<style lang="scss" scoped>
.icon{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    stroke: $color-black;
    fill: $color-black;

    &.-direction-gauche{
        transform: rotate(180deg);
    }

    &.-size{

        &.-small{
            height: 20px;
            width: 20px;
            padding: 1%;
        }
    
        &.-medium{
            height: 22px;
            width: 22px;
            padding: 10px;
        }
    
        &.-big{
            height: 78px;
            width: 78px;
            padding: 20px;
        }
    }


    &.-bg{
        &.-black{
            background-color: $color-black;
            stroke: $color-white;
            fill: $color-white;
        }
        
        &.-white{
            background-color: $color-white;
        }
        
        &.-orange{
            background-color: $color-main_light;
            stroke: $color-main;
            fill: $color-main;
        }
        
        &.-orange-blanc{
            background-color: $color-main;
            stroke: $color-white;
            fill: $color-white;
        }
        
        &.-blanc-orange{
            background-color: $color-white;
            stroke: $color-main;
            fill: $color-main;
        }
    }

    &.-shadow{
        box-shadow: 0 0 10px $color-gray;
    }

    &.-etoile{
        
        &.-vide{
            stroke: $color-black;
            fill: none;
        }
        
        &.-pleine{
            stroke: $color-main;
            fill: $color-main;
        }
    }
}
</style>
  
<script setup>
import { computed } from 'vue'

import camionIcon from '@/components/icons/camionIcon.vue'
import chevronIcon from '@/components/icons/chevronIcon.vue'
import couvertsCroisesIcon from '@/components/icons/couvertsCroisesIcon.vue'
import couvertsIcon from '@/components/icons/couvertsIcon.vue'
import etoileIcon from '@/components/icons/etoileIcon.vue'
import facebookIcon from '@/components/icons/facebookIcon.vue'
import flecheIcon from '@/components/icons/flecheIcon.vue'
import heureIcon from '@/components/icons/heureIcon.vue'
import instagramIcon from '@/components/icons/instagramIcon.vue'
import linkedinIcon from '@/components/icons/linkedinIcon.vue'
import loupeIcon from '@/components/icons/loupeIcon.vue'
import phoneIcon from '@/components/icons/phoneIcon.vue'
import pingIcon from '@/components/icons/pingIcon.vue'
import playIcon from '@/components/icons/playIcon.vue'
import sacIcon from '@/components/icons/sacIcon.vue'
import twitterIcon from '@/components/icons/twitterIcon.vue'

const props = defineProps({
    name: String,
    direction: String,
    size: String,
    bg: String,
    shadow: String,
    etoile: String
})

const getIcon = computed(() => {
    switch (props.name) {
        case 'camion':
            return camionIcon
        case 'chevron':
            return chevronIcon
        case 'couverts':
            return couvertsIcon
        case 'couvertsCroises':
            return couvertsCroisesIcon
        case 'etoile':
            return etoileIcon
        case 'facebook':
            return facebookIcon
        case 'fleche':
            return flecheIcon
        case 'heure':
            return heureIcon
        case 'instagram':
            return instagramIcon
        case 'linkedin':
            return linkedinIcon
        case 'loupe':
            return loupeIcon
        case 'phone':
            return phoneIcon
        case 'ping':
            return pingIcon
        case 'play':
            return playIcon
        case 'sac':
            return sacIcon
        case 'twitter':
            return twitterIcon
    }
})

const className = computed(() => ({
  ' -direction-gauche': props.direction === 'gauche',

  ' -size -small': props.size === 'small',
  ' -size -medium': props.size === 'medium',
  ' -size -big': props.size === 'big',

  ' -bg -black': props.bg === 'black',
  ' -bg -white': props.bg === 'white',
  ' -bg -orange': props.bg === 'orange',
  ' -bg -orange-blanc': props.bg === 'orange-blanc',
  ' -bg -blanc-orange': props.bg === 'blanc-orange',

  ' -shadow': props.shadow === 'true',

  ' -etoile -pleine': props.etoile === 'pleine',
  ' -etoile -vide': props.etoile === 'vide',
  ' -etoile -none': props.etoile === 'none'
}))
</script>