<template>
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex-shrink-0 flex items-center">
            <a href="/" class="text-xl font-semibold">MyLogo</a>
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <button @click="isOpen = !isOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
              <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path :class="{ 'hidden': isOpen, 'block': !isOpen }" class="block" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                <path :class="{ 'hidden': !isOpen, 'block': isOpen }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <a href="/" class="text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">Home</a>
            <a href="/about" class="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">About</a>
            <a href="/contact" class="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
      <div :class="{ 'block': isOpen, 'hidden': !isOpen }" class="sm:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a href="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</a>
          <a href="/about" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</a>
          <a href="/contact" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Contact</a>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  
  export default {
    name: "AppNav",
    data() {
      return {
        isOpen: false,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  