import myIcon from "@/components/elements/myIcon.vue"

export default {
    title: "elements/myIcon",
    component: myIcon,
    argTypes: {
        name:{
            control: "select",
            options:["camion", "chevron", "couverts", "couvertsCroises", "etoile", "facebook", "fleche", "heure", "instagram", "linkedin", "loupe", "phone", "ping", "play", "sac", "twitter"],
        },
    }
}

export const PrimaryIcon = {
    render: (args) => {
        return{
            components: {
                myIcon
            },
            setup(){
                return {args}
            },
            template: `<myIcon v-bind="args" />`
        }
    },
    args:{
        name: "camion",
    }
}

