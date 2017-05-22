<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.hh {
  width: 50%;
  height: 400px;
  background-color: #000;
  margin-bottom: 60px;
  /* transform: rotate3d(1, 2.0, 3.0, 10deg); */
  transform: perspective(17px);
}
</style>

<template>
  <div class="foreman-detail">
    <get-price></get-price>
    <div class="card-wrapper">
      <design-card :sample="card" v-for="card in cards"></design-card>
    </div>
    <div class="hh"></div>
  </div>
</template>

<script>
import GetPrice from '@/components/GetPrice'
import DesignCard from '@/components/DesignCard'

export default {
  name: 'foreman-detail',
  data () {
    return {
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
      },]
    }
  },
  components: {
    GetPrice,
    DesignCard
  }
}
</script>
