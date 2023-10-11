<template>
  <div>
    <div class="mainbody">
      <myHero />
      <myCard type="service" icon="camion" title="Mon title"
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta quasi
        quas magni commodi ullam atque exercitationem. Consequatur ab in
        accusantium dolorum labore alias rem quibusdam exercitationem! Libero id
        quaerat dolore.</myCard
      >
      <myCard
        type="produit-big"
        lien="burger"
        imgSrc="/Burger.png"
        title="Burger"
        prix="77.00"
        note="5.1"
      />

      <myCard type="produit-small" title="teste petit">Teste</myCard>

      <myButton size="medium" rounded="rounded">Hello</myButton>

      <myEmail size="big" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup></script>
