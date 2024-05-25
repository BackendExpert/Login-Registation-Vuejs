<template>
    <div class="bg-cover bg-center h-screen my-16" :style="{ backgroundImage: `url('https://wallpaperaccess.com/full/13642.jpg')` }">
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