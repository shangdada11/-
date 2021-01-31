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
					<h1>经典街机麻将名作《上海3》回归 12月31日登陆Switch</h1>
					<p class="time">发布时间：2020-12-22 19:14:15</p>
					<div style="clear: both;"></div>
					<el-divider><i class="el-icon-reading"></i></el-divider>
				</div>
				<div class="mainText">
					<p>童年记忆之一，经典街机麻将名作《上海3》还有多少老玩家记得？这款不靠凑牌只靠消消乐的经典游戏之后引领了无数同类游戏，《上海3》将于12月31日移植登陆Switch，敬请期待。</p>
					<div class="img">
						<img width="500px" src="../assets/latestNews/latestNews_3.png">
					</div>
					<p>《上海3》是日本游戏制造商SUNSOFT于1993年推出的经典麻将消除游戏。虽然挂着麻将之名，实际上是一款找茬消消乐游戏。在游戏中，玩家首先要看清桌面上所显示的麻将牌是什么，然后在中间的麻将堆上从上至下依次找到与桌面上相同的麻将牌，通过点击来消除桌面上的麻将牌。</p>
					<div class="img">
						<img width="700px" src="../assets/news/new6-1.png">
					</div>
					<div class="img">
						<img width="700px" src="../assets/news/new6-2.png">
					</div>
					<p>《上海3》Switch移植版除了完全还原原作精髓外，还追加了多人对战模式等新要素，预定12月31日上线，感兴趣的玩家可以关注下了。</p>
					<div class="img">
						<img width="700px" src="../assets/news/new6-3.png">
					</div>
					<div class="img">
						<img width="700px" src="../assets/news/new6-4.png">
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
