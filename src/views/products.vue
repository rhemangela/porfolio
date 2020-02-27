<template>

<div>
    <header class="jumbotron my-4">
        <h1 class="text-center display-3 text-white-50">Let's Seoul</h1>
        <p class="lead"></br></br></br></p>
        <div class="col-md-12 text-center"> 
          <el-button type="warning" @click="singlePage('-Lyxi-ntE7asbPgJqXSh')">Explore</el-button>

        </button>
        </div>
    </header>

  <el-container>
    <el-main>

<el-row :gutter="15">
</br></br>
<div class="text-gray-600 flex text-4xl">Popular Routes</div>
  <el-col :span="6" :xs="24" v-for="(item,key) in products" :key="key" v-if="item.category===`CityCentral`">
    <el-card shadow="none" :body-style="{ padding: '0px' }">

      <img @click="toSingleItem(item.id)" :src="item.imgUrl" class="image cursor-pointer">

      <div style="padding: 14px;">
        <small class="text-gray-700"><i class="fas fa-map-marker-alt">&nbsp&nbsp{{item.category}}</i></small>
        <h6 class="text-gray-700">{{item.title}}</h6><small></small>
        <small class="text-gray-700">{{item.price|currency}} per Person</small></br>
        <div class="bottom clearfix">    
          <el-button-group class="mx-2">
          <el-button type="warning" size="small" :loading="(Loading_id===item.id)" @click="editWish(item.id,1)">Wishlist</el-button>
          <el-button type="danger" size="small" @click="checkout(item.id)">Buy Now!</el-button>
          </el-button-group>


        </div>
      </div>
    </el-card>
  </el-col>
</el-row>


<el-row :gutter="15">
</br></br>
<div class="text-gray-600 flex text-4xl">Seasonal Routes</div>
  <el-col :span="6" :xs="24" v-for="(item,key) in products" :key="key" v-if="item.category===`peripheral`">
    <el-card shadow="none" :body-style="{ padding: '0px' }">
    <img @click="toSingleItem(item.id)" :src="item.imgUrl" class="image cursor-pointer">
      <div style="padding: 14px;">
      <small class="text-gray-700"><i class="fas fa-map-marker-alt">&nbsp&nbsp{{item.category}}</i></small>
        <h6 class="text-gray-700">{{item.title}}</h6>
        <small class="text-gray-700">{{item.price|currency}} per Person</small></br>
        <div class="bottom clearfix">
        
          <el-button-group class="mx-2">
          <el-button type="warning" size="small" :loading="(Loading_id===item.id)" @click="editWish(item.id,1)">Wishlist</el-button>
          <el-button type="danger" size="small" @click="checkout(item.id)">Buy Now!</el-button>
          </el-button-group>
        </div>
      </div>
    </el-card>
  </el-col>  
</el-row>

</br></br></br>
<services/>

</el-main>
  </el-container>
  </div>
</template>

<script>
import $ from "jquery";
import Services from "./services";
export default {

components:{Services},
  
data () {
    return {
      isLoading:false
    }},

computed:{
  Loading_id(){return this.$store.state.Loading_id},
  products(){return this.$store.state.products},
  single_product(){return this.$store.state.single_product}
},
watch:{
  single_product:function(){
    this.isLoading=false
  }
},
methods:{
    toSingleItem(id){
        this.$router.push(`/${id}/details`)
    },

    showSingle(id){
        this.$store.dispatch("getSingleProduct",id);
      },

    editWish(id){
        this.$store.dispatch("editWish", id)
      },
  
    getWishlist(){
        this.$store.dispatch("getWishlist");
      },
    
    getProducts(){
        this.$store.dispatch("getProducts");
    },//end of getProducts

    singlePage(id){
        var vm=this;
        vm.$route.params.id=id;
        vm.$router.push(`/${id}/details`)
      },

    checkout(id){
        var vm=this;
        vm.$route.params.id=id;
        vm.$router.push(`/${id}/checkout`)
      }
},//end of methods


  created(){
      this.getProducts(),
      this.getWishlist()
  }//end of created
}
</script>


<style scoped>
body {color: red;}
.el-container {
  max-width:1000px;
      margin-left: auto;
    margin-right: auto;

    &:last-child {
      margin-bottom: 0;
    }}
  .jumbotron{
    background: url("../assets/03.jpg");
    background-size: cover;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  .el-card{
    border:none;
  }
  .el-card:hover .image {
  opacity: 0.5;
  transition: .5s ease;
}

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both;
  }
  ul.bullet {
  list-style-type: circle;
  }

</style>
