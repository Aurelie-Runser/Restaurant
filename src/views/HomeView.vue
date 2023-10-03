<template>
  <main>
    <h1>Guide de Style</h1>

    <section>
      <h2>Icons</h2>
      <myIcon name="camion" size="medium"/>
      <myIcon name="chevron" size="medium" bg="orange-blanc" shadow="true"/>
      <myIcon name="couverts" size="medium" bg="orange" shadow="true"/>
      <myIcon name="couvertsCroises" size="medium" bg="white" shadow="true"/>
      <myIcon name="etoile" size="medium" bg="black" shadow="true"/>
    </section>

    <section>
      <h2>Boutons</h2>
      <myButton>Hello World</myButton>
      <myButton variant="rounded">Hello World</myButton>
      <myButton variant="rounded" icon="true">Hello World</myButton>
      <myButton size="small">Hello World</myButton>
      <myButton variant="rounded" size="small">Hello World</myButton>
    </section>

    <section>
      <h2>Card</h2>
      <myCard type="produit-small" imgSrc="/Burger.png" title="Hello" descriptionCourte="LALALLA" prix="5.00"/>
      <myCard type="produit-small" imgSrc="/Cake.png" title="Hello" descriptionCourte="LALALLA" prix="5.00"/>
      <myCard type="produit-small" imgSrc="/Pizza.png" title="Hello" descriptionCourte="LALALLA" prix="5.00"/>
      <myCard type="produit-small" imgSrc="/FoodCombo.png" title="Hello" descriptionCourte="LALALLA" prix="5.00"/>
    </section>
  </main>
</template>

<script setup>
import myIcon from "@/components/elements/myIcon.vue"
import myButton from "@/components/elements/myButton.vue"
import myCard from "@/components/myCard.vue"
</script>
