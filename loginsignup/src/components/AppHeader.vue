<template>
    <div class="w-full bg-none py-8 lg:px-40 md:px-26 px-4 text-white lg:text-xl">
        <div class="flex justify-between">
            <div class="flex">
                <BuildingOffice2Icon class="icon"/>  
                <p class="pt-2 pl-2">JK Cars</p>
            </div>
            <div class="">
                <!-- button when mobile screen to open and close menu -->
                <button @click="isNavOpen = !isNavOpen" class="md:hidden">
                    <ListBulletIcon :class="{ 'hidden' : isNavOpen, 'block': !isOpen}"  class="icon"/>
                    <XMarkIcon :class="{ 'hidden' : !isNavOpen, 'block': isOpen}" class="icon"/>
                </button>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#home" class="pt-2 text-white lg:text-xl hover:border-b-2 ">Home</a>
                <a href="#AboutUs" class="pt-2 text-white lg:text-xl hover:border-b-2 ">About us</a>
                <a href="#LatestModels" class="pt-2 text-white lg:text-xl hover:border-b-2 ">Latest Models</a>
                <a href="#ContactInfo" class="pt-2 text-white lg:text-xl hover:border-b-2 ">Contact</a>
            </div>
        </div>
        <div :class="{'block': isNavOpen, 'hidden': !isNavOpen}" class="sm:hidden absolute text-center ml-4 mt-4 rounded-xl px-16 bg-white text-black" >
            <div class="px-2 pt-2 pb-3 space-y-1">
                <a href="#" class="block py-4 lg:text-xl px-8">Home</a>
                <a href="#" class="block py-4 lg:text-xl px-8">About us</a>
                <a href="#" class="block py-4 lg:text-xl px-8">Latest Models</a>
                <a href="#" class="block py-4 lg:text-xl px-8">Contact</a>
            </div>
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
    // for open close the nav bar when mobile screen
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