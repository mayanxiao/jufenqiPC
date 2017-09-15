<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@main: #ff9736;
@border: #bfcbd9;
.navbar {
  width: 100%;
  height: 88px;
  position: fixed;
  z-index: 99;
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
      line-height: 88px;
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
    line-height: 88px;
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
      top: 36px;
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
  .item-wp {
    width: 1238px;
    position: relative;
    display: flex;
    margin: 0 auto;
    span  {
      cursor: pointer;
      font-size: 18px;
      color: #666;
      position: absolute;
      &:hover {
        color: @main;
      }
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
    <div class="nav-wrapper" @mouseenter="scroll <= scrollLimit?scrollShow = true:scrollShow = scrollShow" @mouseleave="scroll <= scrollLimit?scrollShow = false:scrollShow = scrollShow">
      <div class="img-logo" v-if="scrollShow" ><img src="/static/logo.png"></div>
      <div class="img-logo" v-if="!scrollShow" ><img src="/static/logo-static.png"></div>
      <div class="nav-list" id="navLi" :style="setMargin(scrollShow)">
        <div class="nav-item" v-for="(nav, $index) in navList" @mouseenter="subChange($index)" @mouseleave="subChange($index)" :style="setColor(scrollShow)" @click="goto(nav.url)">{{nav.name}}</div>
        <div class="login" style="margin-left: 15px;" v-if="scrollShow&&!signSuccess"><span @click="signChange(0)">登录</span></div>
        <div class="login" style="padding: 0 0 0 28px;" v-if="scrollShow&&!signSuccess">
          <span @click="signChange(1)">注册</span>
          <div class="line"></div>
        </div>
        <div class="login" v-if="scrollShow&&signSuccess">
          <span style="cursor: default; font-size: 12px;">欢迎！{{signName}}</span>
        </div>
      </div>
    </div>
    <div class="sub-list" v-if="subShow" @mouseleave="scroll <= scrollLimit?change():subShow = false" @mouseenter="scrollShow = true">
      <div class="item-wp">
        <span style="right: 494px;" @click="goto('/dc-diary')">家装日记</span>
        <span style="right: 375px;" @click="goto('/case-dc')">家装案例</span>
        <span style="right: 257px;" @click="goto('/dc-strategy')">家装攻略</span>
      </div>
    </div>
    <sign :sign="sign"></sign>
  </div>
</template>

<script>
import Sign from '@/components/Sign'
import axios from 'axios'

export default {
  data () {
    return {
      tabIndex: 0,
      scroll: '',
      scrollLimit: document.body.clientWidth * 650/1920,
      scrollShow: false,
      subShow: false,
      sign: {
        signShow: false,
        signIndex: 0,
        userName: ''
      },
      signName: '',
      signSuccess: false,
      navList: [{
        name: '首页',
        url: '/',
      },{
        name: '家装分期',
        url: '/installment',
      },{
        name: '家装指南',
      },{
        name: '个人中心',
        url: '/user'
      }]
      // {
      //   name: '产品商城',
      //   url: '/mall',
      // },
    }
  },
  components: {
    Sign
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
    },
    signChange(id) {
      this.sign.signShow = true
      this.sign.signIndex = id
    }
  },
  mounted() {
    window.addEventListener('scroll', this.getScroll)
    if (localStorage.getItem('userName')&&localStorage.getItem('userInfo')) {
      this.signSuccess = true
      this.signName = JSON.parse(localStorage.getItem('userName')).name
      axios.defaults.headers.common['Authorization'] = `${JSON.parse(localStorage.getItem('userInfo')).tokenType} ${JSON.parse(localStorage.getItem('userInfo')).token}`
    } else {
      this.signSuccess = false
    }
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