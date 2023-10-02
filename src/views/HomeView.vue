<template>
  <main>
    <h1>Guide de Style</h1>

    <section>
      <h2>Icons</h2>
      <myIcon name="camion"/>
      <myIcon name="chevron"/>
      <myIcon name="couverts"/>
      <myIcon name="couvertsCroises"/>
      <myIcon name="etoile"/>
    </section>

    <section>
      <h2>Boutons</h2>
      <myButton>Hello World</myButton>
      <myButton variant="rounded">Hello World</myButton>
      <myButton size="small">Hello World</myButton>
      <myButton variant="rounded" size="small">Hello World</myButton>
    </section>
  </main>
</template>

<script setup>
import myButton from "@/components/elements/myButton.vue"
import myIcon from "@/components/elements/myIcon.vue"
</script>
