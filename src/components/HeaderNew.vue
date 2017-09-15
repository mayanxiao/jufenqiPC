<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@main: #ff9736;
@border: #bfcbd9;
.navbar {
  width: 100%;
  height: 88px;
  transition: all 0.7s ease;
  background-color: #fff;
  box-shadow: 0px 1px 11px 1px rgba(0, 0, 0, 0.1);
}
.nav-wrapper {
  width: 1238px;
  margin: 0 auto;
  height: 100%;
  position: relative;
  justify-content: space-between;
  display: flex;
  overflow: hidden;
  background-color: #fff;
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
    .nav-item {
      width: 119px;
      height: 100%;
      line-height: 88px;
      font-size: 18px;
      text-align: center;
      color: #666;
      cursor: pointer;
      position: relative;
      .underline {
        width: calc(~"100% - 40px");
        height: 3px;
        position: absolute;
        bottom: 0;
        left: 20px;
        background-color: @main;
        display: none;
      }
      &:hover {
        color: @main;
      }
      &:hover .underline {
        display: block;
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
  <div class="navbar" id="NavBar">
    <div class="nav-wrapper">
      <div class="img-logo"><img src="/static/logo.png"></div>
      <div class="nav-list" id="navLi">
        <div class="nav-item" v-for="(nav, $index) in navList" @mouseenter="subChange($index)" @mouseleave="subChange($index)" @click="goto(nav.url)">
          {{nav.name}}
          <div class="underline"></div>
        </div>
        <div class="login" style="margin-left: 15px;" v-if="!signSuccess"><span @click="signChange(0)">登录</span></div>
        <div class="login" style="padding: 0 0 0 28px;" v-if="!signSuccess">
          <span @click="signChange(1)">注册</span>
          <div class="line"></div>
        </div>
        <div class="login" v-if="signSuccess">
          <span style="cursor: default; font-size: 12px;">欢迎！{{signName}}</span>
        </div>
      </div>
    </div>
    <div class="sub-list" v-if="subShow" @mouseleave="subShow = false">
      <div class="item-wp">
        <span style="right: 479px;" @click="goto('/dc-diary')">家装日记</span>
        <span style="right: 360px;" @click="goto('/case-dc')">家装案例</span>
        <span style="right: 242px;" @click="goto('/dc-strategy')">家装攻略</span>
      </div>
    </div>
    <sign :sign="sign"></sign>
  </div>
</template>

<script>
import Sign from '@/components/Sign'
import axios from 'axios'

export default {
  name: 'HeaderNew',
  components: {
    Sign
  },
  data () {
    return {
      tabIndex: 0,
      scrollLimit: document.body.clientWidth * 800/1920,
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
      console.log(id)
      if (id == 2) {
        this.subShow = true
      } else {
        this.subShow = false
      }
    },
    signChange(id) {
      this.sign.signShow = true
      this.sign.signIndex = id
    },
  },
  mounted() {
    if (localStorage.getItem('userName')&&localStorage.getItem('userInfo')) {
      this.signSuccess = true
      this.signName = JSON.parse(localStorage.getItem('userName')).name
      axios.defaults.headers.common['Authorization'] = `${JSON.parse(localStorage.getItem('userInfo')).tokenType} ${JSON.parse(localStorage.getItem('userInfo')).token}`
    } else {
      this.signSuccess = false
    }
  },
  watch: {
  }
}

</script>