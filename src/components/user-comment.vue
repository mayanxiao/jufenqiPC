<style lang="less" scoped>
@main: #ff9736;

.user-comment {
	.label {
		width: 120px;
		height: 40px;
		background-color: @main;
		text-align: center;
		line-height: 40px;
		margin-bottom: 60px;
	}
	.comment-wrap {
      display: flex;
      width: 100%;
      height: 200px;
      padding-left: 16px;
      border-bottom: 1px solid #999;
      position: relative;
      margin-bottom: 35px;
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
        padding: 34px 0 0 10px;
        position: relative;
        .com-title {
          font-size: 18px;
          margin-bottom: 10px;
        }
        .com-intro {
          font-size: 14px;
          color: #999;
          margin-top: 60px;
          display: flex;
          position: absolute;
          bottom: 10px;
          left: 0;
          .intro-item {
          	padding: 0 5px;
          	margin-right: 50px;
          }
        }
        .com-text {
          font-size: 14px;
          width: 70%;
        }
      }
    }
}
.borderNone {
	border-bottom: none !important;
}
</style>

<template>
	<div class="user-comment">
		<div class="label">{{title}}</div>	
		<div class="comment-wrap" v-for="(com,id) in comList" :class="{'borderNone': (id + 1) == comList.length}">
			<div class="img-wrap"><img :src="com.imgUrl"></div>
			<div class="comment-con">
				<div class="com-title">{{com.username}}</div>
				<div class="com-text">{{com.comment}}</div>
				<div class="com-intro">
					<div class="intro-item">{{com.isNew?'新房':'非新房'}}</div>
					<div class="intro-item">户型：{{com.house}}</div>
					<div class="intro-item">施工时间：{{getTime(com.time)}}</div>
					<div class="intro-item">评论时间：{{getTime(com.createdAt)}}</div>
				</div>
				<div class="com-tip" style="right: 40px; top: 10px;">
					<img src="https://source.unsplash.com/random">
					<span >578</span>
				</div>
			</div>
		</div>
		<div class="result"></div>
	</div>
</template>

<script>
export default{
	name: "rate-item",
	props: {
		title: {
			type: String,
			default: ''
		},
		comList: {
			type: Array,
			dafault() {
				return []
			}
		},
	},
	data() {
		return{
			
		}
	},
	methods: {
		getTime(timeStamp) {
			var d = new Date(timeStamp * 1000)
			var Y = d.getFullYear() + '-'
			var M = (d.getMonth() + 1 < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1) + '-'
			var D = (d.getDate() < 10 ? '0' + (d.getDate()) : d.getDate())
			return Y + M + D
		},
 	},
 	computed: {
 		score() {
 			return Number(this.count) - 1
 		}
 	},
	mounted(){
	}
}
</script>