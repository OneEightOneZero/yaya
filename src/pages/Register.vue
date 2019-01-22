<template>
<body class="yaya">
  <div class="app-wrap">
    <!---->
    <div>
      <div class="flex-child-noshrink">
        <!---->
        <header class="header">
          <div class="wrapper">
            <!---->
            <div
              class="main flex flex-justify-between relative bb"
              style="background-color: rgba(250, 250, 250, 0.980392);"
            >
              <div class="left-side">
                <router-link
                to="/app/mine"
                  href="javascript:;"
                  class="back-button flex flex-center"
                  style="color: rgb(51, 51, 51); padding-left: 0px;"
                >
                  <i class="fa fa-angle-left font-30"></i>
                  <span class="back-text font-16"></span>
                </router-link>
              </div>
              <div class="title flex flex-center" style="left: 44px; right: 44px;">
                <h1 class="lines-1 font-17 normal" style="color: rgb(51, 51, 51);">用户注册</h1>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div class="wrapper">
        <div class="login">
          <div class="login-item border-bottom flex flex-align-center">
            <div class="item-icon">
              <i class="fa fa-mobile font-24 grey-6"></i>
            </div>
            <input type="text" placeholder="手机号码" class="login-input flex-child-grow">
          </div>
          <div class="login-item border-bottom flex flex-align-center">
            <div class="item-icon">
              <i class="fa fa-adjust font-16 grey-6"></i>
            </div>
            <input type="text" placeholder="密码" class="login-input flex-child-grow">
          </div>
          <div class="flex flex-align-center" style="margin-top: 20px; display: none;">
            <span
              data-v-bd4fb5da
              class="checkbox checked"
              style="background: rgb(79, 185, 159); border-color: rgb(79, 185, 159); zoom: 0.8;"
            ></span>
            <span style="margin-left: 6px;">
              我已阅读并同意
              <a href="/help/12526.html" class="blue">《丫丫网用户协议》</a>
            </span>
          </div>
          <a href="javascript:;" class="login-button flex flex-center grey-d-bg">
            <span class="font-32 white">下一步</span>
          </a>
        </div>
      </div>
    </div> 
  </div>
  <div
    class="progress"
    style="width: 0%; height: 2px; background-color: rgb(26, 173, 25); opacity: 0;"
  ></div>
</body>
</template>

<script>

export default {
  name: "news"
};
</script>

<style src="../assets/css/loginReg.css" scoped>
</style>