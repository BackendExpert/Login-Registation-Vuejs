<template>
    <div class="">
        <div class="">
            <form @submit.prevent="HeadleLogin">
                <div class="">
                    <label for="" class="text-xl block my-2">Email : </label>
                    <input type="email" name="" v-model="formData.email" id="" class="h-12 2-full bg-white text-gray-700 rounded pl-2" required placeholder="Enter Email Address">
                </div>
                <div class="">
                    <label for="" class="text-xl block my-2">Password : </label>
                    <input type="password" name="" id="" v-model="formData.password" class="h-12 2-full bg-white text-gray-700 rounded pl-2" required placeholder="Enter Password">
                </div>
                <div class="">
                    <button type="submit" class="bg-green-500 my-4 py-2 px-8 rounded text-white">Login</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import  secureLocalStorage  from  "react-secure-storage"

export default {
    name: "AppLogin",
    // data property for Login data

    data() {
        return {
            formData: {
                email: '',
                password: ''
            }            
        }
    },

    // method for send data to backend
    methods: {
        async HeadleLogin () {
            try{
                const res = await axios.post('http://localhost:8081/SignIn', this.formData)

                const loginToken = res.data.Token;

                //store token in localstorage
                localStorage.setItem('LoginToken', loginToken)

                if(res.data.Msg === "Success"){
                    //get and store login user role and email
                    const userRole = res.data.LoginUser[0].Role;
                    const userEmail = res.data.LoginUser[0].Email;

                    //store data in localstore so that use secureLocalStorage
                    secureLocalStorage.setItem("Login1", userRole);
                    secureLocalStorage.setItem("login2", userEmail);
                    
                }
                else{
                    alert(res.data.Error)
                }
            }
            catch(err){
                console.log(err)
            }
        
        }
    }
}



</script>