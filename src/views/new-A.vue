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
					<h1>圣诞快乐！索尼发布大量游戏厂商年末节日贺卡</h1>
					<p class="time">发布时间：2020-12-22 20:03:50</p>
					<div style="clear: both;"></div>
					<el-divider><i class="el-icon-reading"></i></el-divider>
				</div>
				<div class="mainText">
					<p>圣诞节即将到来，PlayStation官方发布了多个厂商的圣诞祝福，祝愿玩家2020年节日快乐。</p>
					<p>“随着今年即将接近尾声，我们由不得再三留连回望那些造就2020成为游戏界另一个难忘的一年的游戏和菁英团队。无论各位準备如何欢庆这季节，我们都想感谢大家这一年来的支持。PlayStation.Blog团队祝愿每个人都能度过舒心惬意的节期假日，并好好跟自己最爱的游戏共享优质时间。</p>
					<p>一如传统，我们知道有来自各界的其他朋友也想一同散播节庆欢乐。请这就去泡杯热可可，好好坐下来，享受我们这些来自世界各地的朋友与合作伙伴们献上的季节贺卡。”</p>
					<div class="img">
						<img width="700px" src="../assets/latestNews/latestNews_2.jpg">
					</div>
					<div class="img">
						<img width="700px" src="../assets/news/newa-1.jpg">
					</div>
					<div class="img">
						<img width="700px" src="../assets/news/newa-2.jpg">
					</div>
					<div class="img">
						<img width="700px" src="../assets/news/newa-3.jpg">
					</div>
					<div class="img">
						<img width="700px" src="../assets/news/newa-4.jpg">
					</div>
					<div class="img">
						<img width="700px" src="../assets/news/newa-5.jpg">
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
