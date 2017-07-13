var foreman = {
	id: 0, // 工长id
	basicData: {
		nativePlace: '籍贯',
		teamMateCount: 17, // 团队人数
		period: 15, // 行业工龄
		workingArea: '施工区域',
		capacity: '施工能力（可同时施工5个工地）',
		style:['复古风格', '地中海'] //  擅长风格
	},
	selfDescription: '', // 自我描述
	honors: {
		content: '', // 荣誉描述
		honorPic: ['114324342.png','114324342.png','114324342.png'] // 所获荣誉
	},
	team: {
		content: '', // 团队描述
		teamPic: '1234rw34523.png', // 团队图片
	},
	proprietorComment: '', // 业主描述，先为空吧
	workExp: [{
		start: Date,
		end: Date,
		workingPlace: ['', '', '']
	}]
}

var designPic = {
	room: [{id: 0, title: '客厅'}, ...],
	part: [{id: 0, item: '榻榻米'}, ...],
	style: [{id: 0, style: '欧式'}, ...],
	coverImg: '12234234.png',
	imgList:['','',''], // 内部图片
	userId: 21, //与用户关联
	discription: '效果图描述'
}

var decorationCase = {
	type: 0, // 装修房屋类型 0：老房，1：新房
	area: 1, // 装修房屋面积：[0,5]为 60以下，60~90，90~120，120~150，150~200，200以上
	houseType: { // n室n厅
		livingroom: 2, 
		bedroom: 1
	},
	style: [{id: 0, style: '欧式'},{}],
	costs: {
		totalAmount:30000.00,
		lightPart: 7500.00, //轻工辅料
		waterElectricity: 7500, // 水电改造
		Labour: 7500, // 人工费
		accessory: 7500 // 辅料费用 
	}, // 可以前端写出条件去判断总金额，不用filter应该也可以
	officalComment: '', // 官方点评
	proprietorComment: '', // 业主点评，先为空吧
	checklist: [], // 选购清单，不知道还在不。。
	imgList: [], // 案例图列表
}

var strategy = {
	id: 0, // 主键
	coverImg: '', //封面图
	title: '', // 标题
	brand_desc: '品牌详情', //这里可以调品牌列表，标一下。。
	intro: '产品介绍',
	classify: [{
		title: '', // 类别名称
		content: '', // 评测内容
	}], // 分类评测
	suggest: '', // 购买建议
	author: {}, // 估计先以居分期某名义来写
	video: '', // 刚开始估计没有人录，属于用户生成内容了。。
}

