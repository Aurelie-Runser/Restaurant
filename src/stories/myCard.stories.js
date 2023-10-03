import myCard from "@/components/myCard.vue"

export default {
    title: "components/myCard",
    component: myCard,
    argTypes: {
        type:{
            control: "select",
            options: ["services", "produit-big", "produit-small"]
        },

        imgSrc:{
            control: "text",
        },
        imgAlt:{
            control: "text",
        },
        title:{
            control: "text",
        },

        prix:{
            control: "text",
            table: {
                category: "Produit",
            }
        },

        note:{
            control: "text",
            table: {
                category: "Produit Big",
            }
        },
        buttonTxt:{
            control: "text",
            table: {
                category: "Produit Big",
            }
        },
        
        descriptionCourte:{
            control: "text",
            table: {
                category: "Produit Small",
            }
        },
    }
}

export const ProduitBigCard = {
    render: (args) => {
        return{
            components: {
                myCard
            },
            setup(){
                return {args}
            },
            template: `<myCard v-bind="args"/>`
        }
    },
    args:{
        type: "produit-big",
        imgSrc: "https://placewaifu.com/image/500",
        imgAlt: "mon image",
        title: "Green Beans",
        buttonTxt: "Add To Cart",
        note: "4.9",
        prix: "15.00",
    }
}

export const ProduitSmallCard = {
    render: (args) => {
        return{
            components: {
                myCard
            },
            setup(){
                return {args}
            },
            template: `<myCard v-bind="args"/>`
        }
    },
    args:{
        type: "produit-small",
        imgSrc: "https://placewaifu.com/image/300",
        imgAlt: "mon image",
        title: "Burger",
        descriptionCourte: "Mushroom Sauce"?
        prix: "5.15"
    }
}
