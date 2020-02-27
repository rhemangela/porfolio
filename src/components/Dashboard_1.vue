<template>
  <div class=" container-fluid">
<navbar/>


<products/>
<footer_/>
  </div>
</template>

<script>
import Navbar from "./navbar";
import Products from "../views/products";
import Footer_ from "./footer";
import $ from "jquery";

export default {
components:{ Navbar,Products,Footer_}}

</script>
