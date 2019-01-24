<template>
  <div class="wrapper grey-f-bg">
    <div class="flex-child-noshrink">
      <header class="header">
        <div class="wrapper" >
          <div
            class="main flex flex-justify-between relative bb"
            style="background-color: rgba(250, 250, 250, 0.98);"
          >
            <div class="left-side">
              <a
                href="javascript:;"
                class="back-button flex flex-center"
                style="color: rgb(51, 51, 51); padding-left: 0px;"
              >
                <i class="fa fa-angle-left font-30"></i>
                <span class="back-text font-16"></span>
              </a>
            </div>
            <div class="title flex flex-center" style="left: 44px; right: 44px;">
              <a href="/search-form" class="search flex flex-align-center">
                <i class="fa fa-search grey-9"></i>
                <span class="grey-9 lines-1">iPhone XS Max</span>
              </a>
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
          <transition name="list" tag="div">
            <div class="menu-box flex" v-show="xianshi">
              <a href="/" class="flex flex-col flex-center router-link-active">
                <i class="fa fa-home"></i>
                <span>首页</span>
              </a>
              <router-link
                to="/app/fenlei"
                href="javascript:;"
                class="flex flex-col flex-center router-link-exact-active router-link-active"
              >
                <i class="fa fa-reorder"></i>
                <span>分类</span>
              </router-link>
              <router-link to="/app/cart" href="javascript:;" class="flex flex-col flex-center">
                <i class="fa fa-shopping-cart"></i>
                <span>购物车</span>
              </router-link>
              <router-link  to="/app/mine" href="javascript:;" class="flex flex-col flex-center">
                <i class="fa fa-user"></i>
                <span>我的</span>
              </router-link>
            </div>
          </transition>
        </div>
      </header>
    </div>

    <div class="full-width">
      <div class="sticky" id="sticky" style="top: 0px; left: 0px; float: left; height: 100%;">
        <div class="cate-parent border-right" style="height: 667px;">
          <a
            href="javascript:;"
            class="cate-parent-item flex flex-center border-bottom main-color grey-f-bg"
          >
            <span>手机通讯</span>
          </a>
          <a href="javascript:;" class="cate-parent-item flex flex-center border-bottom">
            <span>手机配件</span>
          </a>
          <a href="javascript:;" class="cate-parent-item flex flex-center border-bottom">
            <span>电脑办公</span>
          </a>
          <a href="javascript:;" class="cate-parent-item flex flex-center border-bottom">
            <span>智能穿戴</span>
          </a>
          <a href="javascript:;" class="cate-parent-item flex flex-center border-bottom">
            <span>数码影音</span>
          </a>
          <a href="javascript:;" class="cate-parent-item flex flex-center border-bottom">
            <span>智能家居</span>
          </a>
          <a href="javascript:;" class="cate-parent-item flex flex-center border-bottom">
            <span>智能出行</span>
          </a>
          <a href="javascript:;" class="cate-parent-item flex flex-center border-bottom">
            <span>娱乐竞技</span>
          </a>
          <a href="javascript:;" class="cate-parent-item flex flex-center border-bottom">
            <span>智能健康</span>
          </a>
        </div>
      </div>
      <div class="cate-child">
        <a href="javascript:" class="cate-ad">
          <img
            src="https://img2.yaya.cn/pic/category/201811230519390.jpg.webp"
            width
            height
            class="lazy-img"
            loaded="true"
          >
        </a>

        <div class="cate-item-wrap">
          <div class="flex flex-align-center flex-justify-between">
            <p class="cate-title bold font-12">热门品牌</p>
          </div>
          <div class="flex flex-wrap white-bg">
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201809140531500.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">苹果</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201803300129520.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">华为</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201807030258550.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">OPPO</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201804261013130.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">荣耀</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201807030258420.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">小米</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201807030259140.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">vivo</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201803070423400.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">三星</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201807030259350.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">美图</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201804230503160.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">魅族</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201805160237240.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">锤子手机</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201806150428300.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">一加</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201711291129010.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">金立</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201805160255430.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">努比亚</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201805160255000.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">360</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201805160254260.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">索尼</span>
            </a>
          </div>
        </div>
        <div class="cate-item-wrap">
          <div class="flex flex-align-center flex-justify-between">
            <p class="cate-title bold font-12">更多品牌</p>
          </div>
          <div class="flex flex-wrap white-bg">
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201804180537480.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">黑鲨</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201706270416470.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">摩托罗拉</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201708180444050.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">夏普</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201708180444320.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">黑莓</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201711140122260.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">诺基亚</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201706210351200.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">酷派</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201805160301100.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">中兴</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201805160301200.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">AGM旅行手机</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201805221129570.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">联想</span>
            </a>
            <a href="javascript:" class="cate-item flex flex-col flex-center">
              <img
                src="https://img2.yaya.cn/pic/category/201805160254030.jpg.webp"
                width
                height
                class="lazy-img"
                loaded="true"
              >
              <span class="font-12 lines-1">全部手机</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "fenlei",
  data() {
    return {
      xianshi: false
    };
  },
  methods: {
    show() {
      this.xianshi = !this.xianshi;
    }
  }
};
</script>

<style scoped>
.search {
  background: #e3e3e3;
  border-radius: 5px;
  height: 30px;
  width: 100%;
  padding: 0 10px;
}
.search .fa {
  margin-right: 5px;
}
.cate-parent {
  width: 2.5rem;
  overflow: auto;
  background: #fff;
  padding-bottom: 50px;
  box-sizing: border-box;
}
.cate-parent-item {
  height: 50px;
  padding: 0 8px;
}
.cate-parent-item.grey-f-bg {
  position: relative;
  z-index: 1;
}
.cate-parent-item:after {
  z-index: 2;
}
.cate-child {
  overflow: auto;
  width: 7.5rem;
  margin-left: 2.5rem;
}
.cate-child:after {
  clear: both;
}
.cate-ad {
  display: block;
  width: 7rem;
  margin: 10px auto 0;
}
.cate-ad img {
  display: block;
  width: 100%;
}
.cate-item-wrap {
  width: 7rem;
  margin: 0 auto;
}
.cate-item {
  width: 33%;
  padding: 10px 0;
}
.cate-item img {
  width: 80%;
  max-width: 70px;
  display: block;
  margin-bottom: 5px;
}
.cate-title {
  height: 30px;
  line-height: 30px;
}
.header {
  position: relative;
}
.header.fixed {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 8;
}
.main {
  height: 44px;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}
.main.bb:after {
  content: "";
  position: absolute;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #ccc;
}
.left-side {
  height: 44px;
}
.back-button {
  height: 44px;
  min-width: 44px;
  box-sizing: border-box;
}
.back-text {
  margin-left: 5px;
}
.title {
  position: absolute;
  top: 0;
  bottom: 0;
}
.right-side {
  height: 44px;
}
.menu-btn {
  width: 44px;
  height: 44px;
}
.menu-box {
  height: 60px;
  background: #000;
  overflow: hidden;
}
.menu-box a i {
  font-size: 24px;
  color: #9c9c9c;
}
.menu-box a {
  width: 25%;
  font-size: 12px;
  color: #9c9c9c;
}
.list-enter-to {
  transition: all 1s ease;
  height: 60px;
}

.list-leave-active {
  transition: all 1s ease;
  height: 0px;
}

.list-enter {
  height: 0px;
}

.list-leave {
  height: 60px;
}
</style>

