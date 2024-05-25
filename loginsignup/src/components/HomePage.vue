<template>
    <div class="bg-green-500 bg-cover bg-center h-screen">
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