<template>
  <div id="app" class="app-wrap">
    <router-view></router-view>
    <Gfooter/>
  </div>
</template>

<script>
import Gfooter from "./components/Gfooter.vue"
import "./assets/css/total.css"
import "./assets/css/loginReg.css"

export default {
  name: "app",
  components: {
    Gfooter
  }
};

</script>

<style>

</style>
