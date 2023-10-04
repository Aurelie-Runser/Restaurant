import myFooterMenu from "@/components/elements/myFooterMenu.vue"

export default {
    title: "components/myFooterMenu",
    component: myFooterMenu,
    argTypes: {
        title:{
            control: "text",
        },
        logo:{
            control: "text",
        },
        liens:{
            control: "object",
        },
        texte:{
            control: "object",
        },
        icons:{
            control: "object",
        },
    }
}

export const MenuFooterSimple = {
    render: (args) => {
        return{
            components: {
                myFooterMenu
            },
            setup(){
                return {args}
            },
            template: `<myFooterMenu v-bind="args"/>`
        }
    },
    args:{
        title: "Opening Restaurant",
        liens:[
            {txt: "Sat-Wet: 09:00am-10:00PM", href: ""},
            {txt: "Thursdayt: 09:00am-11:00PM", href: ""},
            {txt: "Friday: 09:00am-8:00PM", href: ""}
        ]        
    }
}
export const MenuFooterLogo = {
    render: (args) => {
        return{
            components: {
                myFooterMenu
            },
            setup(){
                return {args}
            },
            template: `<myFooterMenu v-bind="args"/>`
        }
    },
    args:{
        logo: "/Logo.png",
        texte: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo libero viverra dapibus odio sit malesuada in quis. Arcu tristique elementum viverra integer id.",
        icons: ["facebook", "twitter", "linkedin", "instagram"]
    }
}
