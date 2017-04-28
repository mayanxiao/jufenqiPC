<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.navbar {
  width: 100%;
  height: 250px;
}
.nav-wrapper {
  min-width: 1220px;
  width: 62.6%;
  margin: 0 auto;
  height: 100%;
  padding: 48px 0;
  position: relative;
  border: 1px solid #ccc;
}
/**
 *  输入框
 */
.input-wrapper {
  width: 50%;
  height: 60px;
  margin: 0 auto;
  display: flex;
  position: relative;
  input {
    width: 80%;
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
    width: 20%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    background-color: #ff9736;
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
  width: 60%;
  height: 50px;
  line-height: 50px;
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
    height: 50px;
    text-align: center;
    position: relative;
    cursor: pointer;
    &:hover .sub-list .sub-item{
      visibility: visible;
      height: 50px;
      opacity: 1;
    }
    &:hover .sub-list {
      border: 1px solid #ccc;
    }
    .sub-list {
      width: 100%;
      position: absolute;
      top: 50px;
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
</style>

<template>
  <div class="navbar">
    <div class="nav-wrapper">
      <div class="input-wrapper">
        <input type="text" placeholder="请输入您要搜索的内容">
        <div class="input_btn">搜索</div>
        <div class="input-tip">
          <div class="input-join">入驻</div>
          <div class="login-signin"><span>登录</span>/<span>注册</span></div>
        </div>
      </div>
      <div class="nav-list">
        <div class="nav-item" v-for="nav in navList">
          {{nav.name}}
          <div class="sub-list">
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
  }
}
</script>
