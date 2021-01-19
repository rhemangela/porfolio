<template>
  <div>
  <el-container>
  
  <table v-loading="isLoading" class="table-fixed mx-4">
  <thead>
    <tr class="d-flex">
      <th class="text-gray-600 col-4 px-4 py-4">Wishlist</th>
      </tr>
  </thead>
  <tbody>
    <tr class="d-flex" v-for="item in wishlist">
      <td class="border-bottom col-10 px-4 py-2">
      {{item.product.title}}
      <small class="text-gray-700"><i class="fas fa-map-marker-alt">&nbsp&nbsp{{item.product.category}}</i></small>
          </br></br>
          <el-button type="info" @click="deleteWish(item.id)" size="mini" round>Remove</el-button>
          <!-- <el-button type="danger" @click="showSingle(item.id)" size="mini" round>Details</el-button> -->
      </td>
      <td class="pt-3 border-bottom col-2"><button @click="deleteWish(item.id)"><i class="text-pink-500 fas fa-heart"></i></button></td>
    </tr>
  </tbody>
</table>


  </el-container>
  </div>
</template>

<script>

import $ from "jquery";


export default {
data () {

    return {
            tempCart:{},
            isLoading:false
            }},
computed:{
  wishlist(){return this.$store.state.wishlist}
},
methods:{   

    showSingle(id){
      this.$router.push(`/${id}/details`)
    },

    getWishlist(){
        this.isLoading=true;
        this.$store.dispatch("getWishlist");
      },

    deleteWish(id){
        this.isLoading=true;
        this.$store.dispatch("deleteWish",id);
    },//end of deleteWish



 },//end of method
watch:{
  wishlist: function(){
    this.isLoading=false;
  }
},
created(){
      this.getWishlist()
  }}

</script>
