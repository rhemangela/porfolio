<template>
  <div>
<navbar/>
<el-container direction
</br></br>
<button class="bg-pink-500 hover:bg-pink-700 text-white font-bold mx-5 py-2 px-4 rounded" @click="showModal(true)">
  Add
</button></br>

<el-main>
<table class="table-responsive-md mx-auto">
  <thead>
    <tr class="d-flex">
      <th class="col-3 px-4 py-2">ID</th>
      <th class="col-2 px-4 py-2">Category</th>
      <th class="col-3 px-4 py-2">Title</th>
      <th class="col-1 px-4 py-2">Price</th>
      <th class="col-1 px-4 py-2">is enabled</th>
      <th class="col-1 px-4 py-2"></th>
      <th class="col-1 px-4 py-2"></th>

    </tr>
  </thead>
  <tbody>
    <tr class="d-flex" v-for="(item) in products" >
      <td class="overflow-hidden col-3 border px-2 py-auto">{{item.id}}</td>
      <td class="col-2 border px-4 py-2">{{item.category}}</td>
      <td class="col-3 border px-4 py-2">{{item.title}}</td>
      <td class="col-1 border overflow-hiddenpx-4 py-2">{{item.price|currency}}</td>
      <td class="col-1 border overflow-hidden px-4 py-2">{{item.is_enabled}}</td>
      <td class="col-1"><el-button type="primary" size="small" @click="showModal(false,item)">edit</el-button></td>
      <td class="col-1"><el-button type="danger" size="small" @click="click_delete(item.id)">DELETE</el-button></td>
    </tr>
  </tbody>
</table>
</el-main>
</el-container>




<div v-loading="loading" class="modal" id="productModal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Fill in to change content...</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form>
  <div class="form-group mx-8 my-5">
    category
    <input type="text" disabled class="form-control" v-model="tempProduct.category">
    title
    <input type="text" disabled class="form-control" v-model="tempProduct.title">
    price
    <input type="text" class="form-control" v-model="tempProduct.price">
    content
    <input type="text" class="form-control" v-model="tempProduct.content">
    description
    <input type="text" class="form-control" v-model="tempProduct.description">
    img
    <input type="text" disabled class="form-control" v-model="tempProduct.imgUrl">
    is enabled
    <input type="checkbox" :true-value="1" :false-value="0" v-model="tempProduct.is_enabled"></br></br>
    <button type="submit" class="btn btn-primary" @click="editProduct()">Submit</button>
  </div>
    
</form>
     
    </div>
  </div>
</div>

<el-dialog
  title="Sure delete?"
  :visible.sync="delete_reminder"
  width="30%">
  <span>Are you sure want to delete?</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="delete_reminder = false">cancel</el-button>
    <el-button type="danger" :plain="true" @click="_alert()">Confirm</el-button>
  </span>
</el-dialog>


<footer_/>

  </div>
</template>

<script>
import Navbar from "../components/navbar";
import Footer_ from "../components/footer";


import $ from "jquery";
export default {
components:{ Navbar,Footer_},

  
data () {
    return {products:[],
            tempProduct:{},
            loading:false,
            isNew:false,
            delete_reminder: false,
            to_be_deleted:""

            }},
methods:{


    getProducts(){
    var vm = this;
    var api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/products/all`;
    vm.$http.get(api).then((response)=>{
      console.log(JSON.stringify(response.data));
      vm.products = response.data.products;
      console.log(vm.products);
        });//end of response
    },//end of getProducts



editProduct(){
    var vm = this;
    vm.loading=true;
    if (vm.isNew){//if new
        var api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/product`;
        vm.$http.post(api,{data:vm.tempProduct}).then((response)=>{
        if (response.data.success)
            {$('#productModal').modal('hide');
            vm.getProducts;
            vm.loading=false;
            vm.tempProduct={};
            vm.$router.go();
            }
            console.log(response.data.message);})
            }  

    else {//if edit
        var api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/product/${vm.tempProduct.id}`;
        vm.$http.put(api,{data:vm.tempProduct}).then((response)=>{
        if (response.data.success)
            {vm.getProducts;           
            $('#productModal').modal('hide');
            vm.loading=false;
            vm.tempProduct={};
            }
            console.log(response.data.message);
            })}





    },//end of deleteProducts

click_delete (id){
    var vm = this;
    vm.to_be_deleted=id;
    vm.delete_reminder=true;
    },//end of deleteProducts

deleteProduct(){
    var vm = this;
    var api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/admin/product/${vm.to_be_deleted}`;
    vm.$http.delete(api).then((response)=>{
        console.log(response.data.message);
        if (response.data.success)
            {vm.products = response.data.products;
            vm.getProducts;
            vm.delete_reminder=false;
            vm.to_be_deleted="";
            vm.$router.go()}

        });//end of response

    },//end of deleteProducts

showModal(isNew,item){
    var vm = this;
    vm.isNew=isNew;
    if (vm.isNew==false){vm.tempProduct=item;} else
    {vm.tempProduct={}};
    $('#productModal').modal('show');
   },//end of editProducts
  
_alert(){
        this.$message.error('Deletion is not allowed');
        this.delete_reminder=false;
      }//end of _alert


},//end of methods
  created(){
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)_cookie\s*=\s*([^;]*).*$)|^.*$/, "$1");
    this.$http.defaults.headers.common.Authorization = myCookie;
      this.getProducts()
  }
}

</script>
<style scoped>
.el-container {
  max-width:1000px;
      margin-left: auto;
    margin-right: auto;

    &:last-child {
      margin-bottom: 0;
    }}
.el-main {
    max-width:1200px;
      margin-left: auto;
    margin-right: auto;
}
    table {
      max-width:100%;
    }
</style>
