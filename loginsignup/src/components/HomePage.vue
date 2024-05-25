<template>
    <div class="bg-cover bg-center h-screen min-h-screen" :style="{ backgroundImage: `linear-gradient(to right, #001B3A, rgba(0,0,0,0.4)), url('https://wallpapercave.com/wp/wp2707503.jpg')` }">
        <div class="">
            <AppHeader />
        </div>
    </div>
</template>

<script>
    import AppHeader from './AppHeader.vue';
    export default {
        name: "HomePage",
        components: {
            AppHeader
        }
    }
</script>

