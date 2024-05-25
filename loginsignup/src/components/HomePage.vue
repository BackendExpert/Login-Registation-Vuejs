<template>
    <div class="bg-cover bg-center h-screen min-h-screen" :style="{ backgroundImage: `linear-gradient(to right, #001B3A, rgba(0,0,0,0.4)), url('https://wallpapercave.com/wp/wp2707503.jpg')` }">
        <div class="" id="home">
            <AppHeader />
            <div class="text-center my-16 text-white mx-16" >
                <h1 class="lg:text-5xl site-title">Buy Your Dream car</h1>
                <p class="py-8">with JKCARs</p>

                <p class="my-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In quidem, autem facere molestias modi dolorum iste. Hic nam vero obcaecati distinctio exercitationem suscipit, illum nobis porro, quis fuga fugiat numquam!
                    Illo commodi fugit ullam officiis at id sit cumque inventore quo est facere dolores consequuntur ad distinctio aut esse doloremque, assumenda eaque tenetur qui provident dolorum rerum beatae a? Iste.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import AppHeader from './AppHeader.vue';
    export default {
        name: "HomePage",
        components: {
            AppHeader,
        }
    }
</script>

