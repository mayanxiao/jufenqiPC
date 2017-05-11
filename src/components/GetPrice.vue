<style lang="less">
  .get-price {
    width: 100%;
    border: 1px solid #ccc;
    display: flex;
    .title-wrapper {
      width: 150px;
      text-align: center;
      .title-label {
        height: 150px;
        border: 1px solid #ccc;
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
          width: 554px;
          border-radius: 5px;
          border: 1px solid #ccc;
          text-align: center;
          outline: medium;
          &::placeholder {
            text-align: center;
          }
        }
      }
    }
  }

</style>

<template>
	<div class="get-price">
    <div class="title-wrapper">
      <div class="title-label"><span style="margin-top: 63px;">在线报价</span></div>
      <div class="title-label"><span>免费验房、<br/>量房、设计</span></div>
    </div>
    <div class="form-wrapper">
      <el-form ref="form" :model="form" label-width="70px">
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
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'get-price',
    data () {
      return {
        form: {

        }
      }
    },
    methods: {
      isPick() {
        return document.getElementById('neighbor').focus()
      },
    }
  }
</script>