<template>
  <ul class="wrapper grey-f-bg">
    <div class="flex-child-noshrink">
      <header class="header">
        <div class="wrapper">
          <div
            class="main flex flex-justify-between relative bb"
            style="background-color: rgba(250, 250, 250, 0.98);"
          >
            <div class="left-side">
              <router-link
                to="/app/yaya"
                href="javascript:;"
                class="back-button flex flex-center"
                style="color: rgb(51, 51, 51); padding-left: 0px;"
              >
                返回
              </router-link>
            </div>
            <div class="title flex flex-center" style="left: 44px; right: 44px;">
              <form action="javascript:return true;" class="search-form">
                <input type="search" placeholder="iPhone XS Max">
                <button type="submit" class="hide">搜索</button>
              </form>
            </div>
            <div class="right-side flex flex-center">
              <a href="javascript:;" class="search-btn">搜索</a>
            </div>
          </div>
        </div>
      </header>
    </div>

    <div class="cell-title white-bg grey-9">热搜</div>
    <div class="hot-search white-bg">
      <a href="javascript:" class="hot-item">iPhone XS</a>
      <a href="javascript:" class="hot-item">华为 nova 4</a>
      <a href="javascript:" class="hot-item">OPPO R17 Pro</a>
      <a href="javascript:" class="hot-item">畅享9 Plus</a>
      <a href="javascript:" class="hot-item">vivo X23</a>
      <a href="javascript:" class="hot-item">华为 Mate 20</a>
    </div>
  </ul>
</template>
<script>
export default {
  name: "Search"
};
</script>
<style scoped>
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
.main.bb[data-v-4e58537d]:after {
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
  transition: all 0.3s ease-in-out;
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
.search-form {
  width: 100%;
  height: 30px;
  display: block;
}
.search-form input {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 16px;
  text-indent: 8px;
  line-height: normal;
}
.search-btn {
  width: 44px;
  height: 44px;
  text-align: center;
  line-height: 44px;
}
.search-guess a {
  height: 40px;
  padding: 0 10px;
}
.search-guess a span {
  margin: 0 10px;
}
.cell-title {
  padding: 15px 10px 0;
  color: #000;
  font-weight: 600;
}
.hot-search {
  padding: 15px 10px;
  height: 24px;
  overflow-y: hidden;
  white-space: nowrap;
  overflow-x: auto;
}
.hot-item {
  display: inline-block;
  padding: 0 10px;
  border-radius: 12px;
  box-sizing: border-box;
  height: 24px;
  line-height: 22px;
  font-size: 12px;
  margin-right: 10px;
  border: 1px solid #ededed;
  background: #f5f5f5;
}
.history-item {
  height: 44px;
  border-bottom: 1px solid #dfdfdf;
  color: #666;
}
.clear-btn {
  display: inline-block;
  height: 14px;
  font-size: 12px;
  color: #000;
}
.hot-rank {
  padding: 0 10px;
  margin: 10px 0;
}
.hot-rank .rank-item {
  height: 44px;
  border-bottom: 1px solid #dfdfdf;
}
.hot-rank .rank-item[data-v-139c2f46]:last-of-type {
  border-bottom: 0;
}
.hot-rank .rank-item .left-box {
  height: 16px;
  color: #000;
  font-weight: 600;
  padding-right: 8px;
  -webkit-flex-wrap: nowrap;
  flex-wrap: nowrap;
}
.hot-rank .rank-item .left-box .label {
  padding: 0 5px;
  background: rgba(200, 15, 30, 0.1);
  display: inline-block;
  height: 16px;
  line-height: 16px;
  font-size: 12px;
  border-radius: 8px;
  color: #f21c1c;
  margin-left: 5px;
}
.history {
  padding: 0 10px;
}
</style>
