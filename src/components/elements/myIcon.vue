<template>
    <i class="icon">
        <component :is="getIcon" />
    </i>
</template>
  
<style lang="scss" scoped>
.icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    padding: 1%;
    border-radius: 100%;
    background: $color-white;
    box-shadow: 0 0 5px $color-gray;
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
    name: String
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
</script>