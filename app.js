const app = Vue.createApp({
    data() {
        return {
            myName: 'Edgar',
            birthYear: 2005,
            currentYear: new Date().getFullYear(),
            imgURL: 'https://northfur.ca/345-large_default/dolphin-muzzle.jpg'
        }
    },
    computed: {
        myAge() {
            const currentMonth = new Date().getMonth(); // Months starts at index 0
            const currentDay = new Date().getDate();
            const BirthAge = this.currentYear - this.birthYear;

            if (currentMonth < 4 || (currentMonth === 4 && currentDay  < 19)) {
                return BirthAge - 1;
            } else {
                return BirthAge;
            }
        },
        meIn5Years() {
            return this.myAge + 5;
        }
    },
    methods: {
        favNum() {
            const randomNum = Math.random();
            return `Favourite Number: ${randomNum}`;
        }
    }
});

app.mount('#assignment')
