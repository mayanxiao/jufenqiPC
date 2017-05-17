<style lang="less" scoped>
@main: #f3a944;

  .get-price {
    width: 100%;
    border: 1px solid #ebebeb;
    display: flex;
    .title-wrapper {
      width: 150px;
      text-align: center;
      .title-label {
        height: 150px;
        span {
          margin-top: 52px;
          display: inline-block;
        }
      }
    }
    .form-wrapper {
      background-color: #f5f5f5;
      width: calc(~"100% - 150px");
      padding: 10px 16px;
      position: relative;
      .form-select {
        display: flex;

        .el-form-item__content {
          margin-left: 30px !important;
          display: flex;
          &>.el-input {
            width: 22% !important;
          }
        }
        .form-input {
          width: 563px;
          height: 36px;
          border-radius: 5px;
          border: 1px solid #bfcbd9;
          text-align: center;
          outline: none;
          display: inline-block;
          padding-top: 2px;
          transition: border-color 0.1s cubic-bezier(.645,.045,.355,1);
          &::placeholder {
            text-align: center;
          }
          &:focus {
            border-color: @main;
          }
        }
        .input-wrapper {
          width: 392px;
          display: flex;
          justify-content: space-between;
        }
      }
      .btn-wrapper {
        width: 197px;
        position: absolute;
        top: 10px;
        right: 10px;
        .btn {
          background-color: @main;
          color: #fff;
          text-align: center;
          border-radius: 10px;
          margin-bottom: 10px;
          p {
            margin: 0;
            font-size: 15px;
          }
        }
        .btn-sec {
          color: @main;
          text-align: center;
          border-radius: 10px;
          margin-top: 10px;
          border: 1px solid @main;
        }
        .p-text {
          font-size: 12px;
          color: #2d2d2d;
          margin-bottom: 10px;
          text-align: center;
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
	<div class="get-price">
    <div class="title-wrapper">
      <div class="title-label active"><span style="margin-top: 63px;">在线报价</span></div>
      <div class="title-label"><span>免费验房<br/>量房设计</span></div>
    </div>
    <div class="form-wrapper">
      <el-form ref="form" :model="form">
        <!-- 房屋户型 -->
        <el-form-item label="房屋户型" class="form-select">
            <el-select v-model="form.bedroom" placeholder="2室">
              <el-option label="1室" value="1B"></el-option>
              <el-option label="2室" value="2B"></el-option>
              <el-option label="3室" value="3B"></el-option>
              <el-option label="4室" value="4B"></el-option>
              <el-option label="5室" value="5B"></el-option>
            </el-select>
            <el-select v-model="form.livingroom" placeholder="2厅">
              <el-option label="1厅" value="1L"></el-option>
              <el-option label="2厅" value="2L"></el-option>
              <el-option label="3厅" value="3L"></el-option>
            </el-select>
            <el-select v-model="form.bathroom" placeholder="2卫">
              <el-option label="1卫" value="1WC"></el-option>
              <el-option label="2卫" value="2WC"></el-option>
            </el-select>
            <el-input v-model="form.name" placeholder="请输入房屋面积"></el-input>
        </el-form-item>
        <!-- 地区选择 -->
        <el-form-item label="装修城市" class="form-select">
          <el-select v-model="form.city" placeholder="北京">
            <el-option label="北京" value="1L"></el-option>
            <el-option label="上海" value="2L"></el-option>
            <el-option label="天津" value="3L"></el-option>
          </el-select>
          <input type="text" placeholder="请输入小区名称" class="form-input" id="neighbor">
        </el-form-item>
        <!-- 风格选择 -->
        <el-form-item label="装修风格" class="form-select">
          <el-radio class="radio" v-model="form.style" label="1">现代简约</el-radio>
          <el-radio class="radio" v-model="form.style" label="2">欧美风格</el-radio>
          <el-radio class="radio" v-model="form.style" label="3">田园风格</el-radio>
          <el-radio class="radio" v-model="form.style" label="4">地中海风格</el-radio>
          <el-radio class="radio" v-model="form.style" label="5">中式风格</el-radio>
          <el-radio class="radio" v-model="form.style" label="6">其他风格</el-radio>
        </el-form-item>
        <!-- 装修套系 -->
        <el-form-item label="装修套系" class="form-select">
          <el-radio class="radio" v-model="form.pack" label="1">拎包装</el-radio>
          <el-radio class="radio" v-model="form.pack" label="2">尊享家</el-radio>
        </el-form-item>
        <!-- 您的称呼 -->
        <el-form-item label="您的称呼" class="form-select" style="width: 100%">
          <div class="input-wrapper">
            <input type="text" placeholder="请输入您的称呼" class="form-input" v-model="form.username" style="width: 49.4%">
            <input type="text" placeholder="请输入您的手机" class="form-input" v-model="form.usermobile" style="width: 49.4%">
          </div>
        </el-form-item>
      </el-form>
      <div class="btn-wrapper">
        <div class="btn" style="height: 70px;">
          <p :style="lineHeight(1)">您的家装预算为</p>
          <p :style="lineHeight(2)">888888元</p>
        </div>
        <div class="p-text">以上价格仅供参考，实际价格以最终报价为准</div>
        <div class="btn" :style="btnHeight(44)">智能系统报价</div>
        <div class="btn-sec" :style="btnHeight(44)">人工精准报价</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'get-price',
    data () {
      return {
        form: {
          style: '1',
          pack: '1'
        }
      }
    },
    methods: {
      isPick() {
        return document.getElementById('neighbor').focus()
      },
    },
    mounted() {

    },
    computed: {
      
    },
    methods: {
      lineHeight(type) {
        let ret = {}
        switch (type) {
          case 1: 
            ret.lineHeight = '37px'
            break
          case 2:
            ret.lineHeight = '20px'
            ret.fontSize = '20px'
        }
        return ret
      },
      btnHeight(height) {
        let ret = {}
        ret.height = height + 'px'
        ret.lineHeight = height + 'px'
        ret.marginTop = '35px'
        return ret
      }
    }
  }
</script>