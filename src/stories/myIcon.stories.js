import myIcon from "@/components/elements/myIcon.vue"

export default {
    title: "elements/myIcon",
    component: myIcon,
    argTypes: {
        name:{
            control: "select",
            options:["camion", "chevron", "couverts", "couvertsCroises", "etoile", "facebook", "fleche", "heure", "instagram", "linkedin", "loupe", "phone", "ping", "play", "sac", "twitter"],
        },
        direction:{
            control: "select",
            options:["default", "gauche"],
        },
        size:{
            control: "select",
            options:["small", "medium", "big"],
        },
        bg:{
            control: "select",
            options:["none", "black", "white", "orange", "orange-blanc", "blanc-orange"],
        },
        etoile:{
            control: "select",
            options:["vide", "pleine"],
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
        direction: "default",
        size: "small",
        bg: "none",
        etoile: "vide"
    }
}

