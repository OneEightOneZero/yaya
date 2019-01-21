<template>
  <div class="floor">
    <!---->
    <div class="floor-picture flex flex-justify-between">
      <a v-for="(i,index) in img" :key="index" href="https://m.yaya.cn/bargain/" class="block style7">
        <img
          :src="i.imgurl"
          width
          height
          class="lazy-img"
          loaded="true"
        >
      </a>
    </div>
  </div>
</template>

<script>
import youpin from "../assets/youpin.jpg";
import julebu from "../assets/julebu.jpg";
import zixun from "../assets/zixun.jpg";
import mendian from "../assets/mendian.jpg";
import faxian from "../assets/faxian.jpg";
export default {
  name: "Gnav",
  data(){
    return{
      img:[
        {
          imgurl:youpin
        },{
          imgurl:julebu
        },{
          imgurl:zixun
        },{
          imgurl:mendian
        },{
          imgurl:faxian
        },
      ]
    }
  }
};
</script>

<style >
.floor-picture {
  background: #fff;
}
.floor-picture a img {
  width: 100%;
  height: 100%;
}
.floor-picture a.style1 {
  width: 5rem;
  height: 1.667rem;
}
.floor-picture a.style2 {
  width: 2.5rem;
  height: 3.333rem;
}
.floor-picture a.style3 {
  width: 10rem;
  height: 2.7rem;
}
.floor-picture a.style4 {
  width: 5rem;
  height: 3.333rem;
}
.floor-picture a.style5 {
  width: 2.5rem;
  height: 3.333rem;
}
.floor-picture a.style5:last-child {
  width: 5rem;
  height: 3.333rem;
}
.floor-picture a.style6 {
  width: 2.5rem;
  height: 3.333rem;
}
.floor-picture a.style6:first-child {
  width: 5rem;
  height: 3.333rem;
}
.floor-picture a.style7 {
  width: 2rem;
  height: 2rem;
}
.floor-picture a.style8 {
  width: 10rem;
  height: 1.17333rem;
}
.floor-picture a.style9 {
  width: 10rem;
  height: 5rem;
}
.floor-picture a.style10 {
  width: 2.67rem;
  height: 2.67rem;
}
.floor-picture .style12.big {
  width: 49%;
  margin-bottom: 8px;
  box-sizing: border-box;
}
.floor-picture .style12.small {
  width: 23.5%;
  box-sizing: border-box;
}
.floor-picture .style12 img {
  width: 100%;
}
.floor-picture .style13 .item {
  width: 50%;
}
.floor-picture .style13 .item:nth-child(odd) {
  padding-right: 4px;
}
.floor-picture .style13 .item:nth-child(2n) {
  padding-left: 4px;
}
.floor-picture .style13 .super {
  display: block;
}
.floor-picture .style13 .big {
  margin-bottom: 8px;
}
.floor-picture .style13 .small:nth-child(odd) {
  padding-right: 4px;
}
.floor-picture .style13 .small:nth-child(2n) {
  padding-left: 4px;
}
.floor-picture .style13 img {
  width: 100%;
}
.floor-picture .style14 {
  width: 50%;
  margin-bottom: 8px;
  box-sizing: border-box;
}
.floor-picture .style14 img {
  width: 100%;
}
.floor-picture .style14:nth-child(odd) {
  padding-right: 4px;
}
.floor-picture .style14:nth-child(2n) {
  padding-left: 4px;
}
.margin-ad {
  margin: 10px;
}
.radius {
  border-radius: 5px;
}
</style>
