<template>
  <el-container type="flex" direction="vertical">
<navbar/>

<el-main >
<form @submit="login()" class="w-full mx-auto max-w-sm">
</br></br></br>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Username
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" v-model="user.username">
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
        Password
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
      id="inline-username" type="password" placeholder="Password is 'testing1234'" v-model="user.password">
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3"></div>
    <label class="md:w-2/3 block text-gray-500 font-bold">
      <input class="mr-2 leading-tight" type="checkbox">
      <span class="text-sm">
        Remember me
      </span>
    </label>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <el-button type="danger" size="medium" @click="login()">Login</el-button></br></br>
    </div>
  </div>
</form>
</el-main>

<footer_/>

  </el-container>
</template>

<script>
import Navbar from "../components/navbar";
import Footer_ from "../components/footer";

import $ from "jquery";
export default {
components:{ Navbar,Footer_},
  data () {
    return {
      user:{ username:"angelaatmsn@gmail.com",password:""},
      Loading:false,
    }

  },
  created(){},

  methods: {

      login(){
      
       const vm=this;
       vm.Loading=true;
       var api = `${process.env.VUE_APP_API_PATH}/admin/signin`;
       this.$http.post(api,vm.user).then((response)=>
       {
        if (response.data.success)
        {vm.$router.push("/admin");
        vm.Loading=false;}
        else 
        {vm.Loading=false;}
        console.log(response.data.message);
        console.log(response.data.success);
        })


        }
}}

</script>
