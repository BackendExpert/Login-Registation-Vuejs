<template>
    <div class="w-full bg-none py-8 md:px-16 px-4 text-white lg:text-xl flex justify-between">
        <div class="flex">
            <BuildingOffice2Icon class="icon"/>  
            <p class="pt-2 pl-2">JK Cars</p>
        </div>
        <div class="">
            <!-- button when mobile screen to open and close menu -->
            <button @click="isNavOpen = !isNavOpen" class="sm:hidden">
                <XMarkIcon class="{'hidden' : isNavOpen, 'block': !isOpen}" />
                <ListBulletIcon class="{'hidden' : isNavOpen, 'block': !isOpen}" />
            </button>
        </div>
    </div>
</template>

<script>
import { BuildingOffice2Icon, XMarkIcon, ListBulletIcon } from '@heroicons/vue/24/solid';

export default {
    name: 'AppHeader',
    components: {
        BuildingOffice2Icon,
        XMarkIcon,
        ListBulletIcon
    },
    data() {
        return {
            isNavOpen: false,
        }
    },
    
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