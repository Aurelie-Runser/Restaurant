import myButton from "@/components/elements/myButton.vue"

export default {
    title: "elements/myButton",
    component: myButton,
    argTypes: {
        href:{
            control: "text",
        },
        size:{
            control: "select",
            options:['regular', 'small'],
        },
        variant:{
            control: "select",
            options:['default', 'rounded'],
        },
    }
}

export const PrimaryButton = {
    render: (args) => {
        return{
            components: {
                myButton
            },
            setup(){
                return {args}
            },
            template: `<myButton v-bind="args">Hello World !</myButton>`
        }
    },
    args:{
        href: "/",
        size: "regular",
        variant: "default",
    }
}

export const SecondaryButton = {
    render: (args) => {
        return{
            components: {
                myButton
            },
            setup(){
                return {args}
            },
            template: `<myButton v-bind="args">Hello World !</myButton>`
        }
    },
    args:{
        href: "/",
        size: "regular",
        variant: "rounded",
    }
}

export const SmallPrimaryButton = {
    render: (args) => {
        return{
            components: {
                myButton
            },
            setup(){
                return {args}
            },
            template: `<myButton v-bind="args">Hello World !</myButton>`
        }
    },
    args:{
        href: "/",
        size: "small",
        variant: "default",
    }
}

export const SmallSecondaryButton = {
    render: (args) => {
        return{
            components: {
                myButton
            },
            setup(){
                return {args}
            },
            template: `<myButton v-bind="args">Hello World !</myButton>`
        }
    },
    args:{
        href: "/",
        size: "small",
        variant: "rounded",
    }
}

