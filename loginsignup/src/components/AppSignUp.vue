<template>
    <div class="">
        <div class="">
            <form @submit.prevent="headleSignUp">
                <div class="">
                    <label for="" class="text-xl block my-2">Username : </label>
                    <input type="text" name="" id="" v-model="signUpData.username" class="h-12 2-full bg-white text-gray-700 rounded pl-2" required placeholder="Enter Username">
                </div>
                <div class="">
                    <label for="" class="text-xl block my-2">Email : </label>
                    <input type="email" name="" id="" v-model="signUpData.email" class="h-12 2-full bg-white text-gray-700 rounded pl-2" required placeholder="Enter Email Address">
                </div>
                <div class="">
                    <label for="" class="text-xl block my-2">Password : </label>
                    <input type="password" name="" id="" v-model="signUpData.password" class="h-12 2-full bg-white text-gray-700 rounded pl-2" required placeholder="Enter Password">
                </div>
                <div class="">
                    <button type="submit" class="bg-green-500 my-4 py-2 px-8 rounded text-white">SignUp</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "AppSignUp",

        data() {
            return {
                signUpData: {
                    username: '',
                    email: '',
                    password: ''
                }           
            }
        },

        methods: {
            headleSignUp() {
                axios.post('http://localhost:8081/SignUp', this.signUpData)
                .then(res => {
                    if(res.data.Status === "Success") {
                        alert("Registation Successful")
                        window.location.reload()
                    }
                    else{
                        alert(res.data.Error)
                    }
                })
            }
        }
    }
    
    
</script>