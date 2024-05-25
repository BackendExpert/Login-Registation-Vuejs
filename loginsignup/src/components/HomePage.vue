<template>
    <div class="bg-cover bg-center h-screen min-h-screen" :style="{ backgroundImage: `linear-gradient(to right, #001B3A, rgba(0,0,0,0.4)), url('https://wallpapercave.com/wp/wp2707503.jpg')` }">
        <div class="" id="home">
            <AppHeader />
            <div class="text-center md:my-16 text-white md:mx-16 mx-8 " >
                <h1 class="lg:text-5xl md:text-2xl text-2xl site-title">Buy Your Dream car</h1>
                <p class="md:py-8 ">with JKCARs</p>

                <p class="my-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem, autem facere molestias modi dolorum iste. Hic nam vero obcaecati distinctio exercitationem suscipit, illum nobis porro, quis fuga fugiat numquam!
                    Illo commodi fugit ullam officiis at id sit cumque inventore quo est facere dolores consequuntur ad distinctio aut esse doloremque, assumenda eaque tenetur qui provident dolorum rerum beatae a? Iste.
                </p>

                <div class="flex">
                    <button @click="ClickButtonValue('Login')" class="bg-white text-black py-2 px-8 mx-2 rounded-full">Login</button>
                    <button @click="ClickButtonValue('SignUp')" class="bg-white text-black py-2 px-8 mx-2 rounded-full">SignUp</button>
                </div>
                <p>Clicked Button: {{ clickedValue }}</p>

            </div>
        </div>
    </div>
    <div class="" id="AboutUs">
        <AboutAs />
    </div>
    <div class="" id="LatestModels">
        <LatestModels />
    </div>
    <div class="" id="ContactInfo">
        <AppFooter />
    </div>
</template>

<script>
    import AppHeader from './AppHeader.vue';
    import AboutAs from './AboutAs.vue';
    import LatestModels from './LatestModels.vue';
    import AppFooter from './AppFooter.vue';

    export default {
        name: "HomePage",
        components: {
            AppHeader,
            AboutAs,
            LatestModels,
            AppFooter,
        },
        // data property for store click value 
        data() {
            return {
                clickedValue: ''
            }
        },
        // method for catch the click value
        methods: {
            ClickButtonValue(value){
                // update the data property with click value
                this.clickedValue = value
            }
        }
    }
</script>

