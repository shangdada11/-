<template>
	<div>
		<div class="slideShow">
			<el-carousel height="490px" style="position: relative;">
				<el-carousel-item v-for="item in sliderImgs" :key="item.id">
					<router-link :to="item.url">
						<div class="newsZi">
							<h2>{{ item.mainTitle }}</h2>
							<h4>{{ item.Subtitle }}</h4>
						</div>
						<el-image :src="item.imgUrl" fit="fill" style="width: 100%;height: 100%;"></el-image>
					</router-link>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="latestNews">
			<h1>最新资讯</h1>
			<div class="latestNewsPics">
				<div class="latestNewsPic" v-for="item in theNews" :key="item.id" v-if="item.id<=3">
					<router-link :to="item.url">
						<div class="latestNewsText">
							<span>{{ item.label }}</span>
							<div>{{ item.title }}</div>
							<img :src="item.imgUrl" />
						</div>
					</router-link>
				</div>
			</div>
		</div>
		<div class="mainNews">
			<div class="mainTags">
				<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<el-menu-item index="xinwen">游戏新闻</el-menu-item>
					<el-menu-item index="yugao">新游预告</el-menu-item>
					<el-menu-item index="huodong">游戏活动</el-menu-item>
				</el-menu>
			</div>
			<div class="mainNew">
					<div class="aMainNew" v-for="item in theNews" v-if="item.activeTag==activeIndex" :key='item.id'>
						<router-link :to="item.url">
							<img :src='item.imgUrl'>
							<h3>{{item.title}}</h3>
							<span class="gameName">{{item.gameName}}</span>
							<span class="newsTime">{{item.date}}</span>
							<p class="newsText">{{item.text}}</p>
						</router-link>
					</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeIndex: 'xinwen',
			theNews:[
				{id:0,
				url:'/news/new1',
				activeTag:'xinwen',
				label: '新鲜事',
				imgUrl:require('../assets/latestNews/latestNews_1.png'),
				title:'8岁电竞选手合法性遭质疑 战队老板：完全合法',
				gameName:'堡垒之夜',
				date:'2020-12-22 16:41:29',
				text:'随着电子竞技行业的不断发展，越来越多的玩家选择走上职业道路，这其中就包括了年仅8岁的Joseph Deen。在月初，我们曾报道过《堡垒之夜》诞生史上最年轻电竞选手，Team33战队成功以3.3万美元签入8岁的Joseph Deen。此事曾在当时引起不少玩家的一番讨论...'
				},
				{id: 1,
				url:'/news/newA',
				activeTag:'huodong',
				label: '活动',	
				imgUrl: require('../assets/latestNews/latestNews_2.jpg'),
				title: '圣诞快乐！索尼发布大量游戏厂商年末节日贺卡',	
				gameName:'Sony活动',
				date:'2020-12-22 20:03:50',
				text:'圣诞节即将到来，PlayStation官方发布了多个厂商的圣诞祝福，祝愿玩家2020年节日快乐。“随着今年即将接近尾声，我们由不得再三留连回望那些造就2020成为游戏界另一个难忘的一年的游戏和菁英团队。无论各位準备如何欢庆这季节，我们都想感谢大家这一年来的支持...'
				},
				{
					id: 2,
					url:'/news/new6',
					activeTag:'yugao',
					label: '新游',
					imgUrl: require('../assets/latestNews/latestNews_3.png'),
					title: '经典街机麻将名作《上海3》回归 12月31日登陆Switch',
					gameName:'上海3',
					date:'2020-12-22 19:14:15',
					text:'童年记忆之一，经典街机麻将名作《上海3》还有多少老玩家记得？这款不靠凑牌只靠消消乐的经典游戏之后引领了无数同类游戏，《上海3》将于12月31日移植登陆Switch，敬请期待...'
				},
				{
					id: 3,
					url:'/news/new7',
					activeTag:'yugao',
					label: '新游',
					imgUrl: require('../assets/latestNews/latestNews_4.png'),
					title: '《牧场物语橄榄镇与希望的大地》最新中文版宣传片公布',
					gameName:'牧场物语橄榄镇与希望的大地',
					date:'2020-12-22 13:49:46',
					text:'今日（12月22日），世嘉官方公开了《牧场物语橄榄镇与希望的大地》最新中文版宣传片，主要展示了游戏的一些场景和玩法细节内容，该作将于2021年2月25日发售，登陆Switch平台，中文同步...',
				},
				{
					id:4,
					url:'/news/new2',
					activeTag:'xinwen',
					imgUrl:require('../assets/New_1.jpg'),
					title:'TGA颁奖全程报道：《最后生还者2》获得年度游戏',
					gameName:'最后生还者2',
					date:'2020-12-11 10:50:59',
					text:'TGA 2020年颁奖典礼在今日（12月11日）上午正式举行，年度游戏最终被顽皮狗系列新作《最后生还者2》收入囊中，除了年度游戏之外，《最后生还者2》还获得了最佳游戏指导、最佳动作/冒险、最佳表演（Laura Bailey，Abby）、最佳游戏叙事、最佳音效设计、最佳无障碍创新6项大奖，无疑是今年TGA的最大赢家...'
				},
				{
					id:5,
					url:'/news/new8',
					activeTag:'yugao',
					imgUrl:require('../assets/New_2.jpg'),
					title:'《暗黑4》第四季度新更新 独有装备将取代神话',
					gameName:'暗黑破坏神',
					date:'2020-12-16 08:37:25',
					text:'近日暴雪公布了《暗黑破坏神4》第四季度新更新，此次暴雪希望在一定程度上淡化装备的影响，加强职业特色。物品和技能需要直接跟职业挂钩，加强深层次的个人化定制和配装。同时需要强调物品应该是辅助和加强职业本身，而不是根据物品的配置就可以定义一个职业...'
				},
				{
					id:6,
					url:'/news/new3',
					activeTag:'xinwen',
					imgUrl:require('../assets/New_3.png'),
					title:'PS5面临黄牛、芯片短缺等问题 长期生态受到威胁',
					gameName:'PlayStation',
					date:'2020-12-22 20:03:50',
					text:'索尼推出的PS5主机无疑是今年的热门产品之一，不过这款游戏机的发售却遭到了黄牛党的破坏，他们对市面上稀缺产品的抢购，威胁着PS5主机的长期生态。黄牛党一直是游戏行业所面临的一大挑战，他们以官方零售价购入设备...'
				},
				{
					id:7,
					url:'/news/new4',
					activeTag:'xinwen',
					imgUrl:require('../assets/New_4.jpg'),
					title:'可惜！外媒PC Gamer盘点了《赛博朋克2077》砍掉的9个功能',
					gameName:'赛博朋克2077',
					date:'2020-12-17 10:39:06',
					text:'通往夜之城的道路是漫长的，经过7年的构思和发展，《赛博朋克2077》注定是要发生改变的。现在《赛博朋克2077》已经发售，如果回过头来看看CDPR在之前的采访和宣传中谈到了什么，有哪些功能没有被加入，这将是一个非常有意思的事情...'
				},
				{
					id:8,
					url:'/news/new5',
					activeTag:'xinwen',
					imgUrl:require('../assets/New_5.jpg'),
					title:'中国式游戏分级标准公布：分为8+、12+、16+',
					gameName:'游戏分级制度',
					date:'2020-12-16 13:18:49',
					text:'今日（12月16日）中国音数协第一副理事长张毅君在2020年度中国游戏产业年会上发布了《网络游戏适龄提示》团体标准。中国式游戏分级标准公布：分为8+、12+、16+该标准是在中宣部出版局的指导下，由中国音数协团体标准化技术委员会立项，腾讯、网易、人民网牵头开展。中国游戏分级标准主要由三部分构成，以三个不同的年龄为标准，分为8+（绿色）、12+（蓝色）...'
				},
				{
					id:9,
					url:'/news/new9',
					activeTag:'yugao',
					imgUrl:require('../assets/New_6.jpg'),
					title:'《恶魔城：暗影之王》开发商正在开发多个游戏',
					gameName:'新游预告',
					date:'2020-12-22 21:58:12',
					text:'西班牙游戏开发商MercurySteam 40%的股份被Nordisk Games收购，MercurySteam曾开发了《恶魔城：暗影之王》三部曲，《银河战士2：萨姆斯归来》以及最近的《星际领主》...'
				},
				{
					id:10,
					url:'/news/newB',
					activeTag:'huodong',
					imgUrl:require('../assets/New_7.jpg'),
					title:'Steam平台冬季特惠 Quantic Dream旗下多款游戏打折',
					gameName:'Steam活动',
					date:'2020-12-22 15:38:58',
					text:'暖冬钜惠来袭!北京时间2020年12月23号至2021年1月6日，Steam商店开启冬季特卖。根据往年的打折历史，冬季特卖是Steam打折力度最大的活动之一。本次特惠期间，Quantic Dream工作室旗下的多款游戏参与促销，给出史低折扣...'
				},
				{
					id:11,
					url:'/news/newC',
					activeTag:'huodong',
					imgUrl:require('../assets/New_8.png'),
					title:'PSN港服节日限定优惠开启：《最终幻想7 重制版》半价',
					gameName:'PSN港服活动',
					date:'2020-12-22 15:08:38',
					text:'目前，港服PSN商店开启“节日限定优惠”活动，《十三机兵防卫圈》、《英雄传说创之轨迹》、《最终幻想7重制版》、《刺客信条 英灵殿》、《对马岛之鬼》、《看门狗：军团》等作品有不错的优惠折扣力度，以下为官方公开的打折促销详情...'
				},
				
			],
			sliderImgs: [
				{
					id: 0,
					url:'/news/new2',
					imgUrl: require('../assets/New_1.jpg'),
					mainTitle: 'TGA颁奖全程报道 《最后生还者2》获得年度游戏',
					Subtitle: 'TGA 2020年颁奖典礼上，年度游戏最终被顽皮狗系列新作《最后生还者2》收入囊中。'
				},
				{
					id: 1,
					url:'/news/new8',
					imgUrl: require('../assets/New_2.jpg'),
					mainTitle: '《暗黑4》第四季度新更新 独有装备取代神话',
					Subtitle:
						'暴雪公布《暗黑破坏神4》第四季度新更新，此次暴雪希望在一定程度上淡化装备的影响，加强职业特色。物品和	技能需要直接跟职业挂钩，加强深层次的个人化定制和配装。同时需要强调物品应该是辅助和加强职业本身，而不是根据物品的配置就可以定义一个职业。'
				},
				{
					id: 2,
					url:'/news/new3',
					imgUrl: require('../assets/New_3.png'),
					mainTitle: 'PS5面临黄牛、芯片短缺等问题 长期生态受到威胁',
					Subtitle: '索尼推出的PS5主机无疑是今年的热门产品之一，不过这款游戏机的发售却遭到了黄牛党的破坏，他们对市面上稀缺产品的抢购，威胁着PS5主机的长期生态。'
				},
				{
					id: 3,
					url:'/news/new4',
					imgUrl: require('../assets/New_4.jpg'),
					mainTitle: '可惜  盘点《赛博朋克2077》砍掉的9个功能',
					Subtitle:
						'通往夜之城的道路是漫长的，经过7年的构思和发展，《赛博朋克2077》注定是要发生改变的。现在《赛博朋克2077》已经发售，如果回过头来看看CDPR在之前的采访和宣传中谈到了什么，有哪些功能没有被加入，这将是一个非常有意思的事情。'
				},
				{
					id: 4,
					url:'/news/new5',
					imgUrl: require('../assets/New_5.jpg'),
					mainTitle: '中国式游戏分级标准公布：分为8+、12+、16+',
					Subtitle: '中国音数协第一副理事长张毅君在2020年度中国游戏产业年会上发布了《网络游戏适龄提示》团体标准。'
				}
			],
		};
	},
	created() {
		// 利用vuex进行显示元素与否的判断
		this.$store.commit('getTag','新闻');
		this.$store.commit('componentsShow',true);
		this.$store.commit('l2dshow',true);
	},
	methods: {
		handleSelect(key, keyPath) {
			// console.log(key, keyPath);
			this.activeIndex = key
		}
	}
};
</script>

<style scoped>
	/* 单个新闻卡片的样式设置 */
	.aMainNew:hover{
		background-color: #96969611;
	}
	.aMainNew a{
		color: #000000;
	}
	.aMainNew a:hover h3{
		color: #F0412A;
	}
	.newsText{
		font-size: 16px;
		line-height: 1.2;
	}
	.gameName{
		color: #0984E3;
	}
	.newsTime{
		color: #999999;
	}
	.aMainNew span{
		line-height: 4;
		margin-right: 15px;
	}
	.aMainNew h3{
		font-size: 24px;
		font-weight: 600;
	}
	.aMainNew{
		width: 90%;
		margin: 0px auto;
		height: 150px;
		padding: 30px;
		text-align: left;
		border-bottom: 1px dashed #CCCDD0;
	}
	.aMainNew img{
		width: 210px;
		height: 130px;
		float: left;
		margin-right: 40px;
		margin-left: 10px;
	}
	
	/* 全部新闻的标签 */
.mainTags {
	padding: 0 70px;
	padding-top: 20px;
}
.mainNew{
	margin-top: 20px;
	padding-bottom: 20px;
}
.mainNews {
	width: 80%;
	margin: 50px auto;
	background-color: #ffffff;
}
/* 最新资讯板块 */
.latestNewsPic {
	position: relative;
}
.latestNewsText span {
	position: absolute;
	top: 0;
	left: 0;
	width: 55px;
	height: 25px;
	background-color: #f0412a;
	text-align: center;
	line-height: 25px;
	color: white;
	font-weight: bold;
}
.latestNewsText > div {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 30px;
	line-height: 30px;
	color: white;
	background-color: rgba(0, 0, 0, 0.5);
	padding: 0 3px;
}
.latestNewsText,
.latestNewsText img {
	width: 100%;
	height: 100%;
	overflow: hidden;
}
.latestNews {
	width: 80%;
	height: 300px;
	margin: 50px auto;
	background-color: #ffffff;
}
.latestNews h1 {
	text-align: left;
	padding: 40px 50px;
	font-size: 20px;
}
.latestNews h1::before {
	content: '';
	border-left: 6px solid red;
	margin-right: 10px;
}
.latestNewsPics {
	width: 97%;
	height: 240px;
	display: flex;
	margin: 0 auto;
}
.latestNewsPic:hover .latestNewsText>div{
	color: #f0412a;
}
.latestNewsPic {
	width: 25%;
	height: 70%;
	background-color: #000000;
	margin: 0 20px;
	overflow: hidden;
}
.newsZi {
	position: absolute;
	bottom: 0;
	z-index: 2;
	width: 100%;
	height: 180px;
	background-color: rgba(0, 0, 0, 0.5);
	color: white;
}
/* 新闻文字主标题 */
.newsZi h2 {
	position: absolute;
	top: 20%;
	left: 3%;
	font-size: 32px;
}
/* 新闻文字副标题 */
.newsZi h4 {
	position: absolute;
	top: 55%;
	left: 3%;
	font-size: 16px;
	width: 80%;
	text-align: left;
	line-height: 1.5;
}
/* 轮播图样式(使用element.ui库) */
.slideShow {
	width: 80%;
	margin: 0 auto;
}
/* element.ui的样式属性 */
.el-carousel__item h3 {
	color: #475669;
	font-size: 18px;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
}
</style>
