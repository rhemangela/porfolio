<template>
<el-container type="flex" direction="vertical">
<navbar/>
<el-main >
  <h3 class="mt-5">Leave us a message and we will contact you shortly.</h3></br>
<el-form @submit.navite="submit()" class="col-md-6 mx-auto max-w-sm">
</br></br></br>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Name
      </label>
    </div>
    <div class="md:w-2/3">
      <input type="text" required class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" v-model="enquiry.name">


    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
        Email
      </label>
    </div>
    <div class="md:w-2/3">
      <input type="email" required class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
      id="inline-username" v-model="enquiry.email">
    </div>
  </div>
    <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-username">
        Message
      </label>
    </div>
    <div class="md:w-2/3">
      <textarea rows="7" required class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
      id="inline-username" v-model="enquiry.Message">
    </textarea>
  </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3"></div>
    <label class="md:w-2/3 block text-gray-500 font-bold">
      <input class="mr-2 leading-tight" v-model="enquiry.isSubscribe" type="checkbox">
      <span class="text-sm">
        Get travel tips, special offers, and the occasional promotional email.
      </span>
    </label>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
    
      <button @click="submit()" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded" type="submit">Submit order</button>
      </br></br>
    </div>
  </div>
</el-form>
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

data () {return {
  enquiry:{name:"",email:"",message:"",isSubscribe:true}
        } },
methods:{
  submit(){

  }
},//end of methods
created(){}
}

</script>
<style scoped>
</style>
