<template>
  <div class=" container-fluid">
<navbar/>

<router-view :key="$route.fullPath"></router-view> <!--showing the children component!-->
<footer_/>
  </div>
</template>

<script>
import Navbar from "./navbar";
import Footer_ from "./footer";

import $ from "jquery";
export default {
components:{ Navbar,Footer_}}

</script>
