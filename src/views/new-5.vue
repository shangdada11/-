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
					<h1>中国式游戏分级标准公布：分为8+、12+、16+</h1>
					<p class="time">发布时间：2020-12-16 13:18:49</p>
					<div style="clear: both;"></div>
					<el-divider><i class="el-icon-reading"></i></el-divider>
				</div>
				<div class="mainText">
					<p>今日（12月16日）中国音数协第一副理事长张毅君在2020年度中国游戏产业年会上发布了《网络游戏适龄提示》团体标准。</p>
					<div class="img">
						<img width="500px" src="../assets/news/new5-1.jpg">
					</div>
					<p>该标准是在中宣部出版局的指导下，由中国音数协团体标准化技术委员会立项，腾讯、网易、人民网牵头开展。中国游戏分级标准主要由三部分构成，<b>以三个不同的年龄为标准，分为8+（绿色）、12+（蓝色）和16+（黄色）。</b></p>
					<p>值得一提的是，国内游戏分级标准并未列入可能引起歧义的18+年龄段，这也是该标准与国外游戏分级制度的明显不同之处。</p>
					<p>标准明确规定了标识符的下载渠道、展示时长、尺寸比例和更新频率，同时对有可能刻意模糊弱化标识使用和提示语的行为做了必要规范，以维护标识标准的权威性、统一性和实时性。</p>
					<p>最后，该标准明确了<b>标识符的具体使用场景，即适龄提示标识必须安放在游戏产品界面的显著位置，包括但不限于游戏的官网，客户端注册、登录节点，游戏付费界面和宣传视频、广告等，以突出标识在游戏产品中的能见度和可视性。</b></p>
					<p>张毅君表示，围绕适龄提示标准，音数协将继续加强包括游戏产品分类标准、适龄提示评价指标、家长监护平台技术标准在内的标准化体系建设，为适龄提示标准的应用落地提供可靠的支撑和保障。</p>
					<p>随着国内游戏分级的到来，那么电视剧，动画，电影的相关分级还会远吗?</p>
					<p>日本游戏分级标准：</p>
					<div class="img">
						<img width="700px" src="../assets/New_5.jpg">
					</div>
					<p>美国游戏分级标准：</p>
					<div class="img">
						<img width="700px" src="../assets/news/new5-2.jpg">
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
