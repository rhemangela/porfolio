<template>
  <el-container type="flex" direction="vertical">

<el-main v-loading="isLoading">

  <div class="py-5 text-center">
    <img class="d-block mx-auto mb-4" src="/docs/4.4/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
    <h2>Checkout</h2>

  </div>



  <div class="row">
    <div class="col-md-6 order-md-2 mb-4">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-muted">{{singleProduct.title}}</span>
        <span class="">{{singleProduct.price|currency}} per person!</span>
      </h4>
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">No. of Adult</h6>
            <small class="text-muted"><el-input-number v-model="num1" size="small" @change="handleChange" :min="0" label=""></el-input-number></small>
          </div>
          <span class="text-muted">{{price_adult|currency}}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 class="my-0">No. of Children<small>&nbsp&nbsp&nbspHalf-price of adult's</small></h6>
            <small class="text-muted"><el-input-number v-model="num2" size="small" @change="handleChange" :min="0" label=""></el-input-number></small>
          </div>
          <span class="text-muted">{{price_child|currency}}</span>
        </li>
       

<li class="list-group-item d-flex justify-content-between">
        <div class="block">
    <span class="demonstration">please choose the days</span>
    <el-date-picker
      v-model="value1"
      type="daterange"
      range-separator="to"
      start-placeholder="start date"
      end-placeholder="end date">
    </el-date-picker>
  </div>
  </li>

        <li class="list-group-item d-flex justify-content-between">
          <span>Total (HKD)</span>
          <strong>{{total|currency}}</strong>
        </li>
      </ul>

      <form class="card p-2">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Promo code">
          <div class="input-group-append">
            <button type="submit" class="btn btn-secondary">Redeem</button>
          </div>
        </div>
      </form>
    </div>


    <div class="col-md-6">
      <form @submit.prevent="checkout()">
          <div class="col-md-12 mb-3">
            <label for="firstName">Name</label>
            <input type="text" class="form-control" id="Name" placeholder="please enter your full name" v-model="name" required>

        </div>

          <div class="col-md-12 mb-3">
            <label for="phone">Phone no</label>
            <input type="text" class="form-control" id="phone" placeholder="please enter your phone " v-model="phone" required>
          </div>
          
        <div class="col-md-12 mb-3">
          <label for="email">Email <span class="text-muted"></span></label>
          <input type="email" class="form-control" id="email" placeholder="example: angelatse@gmail.com" v-model="email" required>
        </div>

        <div class="custom-control custom-checkbox">
          <input type="checkbox">
          Save this information for next time
        </div>


        <hr class="mb-6">
        <button class="col-md-8 mb-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded" type="submit">Submit order</button>
      </form>
    </div>
  </div>



</el-main>

  </el-container>
</template>

<script>

import $ from "jquery";
export default {
    data () {
        return {
            isLoading:true,
            num1:0,
            num2:0,
            name:"",
            phone:"",
            email:"",
             pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: '',
        value2: ''
        }
        },

    computed:{
        singleProduct(){return this.$store.state.single_product},
        price_adult(){return this.num1*this.singleProduct.price},
        price_child(){return this.num2*this.singleProduct.price},
        total(){return this.price_adult+this.price_child}
        },
    watch:{
        singleProduct:function(){
        this.isLoading=false
        }},



  methods: {
        handleChange(value) {
      },
        finish(){
          this.$router.push("/index");
        },
        showSingle(id){
          this.$store.dispatch("getSingleProduct",id);
      },
},
  created(){
    this.showSingle(this.$route.params.id)
  }}

</script>
