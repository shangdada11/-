<template>
	<div>
		<div class="new_1">
			<div class="newDetails">
				<div class="title">
					<div class="position">
						<i style="margin-right: 5px;" class="el-icon-map-location"></i>
						<span>您所在的位置 ：</span>
						<el-breadcrumb separator-class="el-icon-arrow-right">	
						  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
						  <el-breadcrumb-item :to="{ path: '/news' }">游戏新闻</el-breadcrumb-item>
						  <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
						</el-breadcrumb>
					</div>
					<h1>PSN港服节日限定优惠开启：《最终幻想7 重制版》半价</h1>
					<p class="time">发布时间：2020-12-22 15:08:33</p>
					<div style="clear: both;"></div>
					<el-divider><i class="el-icon-reading"></i></el-divider>
				</div>
				<div class="mainText">
					<p>目前，港服PSN商店开启“节日限定优惠”活动，《十三机兵防卫圈》、《英雄传说创之轨迹》、《最终幻想7重制版》、《刺客信条 英灵殿》、《对马岛之鬼》、《看门狗：军团》等作品有不错的优惠折扣力度，以下为官方公开的打折促销详情。</p>
					<div class="img">
						<img width="700px" src="../assets/New_8.png">
					</div>
					<p>从此次公开的促销打折细节来看，《看门狗：军团》终极版折扣力度为“-30%”，折后价614.6港币，数字标准版折扣力度为“-40%”，折后价280.8港币。《尼尔：机械纪元年度版》半价优惠，折后价154港币。《刺客信条英灵殿》终极版折扣力度为“-20%”，折后价700港币，标准版折扣力度为“-20%”，折后价374.4港币。《最终幻想7 重制版》数字豪华版半价优惠，折后价319港币，标准版折后价234港币。</p>
					<div class="img">
						<img width="700px" src="../assets/news/newc-1.png">
					</div>
					<div class="img">
						<img width="700px" src="../assets/news/newc-2.png">
					</div>
					<p>《十三机兵防卫圈》折扣力度为“-30%”，折后价313.6港币。《对马岛之鬼》折扣力度为“-40%”，折后价280.8港币。</p>
					<p><b>其他优惠一览：</b></p>
					<div class="img">
						<img width="700px" src="../assets/news/newc-3.png">
					</div>
					<div class="img">
						<img width="700px" src="../assets/news/newc-4.png">
					</div>
					<div class="img">
						<img width="700px" src="../assets/news/newc-5.png">
					</div>
					<div class="img">
						<img width="700px" src="../assets/news/newc-6.png">
					</div>
					<div class="img">
						<img width="700px" src="../assets/news/newc-7.png">
					</div>
					<el-divider><i class="el-icon-collection"></i></el-divider>
				</div>
			</div>
			<div class="newright">
				<div class="calendar">
					<el-calendar v-model="value">
					</el-calendar>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
	      return {
	        value: new Date()
	      }
	    },
		created() {
			// 利用vuex进行显示元素与否的判断
			this.$store.commit('getTag','新闻');
			this.$store.commit('componentsShow',true);
			this.$store.commit('l2dshow',true);
		}
};
</script>

<style scoped>
	b{
		font-weight: bolder;
	}
	/* 右侧部分 */
	.newright{
		width: 500px;
	}
	/* 右侧日历 */
	.calendar {
		margin-top: 40px;
	}
	
	/* 新闻正文部分 */
	.img {
		display: flex;
	}
	
	.img img {
		margin: 20px auto;
	}
	
	.mainText p {
		margin-top: 20px;
		text-indent: 2em;
		line-height: 2;
		font-size: 15px;
	}
	
	.mainText {
		padding-bottom: 50px;
	}
	
	/* 新闻标题部分 */
	.time {
		float: right;
		margin-top: 20px;
		color: #969696;
	}
	
	h1 {
		font-size: 24px;
		text-align: center;
		margin-top: 20px;
	}
	
	.position i {
		font-size: 18px;
		margin-top: -3px;
	}
	
	.position {
		font-size: 14px;
		padding: 30px 40px;
		display: flex;
	}
	
	.new_1 {
		display: flex;
		width: 80%;
		background-color: #FFFFFF;
		margin: 0 auto;
		text-align: left;
	}
	
	.newDetails {
		width: 65%;
		padding: 0 23px;
		border-right: 1px solid #D3DCE6;
	}
	
	.title {
		height: 180px;
	}
</style>
