import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => ({
    count: 0,
    cart: [],
  }),
  actions: {
    increment() {
      this.count++;
    },
    addToCart(id) {
        if (!this.cart.includes(id)){
            this.cart.push(id)
        }
        this.count = this.cart.length
    },
    removeFromCart(id){
        if (this.cart.includes(id)){
            const index = (i) => i === id;
            const indexsup = this.cart.findIndex(index);
            this.cart.splice(indexsup, 1)
        }
        this.count = this.cart.length

    }
  },
});
