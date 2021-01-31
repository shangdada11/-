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
					<h1>《牧场物语橄榄镇与希望的大地》最新中文版宣传片公布</h1>
					<p class="time">发布时间：2020-12-22 13:49:46</p>
					<div style="clear: both;"></div>
					<el-divider><i class="el-icon-reading"></i></el-divider>
				</div>
				<div class="mainText">
					<p>今日（12月22日），世嘉官方公开了《牧场物语橄榄镇与希望的大地》最新中文版宣传片，主要展示了游戏的一些场景和玩法细节内容，该作将于2021年2月25日发售，登陆Switch平台，中文同步。</p>
					<p>《牧场物语橄榄镇与希望的大地》是已迎来系列25周年的“牧场物语”系列在Nintendo Switch平台的首款全新作品。在自然环境优越的牧场中，进行种植蔬菜水果、照料动物的牧场经营，以及与小镇上的人们邂逅和恋爱，享受人生的“温馨生活模拟游戏”。本作在开拓广大的森林时，会有各种各样的发现和相遇，尽情享受自由度更高的牧场建设和悠闲生活吧。</p>
					<div class="img">
						<img width="500px" src="../assets/news/new7-1.jpg">
					</div>
					<div class="img">
						<img width="700px" src="../assets/news/new7-2.png">
					</div>
					<div class="img">
						<img width="700px" src="../assets/news/new7-3.png">
					</div>
					<p>《牧场物语》系列完全新作《牧场物语橄榄镇与希望的大地》将于2021年2月25日发售，登陆Switch平台，中文同步。</p>
					<p><b>视频截图：</b></p>
					<div class="img">
						<img width="700px" src="../assets/news/new7-4.png">
					</div>
					<div class="img">
						<img width="700px" src="../assets/news/new7-5.png">
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
