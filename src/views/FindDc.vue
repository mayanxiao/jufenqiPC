<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@main: #ff9736;

.find-dc {
    width: 1230px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    .sidebar {
        width: 200px;
        text-align: center;
        .list-1 {
            font-size: 16px;
            height: 40px;
            line-height: 40px;
            background-color: #d8d8d8;
            color: #666;
        }
        .list-2 {
                background-color: #fcfcfc;
                height: 34px;
                line-height: 34px;
                color: #666;
                font-size: 14px;
                cursor: pointer;
                &:hover {
                    background-color: @main;
                    color: #fff;
                }
            }
    }
    .content {
        width: 1010px;
        .chooser-wrapper {
            

            .title {
                border: 1px solid #d8d8d8;
                border-bottom: none;
                padding-left: 20px;
                display: flex;
                height: 44px;
                padding-top: 11px;
                span {
                    display: block;
                    margin-right: 20px;
                    img {
                        display: block;
                        margin-top: 2px;
                    }
                }
            }
            .chooser {
                width: 100%;
            }
        }

        .tab-title {
            width: 530px;
            margin: 20px 0 10px 50px;
            height: 34px;
            .tab-item {
                padding: 0 10px;
                height: 34px;
                line-height: 34px;
                text-align: center;
                border-radius: 5px;
                cursor: pointer;
            }
            .active {
                background-color: @main;
                color: #fff;
            }
        }

        .brand-wrapper {
            width: 100%;
            padding: 20px;
            margin-bottom: 20px;
            border: 1px solid #d8d8d8;
            display: flex;
            transition: box-shadow 0.2s ease;
            &:hover {
                border: none;
                box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
            }
            .img-wrapper {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    display: block;
                }
            }
            .con-wrapper {
                padding: 20px 0 0 20px;
                width: calc(~"100% - 100px");
                .brand-title {
                    margin-bottom: 20px;
                    display: flex;
                    span {
                        display: block;
                        margin-right: 10px;
                        font-size: 18px;
                    }
                    img {
                        width: 16px;
                        height: 16px;
                        margin-right: 5px;
                        margin-top: 4px;
                    }
                }
                .intro {
                    font-size: 14px;
                    margin-bottom: 20px;
                    justify-content: flex-start;
                    .intro-item {
                        padding: 0 10px;
                        border-left: 1px solid #999;
                        height:14px;
                        line-height: 14px;
                    }
                    .sp-item {
                        font-size: 12px;
                        color: #999;
                        line-height: 14px;
                        margin-left: 40px;
                    }
                    .subtitle {
                        display: flex;
                        margin-right: 20px;
                        img {
                            display: block;
                            margin-right: 10px;
                            width: 18px;
                            height: 18px;
                        }
                    }
                }
                
                .comment {
                    font-size: 14px;
                    margin-bottom: 20px;
                }
            }
        }
    }
}
.flexbox {
    display: flex;
    justify-content: space-between;
}
</style>
<style>
.intro .el-rate__item i{
  font-size: 14px;
  line-height: 14px;
}
.intro .el-rate {
    margin-top: -3px;
}
</style>
<template>
  <div class="find-dc">
    <!-- 侧边栏 -->
    <div class="sidebar">
       <div v-for="list in sideBars">
            <div class="list-1">{{list.name}}</div>
            <div class="list-2" v-for="sub in list.subList">{{sub}}</div>
       </div> 
    </div>
    <div class="content">
        <!-- 筛选 -->
        <div class="chooser-wrapper">
            <div class="title">
                <span>北京装修公司</span>
                <span><img src="/static/findDc/arrow.png"></span>
                <span>共1223个结果</span>
            </div>
            <!-- <div class="chooser" v-for="(tab, id) in tabList"> -->
            <chooser :title="tab.title" :spacesArr="tab.list" first="11" :chooseindex="id" v-for="(tab, id) in tabList"></chooser>
            <!-- </div> -->
        </div>
        <div class="tab-title flexbox">
            <div class="tab-item" v-for="(title, id) in titleList" :class="{'active': id == tabIndex}" @click="tabIndex = id">{{title}}</div>
        </div>
        <!-- 品牌列表 -->
        <div class="brand-wrapper" v-for="n in 7">
            <div class="img-wrapper"><img src="https://source.unsplash.com/random"></div>
            <div class="con-wrapper">
                <div class="brand-title">
                    <span>博洛尼</span>
                    <img src="/static/findDc/yingye.png">
                    <img src="/static/findDc/renzheng.png">
                    <img src="/static/findDc/youhui.png">
                    <img src="/static/findDc/jinpai.png">
                </div>
                <div class="flexbox intro">
                    <el-rate
                        disabled
                        v-model="allRate"
                        disabled-void-color="#fff"
                        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                    </el-rate>
                    <div style="padding-right: 10px; line-height: 14px;">{{allRate}}分</div>
                    <div class="intro-item">50条点评</div>
                    <div class="intro-item">价位：1000~2000元</div>
                    <div class="sp-item">设计：4.5分&nbsp;&nbsp;&nbsp;质量：5分&nbsp;&nbsp;&nbsp;性价比：5分</div>
                </div>
                <div class="intro flexbox" style="justify-content: flex-start">
                    <div class="subtitle">
                        <img src="/static/findDc/paiqi.png">
                        <span>王硕胜利大街烦死了快放假</span>
                    </div> 
                    <div class="subtitle">
                        <img src="/static/findDc/paiqi.png">
                        <span>王硕胜利大街烦死了快放假</span>
                    </div> 
                </div>
                <div class="comment">
                    速度快福建省东方丽景水电费离开家收代理费会计师代理费收代理费会计师老地方会计师老地方吉林省分是两地分居市领导反馈讲述了地方聚少离多付款讲述了地方是劳动法熟练度是劳动法是劳动法是登录防守打法是劳动法是打发斯蒂芬来看水电费是滴垃圾分类；束带结发我耳机放上来的积分艘大放送愤世嫉俗地方了可视对讲发牢骚累死了都解放塑料袋快捷方式老地方了解到发牢骚地方落实到塑料袋积分了速度快解放来得及发了速度快解放塑料袋开发
                </div>
                <div class="intro flexbox" style="justify-content: flex-start">
                    <div class="subtitle">
                        <img src="/static/findDc/youhuir.png">
                        <span>王硕胜利大街烦死了快放假</span>
                    </div> 
                    <div class="subtitle">
                        <img src="/static/findDc/youhuir.png">
                        <span>王硕胜利大街烦死了快放假</span>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Chooser from "@/components/Chooser" 


export default {
  name: 'find-dc',
  data () {
    return {
      tabList: [{
        title: '类型',
        list: ['普通住宅','小户型','别墅','局部装修','KTV','商铺','餐厅酒楼','美容美发','厂房','学校','医院','专卖店','娱乐场所','办公室','自建房','阁楼']
      },{
        title: '服务区域',
        list: ['朝阳','大兴','东城','房山','丰台','海淀','门头沟','密云','石锦山','顺义','通州','西城','显锋','和嘿嘿','小黑','王硕自治区']
      },{
        title: '承接价位',
        list: ['朝阳','大兴','东城','房山','丰台','海淀','门头沟','密云','石锦山','顺义','通州','西城','显锋','和嘿嘿','小黑','王硕自治区']
      },{
        title: '专长风格',
        list: ['现代','中式','美式','新古典']
      }],
      titleList: ['综合','总分','设计','质量','性价比','价位','优惠'],
      tabIndex: 0,
      allRate: 4.9,
      sideBars: [{
        name: '第一级菜单',
        subList: ['小类别','小类别','小类别','小类别','小类别','小类别','小类别','小类别',]
      },{
        name: '第一级菜单',
        subList: ['小类别','小类别','小类别','小类别',]
      },{
        name: '第一级擦弹',
        subList: ['小类别','小类别股毛','小类别','小类别',]
      }]
    }
  },
  components: {
    Chooser
  },
  methods: {

  }
}
</script>
