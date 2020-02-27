<template>
  <el-container type="flex" direction="vertical">
<!--Section: Content-->
  <section class="dark-grey-text text-center">
    <hr class="w-header">
    <div class="sub-title">
    </br>
        <h3>Other Services</h3>
       <small>Easily Customize Your Trip with the Best Periperal Services.</small></br>
    </div>
</br></br>
    <!--First row-->
    <div class="row">

      <!--Grid column-->
      <div class="col-md-3 mb-4">

        <!-- Card -->
        <div class="card cursor-pointer shadow-sm">
          
          <!-- Card content -->
          <div class="card-body my-2">

            <p><i class="fas fa-plane fa-3x"></i></p>
            <h5 class="mb-0">Airport Pickup</h5>
            
          </div>

        </div>
        <!-- Card -->

      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-md-3 mb-4">

        <!-- Card -->
        <div class="shadow-sm card cursor-pointer">
          
          <!-- Card content -->
          <div class="card-body my-2">
            <p><i class="fas fa-users fa-3x"></i></p>
            <h5 class="mb-0">Package</h5>
          </div>

        </div>
        <!-- Card -->

      </div>
      <!--Grid column-->
      
      <!--Grid column-->
      <div class="col-md-3 mb-4">

        <!-- Card -->
        <div class="shadow-sm card cursor-pointer">
          
          <!-- Card content -->
          <div class="card-body my-2">

            <p><i class="fas fa-bus fa-3x"></i></p>
            <h5 class="mb-0">Limousine</h5>
            
          </div>

        </div>
        <!-- Card -->

      </div>
      <!--Grid column-->
      
      <!--Grid column-->
      <div class="col-md-3 mb-2">
        <div class="shadow-sm card cursor-pointer">
          <div class="card-body my-2">
            <p><i class="fas fa-hotel fa-3x"></i></p>   
             <h5 class="mb-0">Accomodations</h5>
          </div>
        </div>
      </div>
      <!--Grid column-->

    </div><!--end of the row!-->

  </section>

  </el-container>
</template>

<script>

import $ from "jquery";
export default {
  data () {
    return {}
  },
  created(){},
  methods: {}
}

</script>
<style scoped>
*{color: #4a5568;}
.fas {color: #fc8181;}
</style>