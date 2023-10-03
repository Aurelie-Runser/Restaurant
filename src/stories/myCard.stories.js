import myCard from "@/components/myCard.vue"

export default {
    title: "components/myCard",
    component: myCard,
    argTypes: {
        imgSrc:{
            control: "text",
        },
        imgAlt:{
            control: "text",
        },
        title:{
            control: "text",
        },
        buttonTxt:{
            control: "text",
        },
        note:{
            control: "text",
        },
        prix:{
            control: "text",
        },
        border:{
            control: "select",
            options: ["none", "border", "shadow"]
        },
    }
}

export const TertiairButton = {
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
        imgSrc: "https://placewaifu.com/image/300",
        imgAlt: "mon image",
        title: "Green Beans",
        buttonTxt: "Add To Cart",
        note: "4.9",
        prix: "15.00",
        border: "shadow"
    }
}
