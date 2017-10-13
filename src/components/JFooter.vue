<style lang="less" scoped>
.j-footer {
	width: 100%;
  background-color: #333;
  .items {
    display: flex;
    padding-top: 62px;
    width: 1238px;
    height: 309px;
    margin: 0 auto;
    justify-content: space-between;

    .infos {
      width: 452px;
      display: flex;
      justify-content: space-between;
      div {
        text-align: left;
        h3 {
          font-size: 18px;
          color: #eee;
          margin-bottom: 34px;
        }
        p {
          font-size: 14px;
          color: #999;
          margin-bottom: 22px;
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }

    .qr-codes {
      width: 313px;
      display: flex;
      justify-content: space-between;
      div {
        width: 115px;
        text-align: center;
        img {
          display: block;
          width: 100%;
          margin-bottom: 16px;
        }
        p {
          font-size: 14px;
          color: #eee;
        }
      }
    }

    .phone {
      display: flex;
      img {
        display: block;
        margin-right: 18px;
        width: 44px;
        height: 44px;
      }
      p {
        font-size: 18px;
        color: #eee;
      }
    }
  }
  .footbar {
    text-align: center;
    width: 100%;
    height: 86px;
    background-color: #222;
    color: #999;
    padding-top: 22px;
    &:hover {
      color: #eee;
    }
  }
}
</style>

<template>
	<div class="j-footer">
		<div class="items">
      <div class="infos">
        <div v-for="info in footers">
          <h3>{{info.title}}</h3>
          <p v-for="text in info.items">{{text}}</p>
        </div>
      </div>
      <div class="qr-codes">
        <div>
          <img src="/static/wechat.jpg">
          <p>关注微信公众号</p>
          <p>获取更多服务</p>
        </div>
        <div>
          <img src="/static/weibo.jpg">
          <p>居分期官方微博</p>
        </div>
      </div>
      <div class="phone">
        <img src="/static/phone.png">
        <div>
          <p>客服电话</p>
          <p>400-039-0808</p>
        </div>
      </div>
    </div>
		<div class="footbar">
      <span>Copyright© 2015-2016 All Right Reserved 居分期电子商务有限公司<br/>
      隐私权政策 京ICP备15041706号-1</span>
    </div>
	</div>
</template>

<script>

export default {
  name: 'j-footer',
  components: {
  },
  data () {
    return {
      footers: [{
      	title: '购物指南',
      	items: ['常见问题', '购买流程', '联系我们', '客服服务']
      },{
      	title: '个性整装',
      	items: ['家装日记', '家装攻略', '家装案例']
      },{
        title: '友情链接',
        items: ['一生家', '奔跑吧装修', '博洛尼']
      },],
    }
  }
}
</script>