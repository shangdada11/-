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
					<h1>《恶魔城：暗影之王》开发商正在开发多个游戏</h1>
					<p class="time">发布时间：2020-12-22 21:58:12</p>
					<div style="clear: both;"></div>
					<el-divider><i class="el-icon-reading"></i></el-divider>
				</div>
				<div class="mainText">
					<p>西班牙游戏开发商MercurySteam 40%的股份被Nordisk Games收购，MercurySteam曾开发了《恶魔城：暗影之王》三部曲，《银河战士2：萨姆斯归来》以及最近的《星际领主》。</p>
					<div class="img">
						<img width="700px" src="../assets/New_6.jpg">
					</div>
					<p>Nordisk Games是Nordisk影业旗下的分公司，而Nordisk影业则是Egmont传媒集团下属公司之一。该公司现在享有多家工作室，包括《正当防卫》系列开发商雪崩工作室，《英雄与将军》开发商Reto Moto，《赛道大师》开发商Flashbulb和独立发行商Raw Fury等等。</p>
					<P>根据Nordisk Games关于这次收购发布的官方消息，MercurySteam正在开发多款游戏。</p>
					<p>“在与MercurySteam的创始人和团队见面后，我们立即认可了他们的出色才华和创造力。毫无疑问，该工作室是欧洲首屈一指的PC和主机游戏开发商之一，我们非常自豪该公司能加入我们的投资组合。MercurySteam的业绩记录证明了这一点，他们现在正在开发的游戏（games）非常有前途和令人兴奋。”</p>
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
