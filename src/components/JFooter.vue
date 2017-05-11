<style lang="less" scoped>
.j-footer {
	width: 100%;
  min-width: 1220px;
  margin-top: 76px;
	img {
    width: 100%;
    height: 44px;
    display: block;
	}
  .items {
    display: flex;
    padding: 10px 0 20px 0;
    width: 90%;
    margin: 0 auto;
    justify-content: space-between;
  }
  .qr-wrapper {
    text-align: center;
    width: 13%;
    border: 1px solid #ccc;
    img {
      display: block;
      width: 140px;
      height: 140px;
      margin: 0 auto;
      padding-bottom: 10px;
    }
  }
  .footbar {
    padding: 10px;
    display: flex;
    .footbar-item {
      width: 7.9%;
      text-align: center;
      border-right: 1px solid #000;
      font-size: 12px;
      &:last-child {
        border: none;
      }
    }
  }
  .info-wrapper {
    padding: 20px 0;
    .info {
      width: 70%;
      font-size: 14px;
      margin: 0 auto;
    }
  }
  .friend-site {
    padding: 20px 0;
    .site-wrapper {
      width: 60%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .friend-site {
        display: flex;
        width: 135px;
        padding: 0 10px;
        img {
          display: block;
          width: 40px;
          height: 40px;
          margin-right: 20px;
          padding-top: 5px;
        }
        .site-info {
          font-size: 12px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>

<template>
	<div class="j-footer">
		<img src="http://placehold.it/350x150">
		<div class="items">
			<j-footer-item :title="item.title" :data="item.items" v-for="item in footers"></j-footer-item>
      <div class="qr-wrapper">
        <img src="http://placehold.it/70x70">
        关注我们
      </div>
    </div>
		<div class="footbar">
      <div class="footbar-item" v-for="word in footbars">{{word}}</div>
    </div>
    <div class="info-wrapper">
      <div class="info">上岛咖啡吉林省肯德基弗兰克时间到了副科级水电费了看似简单菲利克斯极度分裂水电费了开始极度分裂看似简单付款了施蒂利克就分手了的咖啡机水电费了空间来看是的发送到六块腹肌市领导方式的离开房间了开始极度分裂看似简单弗兰克施蒂利克副驾驶的李开复聚少离多法律思考的解放路速度快烦死了都快捷方式了肯定费来看来看</div>
    </div>
    <div class="friend-site">
      <div class="site-wrapper">
        <div class="friend-site" v-for="site in sites">
          <img :src="site.logo">
          <div class="site-info">{{site.info}}</div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
import JFooterItem from '@/components/JFooterItem'

export default {
  name: 'j-footer',
  components: {
  	JFooterItem
  },
  data () {
    return {
      footers: [{
      	title: '选购指南',
      	items: ['会员注册', '如何订购', '如何支付']
      },{
      	title: '装修服务',
      	items: ['居装宝', '第三方免费监理']
      },{
        title: '支付方式',
        items: ['分期付款', '在线支付', '公司汇款']
      },{
        title: '购物保障',
        items: ['正品保障', '现行赔付', '价高赔偿', '投诉维权']
      },{
        title: '售后服务',
        items: ['售后政策', '退款说明', '返修/换货']
      },{
        title: '平台入驻',
        items: ['品牌入驻', '工长入驻', '店铺入驻']
      }],
      footbars: ['营销中心','营销中心','营销中心','营销中心','营销中心','营销中心','营销中心','营销中心','营销中心','营销中心','营销中心','营销中心','营销中心'],
      sites: [{
        logo: 'http://placehold.it/70x70',
        info: '来啊，快活啊，反正有~大把时光~'
      },{
        logo: 'http://placehold.it/70x70',
        info: '来啊，快活啊，反正有~大把时光~'
      },{
        logo: 'http://placehold.it/70x70',
        info: '来啊，快活啊，反正有~大把时光~'
      },{
        logo: 'http://placehold.it/70x70',
        info: '来啊，快活啊，反正有~大把时光~'
      },{
        logo: 'http://placehold.it/70x70',
        info: '来啊，快活啊，反正有~大把时光~'
      }]
    }
  }
}
</script>