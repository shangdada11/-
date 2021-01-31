<template>
	<div>
		<div class="left"><img src="../assets/shop/left.png" /></div>
		<div class="right"><img src="../assets/shop/right.png" /></div>
		<div class="carousel">
			<el-carousel :interval="4000" type="card" height="270px">
				<el-carousel-item v-for="item in carousel" :key="item.id"><img :src="item.imgUrl" /></el-carousel-item>
			</el-carousel>
		</div>
		<div class="section">
			<h1>正在促销</h1>
			<div class="cuxiao">
				<div class="aCuXiao" v-for="item in cuxiao" :key="item.id">
					<img :src="item.imgUrl" />
					<h4>{{ item.title }}</h4>
					<h5>{{ item.time }}</h5>
					<el-divider></el-divider>
					<el-button round @click="clickPrice">{{ item.nowPrice }}</el-button>
					<el-button round disabled size="small">
						<del>{{ item.price }}</del>
					</el-button>
				</div>
			</div>
			<div class="cuxiaoMore">
				<h1>热门推荐</h1>
				<el-divider></el-divider>
				<div class="hots">
					<div class="aHot" v-for="item in hots" :key="item.id">
						<img :src="item.imgUrl" />
						<div>
							<h4>{{item.title}}</h4>
							<h5>{{item.time}}</h5>
							<hr />
							<span class="nowPri">{{item.nowPrice}}</span>
							<span class="pri"><del>{{item.price}}</del></span>
							<el-button @click="clickPrice" class="buy" type="danger" size="mini" round>购买</el-button>
						</div>
					</div>
				</div>
			</div>
			<div class="yugous">
				<h1>预购游戏</h1>
				<el-divider></el-divider>
				<div class="ygGames">
					<div class="ygGame1">
						<div class="ygGame1text">
							<el-button class="Unpublished" @click="Unpublished" round>未发布</el-button>
							<h2>世界汽车拉力锦标赛8/WRC 8 FIA World Rally Championship</h2>
						</div>
						<img src="../assets/shop/ygGame1.jpg">
					</div>
					<div class="ygGame2">
							<img src="../assets/shop/ygGame2.jpg" />
							<h4>超级巴基球/Super Buckyball Tournament</h4>
							<h5>发售时间：Late 2020</h5>
							<el-divider></el-divider>
							<el-button round @click="Unpublished">未发布</el-button>	
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			carousel: [
				{ id: 0, imgUrl: require('../assets/shop/carousel1.jpg') },
				{ id: 1, imgUrl: require('../assets/shop/carousel2.jpg') },
				{ id: 2, imgUrl: require('../assets/shop/carousel3.jpg') },
				{ id: 3, imgUrl: require('../assets/shop/carousel4.jpg') },
				{ id: 4, imgUrl: require('../assets/shop/carousel5.jpg') }
			],
			cuxiao: [
				{
					id: 0,
					imgUrl: require('../assets/shop/cuxiao1.jpg'),
					title: '只狼影逝二度/Sekiro: Shadows Die Twice',
					time: '发售时间：2019-03-23',
					nowPrice: '￥178.00',
					price: '￥268.00'
				},
				{
					id: 1,
					imgUrl: require('../assets/shop/cuxiao2.jpg'),
					title: '生化危机2重制版/RESIDENT EVIL 2/BIOHAZARD RE:2',
					time: '发售时间：2019-01-25',
					nowPrice: '￥128.00',
					price: '￥219.00'
				},
				{
					id: 2,
					imgUrl: require('../assets/shop/cuxiao3.jpg'),
					title: '太吾绘卷/The Scroll Of Taiwu',
					time: '发售时间：2018-09-21',
					nowPrice: '￥50.00',
					price: '￥68.00'
				},
				{
					id: 3,
					imgUrl: require('../assets/shop/cuxiao4.jpg'),
					title: '杀手2/HITMAN 2',
					time: '发售时间：2018-11-13',
					nowPrice: '￥68.00',
					price: '￥205.00'
				}
			],
			hots: [
				{
					id: 0,
					imgUrl: require('../assets/shop/hot1.jpg'),
					title: '骑马与砍杀2：霸主/Mount & Blade II: Bannerlord',
					time: '发售时间：2020-03-30',
					nowPrice: '￥188.00',
					price: '￥248.00'
				},
				{
					id: 1,
					imgUrl: require('../assets/shop/hot2.jpg'),
					title: '使命召唤16/决胜时刻：现代战争/COD16和现代战域战区 CP',
					time: '发售时间：2019-10-26',
					nowPrice: '￥408.00',
					price: '￥458.00'
				},
				{
					id: 2,
					imgUrl: require('../assets/shop/hot3.jpg'),
					title: '绝地求生大逃杀/PUBG',
					time: '发售时间：2017-12-21',
					nowPrice: '￥69.00',
					price: '￥98.00'
				},
				{
					id: 3,
					imgUrl: require('../assets/shop/hot4.jpg'),
					title: '怪物猎人：世界/MONSTER HUNTER: WORLD',
					time: '发售时间：2018-08-10',
					nowPrice: '￥168.00',
					price: '￥203.00'
				}
			]
		};
	},
	created() {
		// 利用vuex进行显示元素与否的判断
		this.$store.commit('getTag','商店');
		this.$store.commit('componentsShow',true);
		this.$store.commit('l2dshow',false);
	},
	methods: {
		clickPrice() {
			this.$message({
				showClose: true,
				message: '别点了嗷，没用的',
				type: 'warning'
			});
		},
		Unpublished(){
			this.$message({
				message: '未发布，敬请期待',
			});
		}
	}
};
</script>

<style scoped>
	.yugous{
		margin-top: 40px;
	}
	.Unpublished:nth-child(1){
		position: relative;
		z-index: 5;
		float: right;
		margin: 15px;
	}
	.ygGame2 h4,
	.ygGame2 h5 {
		padding: 0 10px;
		text-align: left;
	}
	.ygGame2 h4 {
		font-weight: bolder;
		font-size: 17px;
		margin: 15px 0;
		line-height: 1.3;
		height: 40px;
	}
	.ygGame2 {
		overflow: hidden;
		border-radius: 10px;
		margin: 0 10px;
		height: 340px;
		background-color: #ffffff;
		margin-top: 30px;
	}
	.ygGame2 img{
		height: 46%;
		width: 100%;
	}
	.ygGame2{
		width: 25%;
		background-color: #FFFFFF;
	}
	.ygGame1 img{
		height: 100%;
		width: 100%;
	}
	.ygGame1{
		position: relative;
		width: 40%;
	}
	.ygGames>div{
		margin: 0 30px;
		border-radius: 2%;
		overflow: hidden;
		height: 350px;
	}
	.ygGames{
		display: flex;
		height: 400px;
	}
	.ygGame1text {
		position: absolute;
		bottom: 0;
		z-index: 2;
		width: 100%;
		height: 70px;
		background-color: rgba(0, 0, 0, 0.5);
		color: #b9b9b9;
		font-weight: bolder;
		text-align: left;
		line-height: 1.5;
	}
	.ygGame1text h2 {
		padding-right: 40%;
		position: absolute;
		top: 20%;
		left: 3%;
		font-size: 14px;
	} 
	/* 热门推荐部分 */
	.buy{
		float: right;
		margin-top:7px;
		margin-right: 10px;
	}
	.nowPri{
		font-weight: bolder;
		color: #FF0000;
		font-size: 20px;
		padding: 19px;
		line-height: 42px;
	}
	hr{
		margin-top: 30px;
		background-color: #e5e5e5;
		height: 1px;
		border: 0;
	}
	.aHot h4,
	.aHot h5 {
		padding-left: 290px;
	}
	.aHot h4 {
		font-weight: bolder;
		font-size: 17px;
		margin-top: 15px;
		line-height: 1.3;
		height: 50px;
	}
	.aHot img{
		height: 100%;
		width: 270px;
		float: left;
	}
	.aHot{
		text-align: left;
		width: 100%;
		height: 160px;
		background-color: rgb(243, 246, 251);
		border-radius: 10px;
		overflow: hidden;
	}
	.hots{
		display: grid;
		grid-template-columns: 1fr 1fr;
		padding: 0 20px;
		grid-gap: 30px 20px;
		padding-bottom: 30px;
	}
	.cuxiaoMore{
		margin-top: 50px;
		background-color: #FFFFFF;
	}
	/* 促销区块 */
.aCuXiao h4,
.aCuXiao h5 {
	padding: 0 10px;
	text-align: left;
}
.aCuXiao h4 {
	font-weight: bolder;
	font-size: 17px;
	margin: 15px 0;
	line-height: 1.3;
	height: 40px;
}
.cuxiao img {
	width: 100%;
	height: 150px;
}
.aCuXiao:nth-child(1){
	margin-left: 30px;
}
.aCuXiao:nth-last-child(1){
	margin-right: 30px;
}
.aCuXiao {
	overflow: hidden;
	border-radius: 10px;
	margin: 0 10px;
	height: 340px;
	background-color: #ffffff;
	margin-top: 30px;
	box-shadow: 8px 7px 10px 1px #999999;

}
.cuxiao {
	display: flex;
}
.section h1 {
	text-align: left;
	padding: 10px 20px;
	padding-top: 40px;
	font-size: 24px;
}
.section h1::before {
	content: '';
	border-left: 6px solid red;
	margin-right: 15px;
}
.section {
	width: 75%;
	margin: 0 auto;
	background-color: rgb(246, 247, 251);
	position: relative;
}
/* 轮播图样式 */
.el-carousel__item img {
	width: 100%;
	height: 100%;
}
.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
}
/* 两边装饰 */
.right img {
	width: 200px;
}
.right {
	position: absolute;
	right: 65px;
	top: 1000px;
}
.left img {
	width: 160px;
}
.left {
	top: 500px;
	left: 40px;
	position: absolute;
}
</style>
