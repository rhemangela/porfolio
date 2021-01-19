<template>
  <el-header>

<nav class="navbar navbar-light top navbar-expand-lg transparent z-depth-0">

<router-link to="/index"> <a class="navbar-brand">Home</a></router-link>
  


  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto text-gray-700 text-xl ">





       <li class="nav-item"><el-badge :value="wish_counter" class="item">
       <button @click="drawer = true" type="text">
        WishList
      </button></el-badge>
       </li>
       <li class="nav-item">
       <router-link to="/contact_us"><a class="nav-link">Contact Us</a></router-link>
      </li>
       <li class="nav-item">
       <router-link to="/login"><a class="nav-link">Admin</a></router-link>
      </li>

       <ul class="navbar-nav ml-auto">

   </ul>
    </ul>
  </div>
</nav>

<el-drawer 
  title=""
  :visible.sync="drawer"
  :with-header="false" size="0.4">
  <DropdownWishlist/>
</el-drawer>

  </el-header>




 
</template>

<script>

import DropdownWishlist from "../views/dropdown_wishlist";

export default {
  components:{ DropdownWishlist},
    data() {
      return {
        drawer: false,
        direction: 'rtl',
            }
      },
      computed:{
        wish_counter(){
          return this.$store.state.wish_count
        }
      },
    created(){
      var vm=this;
    }}
</script>


<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
@media (max-width: 767.98px) {}
</style>
