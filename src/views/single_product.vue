<template>
  <el-container type="flex" direction="vertical">
 <p>the params is {{this.$route.params.id}}</p>
 <p v-if="singleProduct">{{singleProduct.title}}</p>
<el-button type="primary" size="small" @click="editWish(singleProduct.id,1)">add to cart</el-button>
<el-button type="danger" size="small" @click="checkout(singleProduct.id)">BUY NOW</el-button>
  </el-container>
</template>

<script>
import $ from "jquery";
export default {
  data () {
    return {}
  },
  computed:{
      singleProduct(){return this.$store.state.single_product}
  },
    methods: {

      editWish(id){
        this.$store.dispatch("editWish", id)
      },

      checkout(id){
        this.$router.push(`/product/${id}/checkout`)
      },
  },//end of methods

  created(){
    },
  }

</script>
