<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@main: #ff9736;
@border: #bfcbd9;
.navbar {
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 99999;
  transition: all 0.7s ease;
}
.nav-wrapper {
  width: 1238px;
  margin: 0 auto;
  height: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
  .img-logo {
    position: relative;
    width: 114px;
    height: 88px;
    .img-change {
      position: absolute;
      top: 17px;
      display: block;
      left: 0px;
    }
  }
  .nav-list {
    display: flex;
    height: 100%;
    transition: all 0.2s linear;
    position: absolute;
    left: 643px;
    top: 0;
    .nav-item {
      width: 119px;
      height: 100%;
      line-height: 100px;
      font-size: 18px;
      text-align: center;
      color: #fff;
      cursor: pointer;
      &:hover {
        background-color: @main;
        color: #fff !important;
      }
    }
  }
  .login {
    line-height: 100px;
    font-size: 14px;
    color: #999;
    position: relative;
    span {
      cursor: pointer;
      display: block;
      &:hover {
        color: @main;
      }
    }
    .line {
      position: absolute;
      height: 13px;
      width: 1px;
      background-color: #ddd;
      top: 43px;
      left: 13px;
    }
  }
}
.sub-list {
  width: 100%;
  height: 80px;
  line-height: 80px;
  display: flex;
  background-color: #fff;
  border-top: 1px solid #eee;
  position: relative;
  z-index: 99999;
  span  {
    cursor: pointer;
    font-size: 18px;
    color: #666;
    &:hover {
      color: @main;
    }
  }
}
.active {
  background-color: @main;
  color: #fff;
}

</style>

<template>
  <div class="navbar" :style="setBack(scrollShow)" id="NavBar">
    <div class="nav-wrapper" @mouseenter="scroll <= scrollLimit?scrollShow = true:scrollShow = scrollShow" @mouseleave="scroll <= scrollLimit?scrollShow = false:scrollShow = scrollShow" >
      <div class="img-logo" v-if="scrollShow" ><img src="/static/logo.png"></div>
      <div class="img-logo" v-if="!scrollShow" ><img src="/static/logo-static.png"></div>
      <div class="nav-list" id="navLi" :style="setMargin(scrollShow)">
        <div class="nav-item" v-for="(nav, $index) in navList" @mouseenter="subChange($index)" @mouseleave="subChange($index)" :style="setColor(scrollShow)">{{nav.name}}</div>
        <div class="login" style="margin-left: 15px;" v-if="scrollShow"><span>登录</span></div>
        <div class="login" style="padding: 0 0 0 28px;" v-if="scrollShow">
          <span>注册</span>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <div class="sub-list" v-if="subShow" @mouseleave="scroll <= scrollLimit?change():subShow = false" @mouseenter="scrollShow = true">
      <span style="margin-left: 775px;">家装日记</span>
      <span style="margin: 0 46px;">家装案例</span>
      <span>家装攻略</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabIndex: 0,
      scroll: '',
      scrollLimit: document.body.clientWidth * 800/1920,
      scrollShow: false,
      subShow: false,
      navList: [{
        name: '首页',
        url: '/',
        subNav: []
      },{
        name: '家装分期',
        url: '/case-dc',
        subNav: [{
          name: '风格美图'
        },{
          name: '案例美图',
          url: '/impression'
        }]
      },{
        name: '家装指南',
        url: '/plans',
        subNav: [{
          name: '装修日记'
        },{
          name: '好物评测',
          url: ''
        },{
          name: '好物发现',
          url: '/strategy'
        },{
          name: '装修大学'
        },{
          name: '居分期排行',
          url: '/dry-goods'
        }]
      },{
        name: '产品商城',
        url: '/find-dc',
        subNav: [{
          name: '装修公司'
        },{
          name: '工长',
          url: '/foreman'
        }]
      },{
        name: '个人中心',
        subNav: [{
          name: '买建材'
        },{
          name: '家装贷款'
        }]
      }]
    }
  },
  methods: {
    change() {
      this.subShow = false
      this.scrollShow = false
    },
    isTab(id) {
      return id == this.tabIndex
    },
    goto(url) {
      if (url) {
        this.$router.push(url)
      }
    },
    subChange(id) {
      if (id == 2&&this.scrollShow) {
        this.subShow = true
      } else {
        this.subShow = false
      }
    },
    setBack(val) {
      let ret = {}
      if (val) {
        ret.backgroundColor = '#fff'
        // rgba(255,255,255,1)
      }
      return ret
    },
    setMargin(val) {
      let ret = {}
      if (val) {
        ret.left = '530px'
      } 
      return ret
    },
    setColor(val) {
      let ret = {}
      if (val) {
        ret.color = '#333'
      }
      return ret
    },
    getScroll() {
      this.scroll = document.documentElement.scrollTop || document.body.scrollTop;  

      if(document.body.scrollTop)
        {
          this.scroll= document.body.scrollTop;
        }
        else{
          this.scroll= document.documentElement.scrollTop
        }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.getScroll)
  },
  watch: {
    scroll: function(val) {
      if (val > this.scrollLimit) {
        this.scrollShow = true
      } else {
        this.scrollShow = false
      }
    }
  }
}

</script>