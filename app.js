const app = Vue.createApp({
    data() {
        return {
            myName: 'Edgar',
            myAge: 19,
            imgURL: 'https://northfur.ca/345-large_default/dolphin-muzzle.jpg'
        }
    },
    computed: {
        meIn5Years() {
            return this.myAge + 5
        }
    },
    methods: {
        favNum() {
            const randomNum = Math.random();
            return `Favourite Number: ${randomNum}`
        }
    }
});

app.mount('#assignment')
