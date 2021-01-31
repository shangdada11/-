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
					<h1>8岁电竞选手合法性遭质疑 战队老板：完全合法</h1>
					<p class="time">发布时间：2020-12-22 16:41:29</p>
					<div style="clear: both;"></div>
					<el-divider><i class="el-icon-reading"></i></el-divider>
				</div>
				<div class="mainText">
					<p>
						随着电子竞技行业的不断发展，越来越多的玩家选择走上职业道路，这其中就包括了年仅8岁的Joseph
						Deen。在月初，我们曾报道过《堡垒之夜》诞生史上最年轻电竞选手，Team33战队成功以3.3万美元签入8岁的Joseph Deen。此事曾在当时引起不少玩家的一番讨论。
					</p>
					<p>
						进入Team33战队的Deen不仅获得了3.3万美元的签约金，还得到了一台价值5000美元的高性能游戏设备。在决定签下Deen之前，这支来自洛杉矶的战队在过去的两年中一直关注Deen并让他一起参加训练。
					</p>
					<div class="img"><img width="700px" src="../assets/latestNews/latestNews_1.png" /></div>
					<p>
						但是这种财政激励措施使得Deen的年龄引发了更多问题。Epic Games为《堡垒之夜》比赛设定了13岁的最低年龄规矩，尽管此前FaZe
						Clan战队签下一位11岁孩子H1ghSky1来进行直播和比赛。
					</p>
					<p>
						在Kotaku的电话采访中，Team33战队的创始人Tyler
						Gallagher认为签署Deen是完全合法的举动，并指出：“本质上并没有触犯劳动法，因为他不必工作，他仅仅只是打游戏而已。我们不会把他辞退，他也没有参加比赛。从法律上来说，我们可以向他捐款，因为我们相信他并且我们正在投资。”
					</p>
					<div class="img"><img src="../assets/news/new1-1.jpg" /></div>
					<p>
						Deen和Team33之间的合同是由他的母亲Gigi及律师协商达成的，并且如果担心游戏花费太多时间耽误学业，则完全可以中断合同。此外，Team33战队还建立了Deen的油管频道，在《堡垒之夜》和《使命召唤》中对他进行培训。Team33则能够在油管上获取33%的利益抽成，如果Deen选择退出合同，他依旧可以拥有其账户的所有权。
					</p>
					<div class="img"><img width="500px" src="../assets/news/new1-2.jpg" /></div>
					<p>Deen本人在母亲和Gallagher的监督下向Kotaku发表了一份声明，称虽然他的游戏ID“ 33 Gosu”是Gallagher的主意，但他为有机会加入Team33而感到兴奋。”</p>
					<p>
						Gigi
						Deen似乎有着更为扎实的做法，她将儿子的游戏时间限制在1小时，并允许他与Team33签约以培养他对《堡垒之夜》的热情。她将Team33称作是“一支了不起的团队”，并且经常与他们联系。
					</p>
					<el-divider><i class="el-icon-collection"></i></el-divider>
				</div>
			</div>
			<div class="newright">
				<div class="calendar"><el-calendar v-model="value"></el-calendar></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			value: new Date()
		};
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
	margin-top: 30px;
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
	background-color: #ffffff;
	margin: 0 auto;
	text-align: left;
}

.newDetails {
	width: 65%;
	padding: 0 23px;
	border-right: 1px solid #d3dce6;
}

.title {
	height: 180px;
}
</style>
