import myFooterMenu from "@/components/elements/myFooterMenu.vue"

export default {
    title: "components/myFooterMenu",
    component: myFooterMenu,
    argTypes: {
        title:{
            control: "text",
        },
        liens:{
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
