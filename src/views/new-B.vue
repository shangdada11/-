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
					<h1>Steam平台冬季特惠 Quantic Dream旗下多款游戏打折</h1>
					<p class="time">发布时间：2020-12-22 15:38:58</p>
					<div style="clear: both;"></div>
					<el-divider><i class="el-icon-reading"></i></el-divider>
				</div>
				<div class="mainText">
					<p>暖冬钜惠来袭!北京时间2020年12月23号至2021年1月6日，Steam商店开启冬季特卖。根据往年的打折历史，冬季特卖是Steam打折力度最大的活动之一。本次特惠期间，Quantic Dream工作室旗下的多款游戏参与促销，给出史低折扣。</p>
					<p>Quantic Dream工作室参与本次冬季特卖的游戏和具体折扣为：1、《底特律：化身为人》7折;2、《暴雨》和《超凡双生》5折;3、三款游戏合辑额外享受8折优惠。</p>
					<div class="img">
						<img width="700px" src="../assets/New_7.jpg">
					</div>
					<p>这三款游戏也被称为是Quantic Dream工作室的“三部曲”，以电影化的剧本和镜头叙事，注重强调玩家与角色的互动所引发的丰富多变的剧情，带给玩家长久的沉浸式体验。三款游戏在Steam商店上的评价都是“特别好评”，同时均有免费试用版供玩家体验。对于想要尝试电影互动类游戏，但一直因为价格原因还在观望中的玩家来说，这次冬季大促不到130RMB就可打包入手。</p>
					<div class="img">
						<img width="700px" src="../assets/news/newb-1.png">
					</div>
					<p><b>关于Quantic Dream工作室</b></p>
					<p>Quantic Dream是一家法国游戏工作室，以旗下高质量的游戏作品而闻名全球。Quantic Dream工作室由大卫·凯奇于1997年在巴黎创立，他们在艺术和技术领域积极创新，以玩家情感为基础打造交互式的游戏体验。Quantic Dream首创“交互式剧情”的概念，允许玩家通过多个选择来改变故事走向、探索结局。2005年，工作室推出了首个“互动电影式”的游戏。之后工作室与索尼互动娱乐合作，推出了三个爆款游戏——《暴雨》、《超凡双生》和《底特律：化身为人》。这些游戏都由Quantic Dream独立设计制作，已斩获超过250项全球奖项，对游戏叙事方式的发展作出了重要贡献。过去几年，Quantic Dream曾与多个世界知名艺术家合作，包括大卫·鲍伊、汉斯·季默、艾伦·佩吉、威廉·达福、克兰西·布朗、杰西·威廉姆斯等等。</p>
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
