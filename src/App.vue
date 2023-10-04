<script setup>
import { RouterView } from 'vue-router'

import myHeader from "@/components/myHeader.vue"
import myFooter from "@/components/myFooter.vue"
</script>

<template>
    <myHeader/>
    <myFooter/>
    <RouterView />
</template>