<template>
  <div>
    <div v-loading="isLoading2">

    <div class="container py-3">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-6 img-thumbnail detail-bg mb-3 border-0">
            <img class="img-fluid d-block mx-auto" :src="singleProduct.imgUrl" alt="">
            </div>
            <div class="col-md-6">
              <div class="d-flex align-items-center">
                <h2>{{ singleProduct.title }}</h2>
              </div>
              <blockquote class="blockquote mt-3">
                <p class="mb-0">{{ singleProduct.content }}</p></br>
                <footer class="blockquote-footer text-right">{{ singleProduct.description }}</footer>
              </blockquote>
              <div class="h2 text-sub" v-if="singleProduct.price">Price: {{ singleProduct.price|currency }} </div>
              
                  <el-button type="warning" @click.prevent="editWish(id)"><i class="fas fa-spinner fa-spin fa-fw" v-if="isLoading"></i><span if-else>Add Wishlist</span></el-button>
                  <el-button type="danger" @click.prevent="checkout()">Order Now</el-button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row my-4">
        <div class="col-md-6 text-main mb-4">
          <h3>
            <i class="fas fa-location-arrow"></i> Hightlights:
          </h3>
          <div>
            <ul style="list-style-type:none;text-align:left">
              <li><i class="fas fa-check"></i> {{itemCheck[0].in1}}</li>
              <li><i class="fas fa-check"></i> {{itemCheck[0].in2}}</li>
              <li><i class="fas fa-check"></i> {{itemCheck[0].in3}}</li>
              <li><i class="fas fa-check"></i> {{itemCheck[0].in4}}</li>
            </ul>
          </div>
        </div>
        <div class="col-md-6 text-main">
          <h3><i class="fas fa-exclamation-circle"></i> Additional Information:</h3>
          <ul style="text-align:left">
              <li>{{itemCheck[0].add1}}</li>
              <li>{{itemCheck[0].add2}}</li>
              <li>{{itemCheck[0].add3}}</li>
              <li>{{itemCheck[0].add4}}</li>
          </ul>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          <h3 class="text-main">You may also like...</h3>
        </div>

         
          <div class="col-md-4 col-ms my-4 " v-for="item in randomProducts" :key="item.id">
            <div @click="singlePage(item.id)" class="card border-0">
              <a href="#">
               <img class="img-fluid d-block mx-auto" style="width:70%" :src="item.imgUrl" alt="">
              </a>
              <div class="card-body">
                <i class="fas fa-map-marker-alt float-right"></i>
                <h6 class="card-title">{{ item.title }}</h6>
              </div>
            </div>
          </div>
 






      </div>
    </div>
    </div>
  </div>
</template>

<script>
import moreDetail from '../assets/additional.json';
import $ from "jquery";

export default {
  
  data() {
    return {
      moreDetail,
      isLoading: false,
      isLoading2: true,
      id : this.$route.params.id
    };
  },
 computed: {
      singleProduct(){return this.$store.state.single_product},
      randomProducts(){return this.$store.state.randomProducts},
      products(){return this.$store.state.products},
      wish_counter(){return this.$store.state.wish_count},
      itemCheck() {
          const vm = this;
          return vm.moreDetail.info.filter(item => item.id === vm.id);
          },
        },

  watch: {
      wish_counter:function(){this.isLoading=false},
      singleProduct:function(){this.isLoading2=false},
        },

  methods: {


    showSingle(id){
        this.$store.dispatch("getSingleProduct",id);
      },

    singlePage(id){
        var vm=this;
        vm.$route.params.id=id;
        vm.$router.push(`/${vm.$route.params.id}/details`)
      },

    editWish(id){
        this.$store.dispatch("editWish", id);
        this.isLoading = true;
      },
  
    getWishlist(){
        this.$store.dispatch("getWishlist")
      },
    
    getProducts(){
        this.$store.dispatch("getProducts");
    },//end of getProducts

    checkout(){
        var vm=this;
        vm.showSingle(vm.id);
        vm.$router.push(`/${vm.id}/checkout`)
      },

    },//end of methods

  created() {
    this.showSingle(this.$route.params.id);
    this.getProducts();
    this.getWishlist()
  },
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

</style>