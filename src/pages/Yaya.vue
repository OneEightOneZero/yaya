<template>
  <div>
    <Gheader/>
    <Gbanner/>
    <Gnav/>
    <Gtoutiao/>
    <Gtuijian/>
  </div>
</template>
<script>
import Gheader from "../components/Gheader.vue";
import Gbanner from "../components/Gbanner.vue";
import Gnav from "../components/Gnav.vue";
import Gtoutiao from "../components/Gtoutiao.vue";
import Gtuijian from "../components/Gtuijian.vue";
export default {
  name: "Yaya",
  components: {
    Gheader,
    Gbanner,
    Gnav,
    Gtoutiao,
    Gtuijian
  }
};
</script>