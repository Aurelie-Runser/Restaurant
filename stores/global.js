import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    count: 0,
    cart: [],
  }),
  actions: {
    increment() {
      this.count++
    },

    // vérifie et prend les données enregistéesr dans le panier stocké en local s'il y en a
    setCart(ids){
      if (ids || Array.isArray(ids)){
        this.cart = ids
        this.count = this.cart.length
      } else {
        this.cart = []
      }
    },

    // ajoute une valeur au panier
    addToCart(id) {
      if (!this.cart.includes(id)){
          this.cart.push(id)
          this.count = this.cart.length
          localStorage.setItem('monPanier', JSON.stringify(this.cart))
      }
    },

    // retire une valeur au panier
    removeFromCart(id){
      // vérifie que la recette à retirer est présente dans le tableau cart
      if (this.cart.includes(id)){
          const index = (i) => i === id
          const indexsup = this.cart.findIndex(index)
          this.cart.splice(indexsup, 1)
          this.count = this.cart.length

          if (this.count === 0){
            localStorage.removeItem("monPanier");
          } else {
            localStorage.setItem('monPanier', JSON.stringify(this.cart))
          }
      }
    }
  },
});
