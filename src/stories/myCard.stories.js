import myCard from "@/components/myCard.vue"

export default {
    title: "components/myCard",
    component: myCard,
    argTypes: {
        type:{
            control: "select",
            options: ["service", "produit-big", "produit-small"]
        },
        title:{
            control: "text",
        },
        border:{
            control: "select",
            options: ["none", "border", "shadow"]
        },

        imgSrc:{
            control: "text",
            table: {
                category: "Produit",
            }
        },
        imgAlt:{
            control: "text",
            table: {
                category: "Produit",
            }
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
        
        descriptionLong:{
            control: "text",
            table: {
                category: "Service",
            }
        },
        
        icon:{
            control: "select",
            options: ["couverts", "couvertsCroises", "camion"],
            table: {
                category: "Service",
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
        border: "shadow",
        imgSrc: "https://placewaifu.com/image/500",
        imgAlt: "mon image",
        title: "Green Beans",
        buttonTxt: "Add To Cart",
        note: "4.9",
        prix: "15.00",
    }
}

export const ProduitSmallCard = {
    ...ProduitBigCard,
    args:{
        type: "produit-small",
        border: "none",
        imgSrc: "https://placewaifu.com/image/300",
        imgAlt: "mon image",
        title: "Burger",
        descriptionCourte: "Mushroom Sauce",
        prix: "5.15"
    }
}

export const ServiceCard = {
    ...ProduitBigCard,
    args:{
        type: "service",
        border: "border",
        icon: "couverts",
        title: "Healthy Food",
        descriptionLong: "But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron."
    }
}