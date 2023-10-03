import myCard from "@/components/myCard.vue"

export default {
    title: "components/myCard",
    component: myCard,
    argTypes: {
        title:{
            control: "text",
        },
        description:{
            control: "text",
        },
        imgSrc:{
            control: "text",
        },
        imgAlt:{
            control: "text",
        },
        buttonLab:{
            control: "text",
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
        title: "Ma Card",
        description: "Ceci est une card.",
        imgSrc: "https://placewaifu.com/image/300",
        imgAlt: "mon image",
        buttonLab: "clique ici"
    }
}
