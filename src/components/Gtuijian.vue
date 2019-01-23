<template>
  <div class="floor">
    <div class="floor-product flex flex-justify-between flex-wrap padding-top" style>
      <a
        v-for="(i,index) in list"
        :key="index"
        href="https://m.yaya.cn/product/58206.html"
        class="product-item flex flex-col flex-justify-between"
      >
        <img :src="i.imgurl" mode="widthFix" class="product-img">
        <img src="../assets/hot.png" mode="widthFix" class="promotion-tag">
        <div class="promotion font-13">
          <span class="lines-1" v-text="i.function"></span>
        </div>
        <div>
          <div class="title lines-1" v-text="i.name"></div>
          <div class="price flex flex-justify-between flex-align-center">
            <span class="red font-15" v-text="i.price"></span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { ServerUrl } from "../configs/ServerUrl.js";
export default {
  name: "Gtuijian",
  methods: {
    chashouji() {
      return new Promise(function(resolve) {
        $.ajax({
          type: "get", //请求方式
          url: ServerUrl + "/goodlist/tuijian", //接口路径
          async: true, //异步
          data: {
            //传输数据
          },
          success: function(str) {
            //成功回调
            resolve(str.data);
          }
        });
      });
    }
  },
  data() {
    return {
      list: []
    };
  },
  async created() {
    let abc = await this.chashouji();
    this.list = abc;
  }
};
</script>

<style>
.floor-product {
  padding: 0 10px;
}
.product-item {
  width: 4.6rem;
  background: #fff;
  margin-top: 0.3rem;
  padding-bottom: 10px;
  position: relative;
  box-shadow: 0 1px 10px #e1e1e1;
  border-radius: 3px;
}
.product-item .product-img {
  width: 4rem;
  height: 4rem;
  display: block;
  margin: 10px auto;
}
.product-item .promotion-tag {
  position: absolute;
  left: 0;
  top: 3.7rem;
  width: 1.2rem;
}
.product-item .promotion {
  background: #ebf6fe;
  color: #87acd8;
  padding: 5px 15px;
}
.product-item .title {
  margin: 5px 15px;
}
.product-item .price {
  margin: 5px 15px 0;
}
</style>
