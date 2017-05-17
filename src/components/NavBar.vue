<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@main: #ffb400;

.navbar {
  width: 100%;
  height: 188px;
  border-bottom: 1px solid @main;
  position: relative;
  z-index: 1000;
}
.nav-wrapper {
  min-width: 1220px;
  width: 62.6%;
  margin: 0 auto;
  height: 100%;
  padding: 48px 0;
  position: relative;
  .img-logo {
    position: absolute;
    top: 40px;
    left: 40px;
  }
}
/**
 *  输入框
 */
.input-wrapper {
  width: 60%;
  height: 34px;
  margin: 0 auto;
  display: flex;
  position: relative;
  margin-top: 20px;
  input {
    width: 92%;
    height: 100%;
    padding: 10px 16px;
    font-size: 20px;
    color: #999;
    &::placeholder {
      font-size: 20px;
      color: #ccc;
    }
  }
  .input_btn {
    width: 8%;
    height: 34px;
    line-height: 34px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    background-color: @main;
    cursor: pointer;
  }
  .input-tip {
    position: absolute;
    display: flex;
    width: 30%;
    justify-content: space-around;
    top: 50%;
    left: 105%;
    transform: translateY(-50%);
    font-weight: bold;
    .input-join {
      cursor: pointer;
    }
    span {
      cursor: pointer;
    }
  }
}
/**
 * 导航栏
 */
 .nav-list {
  width: 100%;
  height: 44px;
  line-height: 44px;
  font-size: 18px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  color: #000;
  display: flex;
  justify-content: space-around;
  .nav-item {
    width: 16.7%;
    height: 44px;
    text-align: center;
    position: relative;
    cursor: pointer;
    &:hover .sub-list .sub-item{
      visibility: visible;
      height: 44px;
      opacity: 1;
      background-color: @main;
      color: #fff;
      border-bottom: 1px solid #fff;
    }
    &:hover .black {
      transform: rotate(180deg);
    }
    &:hover {
      background-color: @main;
      color: #fff;
    }
    .name-wrapper {
      position: relative;
      span {
        position: absolute;
        width: 12px;
        height: 6px;
        top: 9px;
        right: -23px;
        transition: all 0.5s;
      }
    }
    .sub-list {
      width: 100%;
      position: absolute;
      top: 46px;
      left: 0;
      transition: all .5s ease;
      .sub-item {
        height: 0px;
        opacity: 0;
        text-align: center;
        line-height: 50px;
        color: #000;
        visibility: hidden;
        cursor: pointer;
        transition: all .5s ease;
      }
    }
  }
 }
 .active {
    background-color: @main;
    color: #fff;
 }
 .black{
  img{
    display: block;
  }
 }
</style>

<template>
  <div class="navbar">
    <div class="nav-wrapper">
      <div class="img-logo"><img src="/static/pressionimgs/logo.png"></div>
      <div class="input-wrapper">
        <input type="text" placeholder="请输入您要搜索的内容">
        <div class="input_btn">搜索</div>
        <div class="input-tip">
          <div class="input-join">入驻</div>
          <div class="login-signin"><span>登录</span>/<span>注册</span></div>
        </div>
      </div>
      <div class="nav-list">
        <div class="nav-item" v-for="(nav, id) in navList" :class="{'active': isTab(id)}" @click="tabIndex = id">
          <span class="name-wrapper">
            {{nav.name}}
            <span v-if="ifHasSub(nav.subNav)" class="black"><img src="/static/pressionimgs/bigarrowup.png"></span>
          </span>
          
          <div class="sub-list" :class="{'active': isTab(id)}">
            <div class="sub-item" v-for="sub in nav.subNav">{{sub.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      tabIndex: 0,
      navList: [{
        name: '首页',
        subNav: []
      },{
        name: '效果图',
        subNav: [{
          name: '风格美图'
        },{
          name: '案例美图'
        }]
      },{
        name: '装修讲堂',
        subNav: [{
          name: '装修日记'
        },{
          name: '好物评测'
        },{
          name: '好物发现'
        },{
          name: '装修大学'
        },{
          name: '居分期排行'
        }]
      },{
        name: '找装修',
        subNav: [{
          name: '装修公司'
        },{
          name: '主材包'
        },{
          name: '家装贷款'
        }]
      },{
        name: '建材家居',
        subNav: [{
          name: '买建材'
        },{
          name: '居分期排行'
        },{
          name: '家装贷款'
        }]
      },{
        name: '免费服务',
        subNav: []
      },]
    }
  },
  methods: {
    ifHasSub(sub) {
      return sub.length !== 0
    },
    isTab(id) {
      return id == this.tabIndex
    }

  }
}
</script>
