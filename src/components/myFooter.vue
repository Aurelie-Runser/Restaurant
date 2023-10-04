<template>
  <footer class="footer">
    <myFooterMenu v-for="menu in menuFooter" :key="menu" v-bind="menu"/>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  width: 100vw;
  height: fit-content;
  padding: 57px 0;
  background: rgba($color-gray, 10%);
  display: flex;
  justify-content: space-evenly;
}
</style>

<script setup>
import myFooterMenu from "@/components/elements/myFooterMenu.vue"

const menuFooter = [
    {
        title:"MON TITRE",
        liens:[
            {txt: "TESTEE", href: "#"},
            {txt: "item sup", href: "/lien2"}
        ]
    },
    {
        title:"Opening Restaurant",
        liens:[
            {txt: "Sat-Wet: 09:00am-10:00PM", href: ""},
            {txt: "Thursdayt: 09:00am-11:00PM", href: ""},
            {txt: "Friday: 09:00am-8:00PM", href: ""}
        ]
    }
]
</script>
