<script setup>
import myButton from "@/components/elements/myButton.vue"
</script>

<template>
  <main>
    <h1>Guide de Style</h1>

    <section>
      <h2>Boutons</h2>
      <myButton>Hello World</myButton>
      <myButton variant="rounded">Hello World</myButton>
      <myButton size="small">Hello World</myButton>
      <myButton variant="rounded" size="small">Hello World</myButton>
    </section>
  </main>
</template>
