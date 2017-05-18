<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@border-big: #999;
@border-lit: #ebebeb;
@main: #f3a944;
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.steps{
    margin: 30px auto 60px;
    p{
      color: #c3c3c3;
      font-size: 14px;
      text-align: center;
      margin-bottom: 30px;
    }
    &>div{
      display: flex;
      justify-content: space-between;
      span{
        display: block;
        width: 100px;
        text-align: center;
        font-size: 16px;
        color: #c3c3c3;
        img{
          display: block;
          margin-bottom: 10px;
          height: 100px;
          width: 100px;
        }
      }
      div{
        cursor: pointer;
        &:hover{
          span{
            color: @main;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="foreman-detail">
    <get-price></get-price>
    <div class="card-wrapper">
      <design-card :sample="card" v-for="card in cards"></design-card>
    </div>
    <div class="steps" >
      <p>
        选择您当前所处的阶段可以找到您可能需要的服务
      </p>
      <div id="steps">
        <div v-for="step in steps" @mouseleave.stop="mouseLeave()" @mouseenter.stop="mouseEnter()">
          <span>
            <img :src="step.imgurl" v-if="!hover">
            <img :src="step.imgurlAct" v-if="hover">
            {{step.name}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GetPrice from '@/components/GetPrice'
import DesignCard from '@/components/DesignCard'

export default {
  name: 'foreman-detail',
  data () {
    return {
      hover: false,
      cards: [{
        id: 0,
        imgUrl: 'https://source.unsplash.com/random',
        community: '北京王硕听了都想打人小区',
        price: '10000',
        dcMethod: 1,
        logo: 'https://source.unsplash.com/random',
        time: 1463033653,
        house: '三室一厅一卫',
        company: '北京王硕被打的稀碎公司'
      },{
        id: 1,
        imgUrl: 'https://source.unsplash.com/random',
        community: '北京王硕听了都想打人小区',
        price: '10000',
        dcMethod: 1,
        logo: 'https://source.unsplash.com/random',
        time: 1473033653,
        house: '三室一厅一卫',
        company: '北京王硕被打的满脸血公司'
      },{
        id: 2,
        imgUrl: 'https://source.unsplash.com/random',
        community: '北京王硕冲了上去小区',
        price: '10000',
        dcMethod: 1,
        logo: 'https://source.unsplash.com/random',
        time: 1483033653,
        house: '三室一厅一卫',
        company: '北京王硕被打的稀碎公司'
      },{
        id: 3,
        imgUrl: 'https://source.unsplash.com/random',
        community: '北京王硕听了都想打人小区',
        price: '10000',
        dcMethod: 1,
        logo: 'https://source.unsplash.com/random',
        time: 1463033653,
        house: '三室一厅一卫',
        company: '北京王硕被打成猪头公司'
      },{
        id: 4,
        imgUrl: 'https://source.unsplash.com/random',
        community: '北京王硕听了都想打人小区',
        price: '10000',
        dcMethod: 1,
        logo: 'https://source.unsplash.com/random',
        time: 1463033653,
        house: '三室一厅一卫',
        company: '北京王硕被打的稀碎公司'
      },{
        id: 5,
        imgUrl: 'https://source.unsplash.com/random',
        community: '北京王硕听了都想打人小区',
        price: 10000,
        dcMethod: 1,
        logo: 'https://source.unsplash.com/random',
        time: 1473033653,
        house: '三室一厅一卫',
        company: '北京王硕被打的满脸血公司'
      },{
        id: 6,
        imgUrl: 'https://source.unsplash.com/random',
        community: '北京王硕冲了上去小区',
        price: '10000',
        dcMethod: 1,
        logo: 'https://source.unsplash.com/random',
        time: 1483033653,
        house: '三室一厅一卫',
        company: '北京王硕被打的稀碎公司'
      }],
      steps: [{
          imgurl: "/static/imgIndex/step1.png",
          imgurlAct: "/static/imgIndex/step1-active.png",
          name: "准备阶段"
        },{
          imgurl: "/static/imgIndex/step2.png",
          imgurlAct: "/static/imgIndex/step2-active.png",
          name: "装修公司"
        },{
          imgurl: "/static/imgIndex/step3.png",
          imgurlAct: "/static/imgIndex/step3-active.png",
          name: "设计阶段"
        },{
          imgurl: "/static/imgIndex/step4.png",
          imgurlAct: "/static/imgIndex/step4-active.png",
          name: "建材选购"
        },{
          imgurl: "/static/imgIndex/step5.png",
          imgurlAct: "/static/imgIndex/step5-active.png",
          name: "施工阶段"
        },{
          imgurl: "/static/imgIndex/step6.png",
          imgurlAct: "/static/imgIndex/step6-active.png",
          name: "家居选购"
        }]
    }
  },
  components: {
    GetPrice,
    DesignCard
  },
  methods: {
    mouseLeave() {
      this.hover = false
    },
    mouseEnter() {
      this.hover = true
    }
  }
}
</script>
