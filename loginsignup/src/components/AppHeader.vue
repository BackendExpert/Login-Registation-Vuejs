<template>
    <div class="w-full bg-none py-8 px-16 text-white lg:text-xl flex">
      <BuildingOffice2Icon class="icon"/>  
      <p class="pt-2 pl-2">JK Cars</p>
    </div>
</template>

<script>
import { BuildingOffice2Icon } from '@heroicons/vue/24/solid';

export default {
    name: 'AppHeader',
    components: {
        BuildingOffice2Icon
    }
    
}
</script>

<style>
.icon {
    width: 36px;
    height: 36px;
    color: white;
    margin-left: 12px;
}
</style>