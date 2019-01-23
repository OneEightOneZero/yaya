<template>
  <div class="floor">
    <!---->
    <!---->
    <!---->
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
            <!---->
          </div>
        </div>
      </a>
    </div>
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
    <!---->
  </div>
</template>

<script>
import {
  shouji1,
  shouji2,
  shouji3,
  shouji4,
  shouji5,
  shouji6,
  shouji7,
  shouji8
} from "../assets/phone/shouji.js";
import $ from "jquery";
import { ServerUrl } from "../configs/ServerUrl.js";
export default {
  name: "Gtuijian",
  methods: {
    chashouji() {
      $.ajax({
        type: "get", //请求方式
        url: ServerUrl + "/goodlist/tuijian", //接口路径
        async: true, //异步
        data: {
          //传输数据
        },
        success: function(str) {
          //成功回调
          console.log("aaa");
          
        }
      });
    }
  },
  data() {
    return {
      list: [
        {
          imgurl: shouji1,
          name: "iphone X 全网通版",
          price: "￥5888.00",
          function: "全面屏 全面绽放"
        },
        {
          imgurl: shouji2,
          name: "iphone XS 玫瑰金全网通版本",
          price: "￥6333.00",
          function: "超视网膜显示屏"
        },
        {
          imgurl: shouji3,
          name: "vivo NEX 屏幕指纹版",
          price: "￥2134.00",
          function: "全新革命旗舰"
        },
        {
          imgurl: shouji4,
          name: "华为 nova 3 星耀版",
          price: "￥2666.00",
          function: "智慧新高度"
        },
        {
          imgurl: shouji5,
          name: "华为 Mate 20 PRO全网通版",
          price: "￥1467.00",
          function: "智慧新高度"
        },
        {
          imgurl: shouji6,
          name: "荣耀V20 全网通版高配",
          price: "￥3614.00",
          function: "媚眼全面屏"
        },
        {
          imgurl: shouji7,
          name: "vivo NEX 双屏版",
          price: "￥1968.00",
          function: "非凡双屏 突破未来"
        },
        {
          imgurl: shouji8,
          name: "华为nova 4 全网通版",
          price: "￥3999.00",
          function: "自拍极点全面屏"
        }
      ]
    };
  },
  created(){
    this.chashouji()
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
