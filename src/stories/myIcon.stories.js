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
        shadow:{
            control: "boolean",
        },
        etoile:{
            control: "select",
            options:["none", "vide", "pleine"],
        },
    }
}

export const camionIcon = {
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
        size: "medium",
        bg: "none",
        shadow: "false",
        etoile: "none"
    }
}

export const camionOrangeIcon = {
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
        size: "big",
        bg: "orange",
        shadow: "false",
        etoile: "none"
    }
}

export const chevronIcon = {
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
        name: "chevron",
        direction: "default",
        size: "small",
        bg: "none",
        shadow: "false",
        etoile: "none"
    }
}

export const chevronBlancIcon = {
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
        name: "chevron",
        direction: "default",
        size: "medium",
        bg: "white",
        shadow: "true",
        etoile: "none"
    }
}

export const couvertsIcon = {
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
        name: "couverts",
        direction: "default",
        size: "big",
        bg: "none",
        shadow: "false",
        etoile: "none"
    }
}

export const couvertsOrangeIcon = {
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
        name: "couverts",
        direction: "default",
        size: "big",
        bg: "orange",
        shadow: "false",
        etoile: "none"
    }
}

export const couvertsCroisesIcon = {
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
        name: "couvertsCroises",
        direction: "default",
        size: "big",
        bg: "none",
        shadow: "false",
        etoile: "none"
    }
}

export const couvertsCroisesOrangeIcon = {
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
        name: "couvertsCroises",
        direction: "default",
        size: "big",
        bg: "orange",
        shadow: "false",
        etoile: "none"
    }
}

export const etoileVideIcon = {
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
        name: "etoile",
        direction: "default",
        size: "small",
        bg: "none",
        shadow: "none",
        etoile: "vide"
    }
}

export const etoilePleinIcon = {
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
        name: "etoile",
        direction: "default",
        size: "small",
        bg: "none",
        shadow: "none",
        etoile: "pleine"
    }
}

export const facebookIcon = {
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
        name: "facebook",
        direction: "default",
        size: "medium",
        bg: "orange",
        shadow: "none",
        etoile: "none"
    }
}

export const flecheDroitIcon = {
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
        name: "fleche",
        direction: "default",
        size: "small",
        bg: "none",
        shadow: "false",
        etoile: "none"
    }
}

export const flecheGaucheIcon = {
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
        name: "fleche",
        direction: "gauche",
        size: "small",
        bg: "none",
        shadow: "false",
        etoile: "none"
    }
}

export const flecheWhiteDroitIcon = {
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
        name: "fleche",
        direction: "default",
        size: "medium",
        bg: "white",
        shadow: "true",
        etoile: "none"
    }
}

export const flecheWhiteGaucheIcon = {
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
        name: "fleche",
        direction: "gauche",
        size: "medium",
        bg: "white",
        shadow: "true",
        etoile: "none"
    }
}

export const flecheOrangeDroitIcon = {
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
        name: "fleche",
        direction: "default",
        size: "medium",
        bg: "orange-blanc",
        shadow: "true",
        etoile: "none"
    }
}

export const flecheOrangeGaucheIcon = {
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
        name: "fleche",
        direction: "gauche",
        size: "medium",
        bg: "orange-blanc",
        shadow: "true",
        etoile: "none"
    }
}

export const flecheBlackIcon = {
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
        name: "fleche",
        direction: "default",
        size: "medium",
        bg: "black",
        shadow: "true",
        etoile: "none"
    }
}

export const heureIcon = {
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
        name: "heure",
        direction: "default",
        size: "small",
        bg: "none",
        shadow: "false",
        etoile: "none"
    }
}

export const instagramIcon = {
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
        name: "instagram",
        direction: "default",
        size: "medium",
        bg: "orange",
        shadow: "none",
        etoile: "none"
    }
}

export const linkedinIcon = {
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
        name: "linkedin",
        direction: "default",
        size: "medium",
        bg: "orange",
        shadow: "none",
        etoile: "none"
    }
}

export const loupeIcon = {
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
        name: "loupe",
        direction: "default",
        size: "small",
        bg: "none",
        shadow: "false",
        etoile: "none"
    }
}

export const phoneIcon = {
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
        name: "phone",
        direction: "default",
        size: "small",
        bg: "none",
        shadow: "false",
        etoile: "none"
    }
}

export const pingIcon = {
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
        name: "ping",
        direction: "default",
        size: "small",
        bg: "none",
        shadow: "false",
        etoile: "none"
    }
}

export const playIcon = {
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
        name: "play",
        direction: "default",
        size: "big",
        bg: "blanc-orange",
        shadow: "true",
        etoile: "none"
    }
}

export const sacIcon = {
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
        name: "sac",
        direction: "default",
        size: "small",
        bg: "none",
        shadow: "false",
        etoile: "none"
    }
}

export const twitterIcon = {
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
        name: "twitter",
        direction: "default",
        size: "medium",
        bg: "orange",
        shadow: "none",
        etoile: "none"
    }
}