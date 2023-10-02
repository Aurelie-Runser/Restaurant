<template>
    <a v-if="href" :href="href" class="button" :class="className">
        <slot></slot>
        <myIcon v-if="icon" class="button-icon" name="chevron" size="medium" bg="blanc-orange"/>
    </a>

    <button v-else class="button" :class="className">
        <slot></slot>
        <myIcon v-if="icon" class="button-icon" name="chevron" size="medium" bg="blanc-orange"/>
    </button>
</template>

<style lang="scss" scoped>
.button {
    background-color: $color-main;
    background: linear-gradient(lighten($color-main, 15%), $color-main);
    border: none;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: inline-block;
    color: $color-white;
    font-family: $font;
    font-size: $font_size-regular;
    font-weight: $font_weight-semibold;
    padding: 33px 67px;
    text-decoration: none;
    word-wrap: break-word;

    &.-rounded {
        background: $color-main;
        border-radius: 50px;
        font-weight: $font_weight-medium;
        padding: 26px 64px;
    }
  
    &.-small {
        padding: 14px 29px;
        background: $color-main;
        font-size: $font_size-small;
        font-weight: $font_weight-regular;
    }

    &.-icon{
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 20px;
    }

}
</style>

<script setup>
import { computed } from 'vue'
import myIcon from "@/components/elements/myIcon.vue"

const props = defineProps({
    href: String,
    size: String,
    variant: String,
    icon: String
})

const className = computed(() => ({
    ' -rounded': props.variant === 'rounded',
    ' -small': props.size === 'small',
    ' -icon': props.icon === 'true'
}))


</script>