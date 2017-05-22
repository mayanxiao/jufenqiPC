<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@main: #ff9736;
@back: #ebebeb;
html {
  background-color: #fff;
}
.foreman {
  .foreman-card {
    width: 100%;
    height: 222px;
    background-color: #ebebeb;
  }
}
.container {
  width: 1230px;
  margin: 0 auto;
}
.card-label {
  display: flex;
  padding-top: 46px;
  .cover {
    width: 100px;
    height: 130px;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .name-wrapper {
    width: 270px;
    height: 100px;
    padding-left: 20px;
    .name {
      margin-bottom: 5px;
    }
    .authorize {
      width: 80px;
      font-size: 12px;
      height: 20px;
      margin: 8px 0;
      display: flex;
      justify-content: space-between;
      line-height: 20px;
      img {
        width: 20px;
        height: 20px;
        display: block;
      }
    }
    .skilled {
      display: flex;
      font-size: 12px;
      .label {
        margin-right: 10px;
      }
      .skill-con {
        width: 150px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .skill-item {
          width: 72px;
          padding: 2px 0;
          background-color: #ccc;
          margin-bottom: 5px;
          text-align: center;
          border-radius: 5px; 
        }
      }
    }
  }
  .user-count {
    width: 300px;
    height: 90px;
    border: 1px solid #999;
    border-top: none;
    border-bottom: none;
    margin-top: 20px;
    p{
      text-align: center;
      span {
        font-size: 24px;
      }
    }
  }
  .btn-wrapper {
    width: 260px;
    height: 100px;
    position: relative;
    .btn {
      width: 150px;
      height: 36px;
      text-align: center;
      line-height: 36px;
      background-color: @main;
      color: #fff;
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
.content {
  width: 902px;
  float: left;
  padding-top: 30px;
  .intro-wrapper {
    padding-left: 16px;
    margin-bottom: 18px;
    .p-title {
      margin-bottom: 33px;
      font-size: 16px;
    }
    .subtitle {
      font-size: 12px;
      width: 750px;
    }
  }
  .intro-card {
    width: 100%;
    height: 143px;
    background-color: @back;
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
    padding-left: 50px;
    font-size: 14px;
    .intro-item {
      width: 284px;
    }
  }
  .photo-wrapper {
    padding-top: 30px;
    width: 100%;
    .photo {
      width: 100%;
      height: 300px;
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  .exp {
    padding-top: 30px;
    width: 100%;
    position: relative;
    p {
      text-align: center;
      position: absolute;
      width: 100%;
      top: 30px;
      left: 0;
    }
    .exp-list {
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      .exp-item {
        width: 170px;
        height: 53px;
        text-align: center;
        font-size: 18px;
        line-height: 53px;
        background-color: @back;
      }
    }
  }
  .sample {
    padding-top: 30px;
    .card-wrapper {
      display: flex;
      justify-content: space-between;
      .sam-card {
        width: 288px;
        height: 472px;
        img {
          width: 100%;
          height: 300px;
          display: block;
        }
        .card-con {
          width: 100%;
          height: 172px;
          border: 1px solid @back;
          padding: 20px;
          .line {
            display: flex;
            justify-content: space-between;
            height: 40px;
            line-height: 20px;
            border-bottom: 1px solid @back;
          }
          .line-1 {
            display: flex;
            justify-content: space-around;
            height: 60px;
            line-height: 60px;
          }
          .gray {
            color: #999;
          }
          .btn {
            width: 100%;
            height: 36px;
            text-align: center;
            line-height: 36px;
            border: 1px solid @back;
            background-color: @main;
          }
        }
      }
    }
  }
  .assess {
    padding-top: 30px;
    margin-bottom: 30px;
    .assess-wrapper {
      width: 100%;
      height: 193px;
      display: flex;
      background-color: @back;
      padding-top: 23px;
      .left {
        width: 50%;
        text-align: center;
        .score {
          font-size: 55px;
        }
      }
      .right {
        width: 50%;
        text-align: center;
        .rateWrapper {
          width: 400px;
          height: 150px;
          margin: 0 auto;
        }
      }
    }
  }
  // heihei
  .comment {
    padding-top: 30px;
    .comment-wrap {
      display: flex;
      width: 100%;
      height: 200px;
      padding-left: 16px;
      border-bottom: 1px solid #999;
      position: relative;
      .com-tip {
        position: absolute;
        padding: 3px 5px;
        display: flex;
        img {
          width: 20px;
          height: 20px;
          display: block;
        }
        span {
          color: #999;
        }
      }
      .img-wrap {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        img {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .comment-con {
        width: calc(~"100% - 150px");
        height: 200px;
        padding-left: 10px;
        .com-title {
          font-size: 18px;
        }
        .com-intro {
          font-size: 14px;
          color: #999;
          margin-bottom: 30px;
        }
        .com-text {
          font-size: 14px;
        }
      }
    }
  }
  .user-com {
    padding-top: 30px;

  }
}
.sidebar {
  width: 308px;
  float: right;
  height: 700px;
  padding-top: 60px;
}
.title {
  margin-bottom: 30px;
  padding-left: 16px;
}
.btn-ct {
  background-color: @back;
  text-align: center;
  width: 200px;
  height: 36px;
  line-height: 36px;
  margin: 50px auto 30px;
}
.title-sp {
  display: inline-block;
  margin-left: 50px;
}
</style>
<style>
.left .el-rate__item i{
  font-size: 30px;
  font-weight: lighter;
}
</style>
<template>
  <div class="foreman">
  <!-- 顶部介绍部分 -->
    <div class="foreman-card">
      <div class="container">
        <div class="card-label">
          <div class="cover"><img src="/static/foreman/testFrog.png"></div>
          <div class="name-wrapper">
            <div class="name">保健锋</div>
            <el-rate
              disabled
              v-model="foremanRate"
              disabled-void-color="#fff"
              :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate>
            <div class="authorize">
              <img src="https://source.unsplash.com/random">
              实名认证
            </div>
            <div class="skilled">
              <div class="label">擅长</div>
              <div class="skill-con">
                <div class="skill-item" v-for="item in skillItems">{{item}}</div>
              </div>
            </div>
          </div>
          <div class="user-count">
            <p :style="setStyle(0)"><span>245</span>次</p>
            <p :style="setStyle(1)">累计服务次数</p>
          </div>
          <div class="user-count" style="border-left: none">
            <p :style="setStyle(0)"><span>55</span>次</p>
            <p :style="setStyle(1)">近90天服务次数</p>
          </div>
          <div class="btn-wrapper">
            <div class="btn">就选TA</div>
          </div>
        </div>
      </div>
    </div>
<!-- 下方工长资料 -->
    <div class="container">
      <div class="content">
        <div class="intro-wrapper">
          <div class="p-title">基本资料</div>
          <div class="subtitle" style="margin-bottom: 10px;">个人成长经历</div>
          <div class="subtitle">是两地分居熟练度空间放上来的积分是登录开发及是两地分居是两地分居死定了房间是登录开发及是两地分居水电费了看似简单发牢骚大法师了丰盛的法律手段交付说的覅接待来访是老地方老师看带附加来得及弗兰克的积分试了试解放东路浪费</div>
        </div>
        <div class="intro-card">
          <div class="intro-item" v-for="card in introCards">{{card.label}}：{{card.value}}</div>
        </div>
        <div class="photo-wrapper">
          <div class="title">TA的荣誉</div>
          <div class="photo">
            <img src="https://source.unsplash.com/random">
          </div>
        </div>
        <div class="photo-wrapper">
          <div class="title">TA的团队</div>
          <div class="photo">
            <img src="https://source.unsplash.com/random">
          </div>
        </div>
        <div class="exp">
          <div class="title">从业经历</div>
          <p>TA装修过的小区</p>
          <div class="exp-list" v-for="company in expList">
            <div class="exp-item" :style="isFirst(index)" v-for="(exp,index) in company.exps">{{exp}}</div>
          </div>
          <div class="btn-ct">收起详情</div>
        </div>
        <div class="sample">
          <div class="title">TA的案例</div>
          <div class="card-wrapper">
            <div class="sam-card" v-for="n in 3">
              <img src="https://source.unsplash.com/random">
              <div class="card-con">
                <div class="line"><span>甘露园东</span><span class="gray">2室1厅1卫</span><span class="gray">84㎡</span></div>
                <div class="line-1"><span>质量：4.2</span><span>服务：4.4</span></div>
                <div class="btn">查看清单</div>
              </div>
            </div>
          </div>
          <div class="btn-ct">查看更多案例</div>
        </div>
        <div class="assess">
          <div class="title">工长综合评价</div>
          <div class="assess-wrapper">
            <div class="left">
              <div class="score">{{allRate.toFixed(1)}}</div>
              <el-rate
                disabled
                v-model="allRate"
                disabled-void-color="#fff"
                :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
              </el-rate>
              <div style="margin-top:30px;color: #999">26人综合点评</div>
            </div>
            <div class="right">
              <div class="rateWrapper">
                <rate-item title="量房服务" count="5"></rate-item>
                <rate-item title="服务态度" count="4"></rate-item>
                <rate-item title="服务质量" count="3"></rate-item>
                <rate-item title="施工进度" count="2"></rate-item>
                <rate-item title="报价准确度" count="1"></rate-item>
              </div>
            </div>
          </div>
        </div>
        <div class="comment">
         <div class="title">居点评</div> 
         <div class="comment-wrap">
           <div class="img-wrap"><img src="https://source.unsplash.com/random"></div>
           <div class="comment-con">
             <div class="com-title">居分期金牌点评</div>
             <div class="com-intro">监理年限1000年，验收工程200起，监理年限1000年，验收工程200起，<br/>监理年限1000年，验收工程200起，</div>
             <div class="com-text">显锋这个工长非常靠谱，不仅能对每个户型进行精准定位，快速给出解决方案并执行，服务态度还特别好，最令人敬佩的就是显锋具有一般工长所没有的抗击打和打击能力，他曾经单手拧钢筋，双手拆飞机，这些都不是常人说着玩的</div>
             <div class="com-tip" style="bottom: 10px; right: 90px;">连线专家</div>
             <div class="com-tip" style="right: 10px; bottom: 10px;">
               <img src="https://source.unsplash.com/random">
               <span >578</span>
             </div>
           </div>
         </div>
        </div>
        <div class="user-com">
          <div class="title">业主点评<span class="title-sp">问大家</span></div> 
          <user-comment title="热门点评" :comList="comList"></user-comment>
          <user-comment title="最新点评" :comList="comNewList"></user-comment>
        </div>
      </div>
      <div class="sidebar">
        <input-item title="免费预约量房"></input-item>
        <input-item title="TA的最新签约"></input-item>
      </div>
    </div>
  </div>
</template>

<script>
import RateItem from '@/components/rate-item'
import UserComment from '@/components/user-comment'
import InputItem from '@/components/input-item'

export default {
  name: 'foreman',
  data () {
    return {
      foremanRate: 4,
      allRate: 5,
      skillItems: ['奸淫掳掠','杀人放火','吃喝嫖赌','占地为王'],
      introCards: [{
        label: '工长籍贯',
        value: '安徽省'
      },{
        label: '施工能力',
        value: '同时施工5个工地'
      },{
        label: '施工区域',
        value: '北京全区'
      },{
        label: '行业工龄',
        value: '15年'
      },{
        label: '施工团队',
        value: '17人'
      },{
        label: '擅长风格',
        value: '拖刀计，七伤拳，辟邪剑法'
      }],
      expList: [{
        exps: ['王硕完犊子公司','王硕小区','王硕小区','王硕小区',]
      },{
        exps: ['王硕完犊子公司','王硕小区','王硕小区','王硕小区',]
      },{
        exps: ['王硕完犊子公司','王硕小区','王硕小区','王硕小区',]
      }],
      comList: [{
        username: '王硕',
        imgUrl: 'https://source.unsplash.com/random',
        comment: '显锋这个工长非常靠谱，不仅能对每个户型进行精准定位，快速给出解决方案并执行，服务态度还特别好，最令人敬佩的就是显锋具有一般工长所没有的抗击打和打击能力，他曾经单手拧钢筋，双手拆飞机，这些都不是常人说着玩的',
        isNew: false,
        house: '8室9厅10卫',
        createdAt: 1491029234,
        time: 1482310164
      },{
        username: '显锋本体',
        imgUrl: 'https://source.unsplash.com/random',
        comment: '我就是这么吊，不服来战，信不信到重庆打死你',
        isNew: true,
        house: '8室9厅10卫',
        createdAt: 1491029234,
        time: 1482310164
      }],
      comNewList: [{
        username: '王硕',
        imgUrl: 'https://source.unsplash.com/random',
        comment: '显锋这个工长非常靠谱，不仅能对每个户型进行精准定位，快速给出解决方案并执行，服务态度还特别好，最令人敬佩的就是显锋具有一般工长所没有的抗击打和打击能力，他曾经单手拧钢筋，双手拆飞机，这些都不是常人说着玩的',
        isNew: false,
        house: '8室9厅10卫',
        createdAt: 1491029234,
        time: 1482310164
      },{
        username: '显锋本体',
        imgUrl: 'https://source.unsplash.com/random',
        comment: '我就是这么吊，不服来战，信不信到重庆打死你',
        isNew: true,
        house: '8室9厅10卫',
        createdAt: 1491029234,
        time: 1482310164
      },{
        username: '王硕',
        imgUrl: 'https://source.unsplash.com/random',
        comment: '显锋这个工长非常靠谱，不仅能对每个户型进行精准定位，快速给出解决方案并执行，服务态度还特别好，最令人敬佩的就是显锋具有一般工长所没有的抗击打和打击能力，他曾经单手拧钢筋，双手拆飞机，这些都不是常人说着玩的',
        isNew: false,
        house: '8室9厅10卫',
        createdAt: 1491029234,
        time: 1482310164
      },{
        username: '王硕',
        imgUrl: 'https://source.unsplash.com/random',
        comment: '显锋这个工长非常靠谱，不仅能对每个户型进行精准定位，快速给出解决方案并执行，服务态度还特别好，最令人敬佩的就是显锋具有一般工长所没有的抗击打和打击能力，他曾经单手拧钢筋，双手拆飞机，这些都不是常人说着玩的',
        isNew: true,
        house: '8室9厅10卫',
        createdAt: 1491029234,
        time: 1482310164
      }],
    }
  },
  components: {
    RateItem,
    UserComment,
    InputItem
  },
  methods: {
    setStyle(type) {
      let ret = {}
      if (type == 0) {
        ret.marginTop = '16px'
      } else {
        ret.marginTop = '2px'
      }
      return ret
    },
    isFirst(id) {
      let ret = {}
      if (id == 0) {
        ret.width = '309px'
      }
      return ret
    }
  }
}
</script>
