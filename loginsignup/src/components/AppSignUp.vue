<template>
    <div class="">
        <div class="">
            <form>
                <div class="">
                    <label for="" class="text-xl block my-2">Username : </label>
                    <input type="text" name="" id="" class="h-12 2-full bg-white text-gray-700 rounded pl-2" required placeholder="Enter Username">
                </div>
                <div class="">
                    <label for="" class="text-xl block my-2">Email : </label>
                    <input type="email" name="" id="" class="h-12 2-full bg-white text-gray-700 rounded pl-2" required placeholder="Enter Email Address">
                </div>
                <div class="">
                    <label for="" class="text-xl block my-2">Password : </label>
                    <input type="password" name="" id="" class="h-12 2-full bg-white text-gray-700 rounded pl-2" required placeholder="Enter Password">
                </div>
                <div class="">
                    <button type="submit" class="bg-green-500 my-4 py-2 px-8 rounded text-white">SignUp</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppSignUp"
    }
</script>