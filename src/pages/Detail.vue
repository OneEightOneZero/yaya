<template>
  <div>
    <div v-for="(s,index) in sp" :key="index">
      <div class="flex-child-noshrink detail-header">
        <div style="height: 44px; transition: height 0.2s ease 0s;"></div>
        <header class="header fixed">
          <div class="wrapper">
            <div class="app-guide flex flex-align-center flex-justify-between" style="height: 0px;">
              <div class="app-guide-main flex flex-align-center">
                <a href="javascript:;" class="close font-16 text-center grey-9 block">×</a>
                
                <img
                  src="//img2.yaya.cn/m/static/assets/logo-icon-yaya.af5d60e258b9799e8645bdfaa335a597.png"
                  class="app-icon"
                >
                <div class="margin-left">
                  <p class="white">打开丫丫APP购物</p>

                  <p class="grey-9 font-12" style="margin-top: 5px;">客户端下单更多优惠</p>
                </div>
              </div>
              <a
                href="/download-app?url=yaya%3A%2F%2Fyym.999buy.com%2Fproduct%2F58206.html"
                class="open-btn main-bgcolor"
              >立即打开</a>
            </div>
            <div
              class="main flex flex-justify-between relative bb"
              style="background-color: rgba(250, 250, 250, 0.98);"
            >
              <div class="left-side">
                <a
                  href="javascript:history.back();"
                  class="back-button flex flex-center"
                  style="color: rgb(51, 51, 51); padding-left: 0px;"
                >
                  <i class="fa fa-angle-left font-30"></i>
                  <span class="back-text font-16"></span>
                </a>
              </div>
              <div class="title flex flex-center" style="left: 44px; right: 44px;">
                <div class="detail-nav">
                  <a href="javascript:;" class="active">商品</a>
                  <a href="javascript:;" class>评论</a>
                  <a href="javascript:;" class>详情</a>
                </div>
              </div>
              <div class="right-side flex flex-center">
                <a
                  @click="show"
                  href="javascript:;"
                  class="menu-btn flex flex-center grey-6"
                  style="color: rgb(51, 51, 51);"
                >
                  <i class="fa fa-ellipsis-h font-24"></i>
                </a>
              </div>
            </div>
            <div class="menu-box flex" v-show="menu">
              <a href="/" class="flex flex-col flex-center router-link-active">
                <i class="fa fa-home"></i>
                <span>首页</span>
              </a>
              <router-link to="/app/fenlei" href="javascript:;" class="flex flex-col flex-center">
                <i class="fa fa-reorder"></i>
                <span>分类</span>
              </router-link>
              <router-link to="/app/cart" href="javascript:;" class="flex flex-col flex-center">
                <i class="fa fa-shopping-cart"></i>
                <span>购物车</span>
              </router-link>
              <router-link to="/app/mine" href="javascript:;" class="flex flex-col flex-center">
                <i class="fa fa-user"></i>
                <span>我的</span>
              </router-link>
            </div>
          </div>
        </header>
      </div>
      <div class="mint-swipe-items-wrap" style="height:440px;">
        <div class="mint-swipe-item" style>
          <div class="video-box product-player">
            <img src class="video-logo" style="width: 80px;">
          </div>
        </div>
        <div class="mint-swipe-item is-active" style>
          <div class="product-img-box pointer" style="text-align:center;">
            <img :src="s.imgurl" width="349" height="349" class="lazy-img" loaded="true">
          </div>
        </div>
      </div>
      <div class="module-wrapper basic-info">
        <p class="product-title" v-text="s.name"></p>

        <p class="product-profile red">
          <span>【爆款特价】官网最高直降千元！享3/6期免息分期！</span>
        </p>
        <div class="product-price-box red">
          <span class="mark">¥</span>
          
          <span v-text="s.price.slice(1)"></span>
        </div>

        <div class="option-row flex flex-content-between mt-5">
          <a href="/product/price-trend/58206" class="btn-o">
            <i class="icon icon-trends"></i>价格走势
          </a>
          <a href="javascript:" class="btn-o">
            <i class="icon icon-notice"></i>降价通知
          </a>
          <a href="javascript:;" class="btn-o">
            <i class="icon icon-pk"></i>机型对比
          </a>
          <a href="javascript:" class="btn-o">
            <i class="icon icon-open"></i>开箱展示
          </a>
        </div>
      </div>
      <div class="btns-wrapper">
        <div class="btns-box border-top flex">
          <a
            href="https://chat.yaya.cn/m/"
            class="btn-small flex flex-col flex-justify-center flex-align-center"
          >
            <i class="small-icon kefu"></i>
            <span>客服</span>
          </a>
          <a
            href="javascript:;"
            class="btn-small flex flex-col flex-justify-center flex-align-center"
          >
            <i class="small-icon star-o"></i>
            <span>收藏</span>
          </a>
          <a
            href="/trade/cart"
            class="btn-small flex flex-col flex-justify-center flex-align-center relative"
          >
            <i class="small-icon cart"></i>
            <span>购物车</span>
          </a>
          <a href="javascript:;" class="btn-big flex-child-average">加入购物车</a>
          <a href="javascript:;" class="btn-big flex-child-average red">立即购买</a>
        </div>
      </div>
    </div>
    <Gloading/>
  </div>
</template>
<script>
import { ServerUrl } from "../configs/ServerUrl";
import Gloading from "../components/Gloading.vue"
export default {
  name: "fenlei",
  components: {
    Gloading
  },
  data() {
    return {
      sp: [],
      menu:false
    };
  },
  computed: {
    guid() {
      return this.$route.query.guid;
    }
  },
  methods: {
    show(){
      this.menu=!this.menu;
    },
    getData() {
      let n = this;
      return new Promise(resolve => {
        this.$.ajax({
          type: "get",
          url: ServerUrl + "/goodlist/guid",
          data: {
            guid: n.guid
          },
          success(data) {
            resolve(data.data);
          }
        });
      });
    }
  },
  async created() {
    this.$store.commit("editLoad", true);
    this.sp = await this.getData();
    this.sp ? this.$store.commit("editLoad", false) : null;
  }
};
</script>
<style src="../assets/css/detail.css" scoped>
</style>
