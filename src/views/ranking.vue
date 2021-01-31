<template>
	<div>
		<div class="rank">
			<div class="rankLeft">
				<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
					<el-radio-button :label="false">展开</el-radio-button>
					<el-radio-button :label="true">收起</el-radio-button>
				</el-radio-group>
				<el-menu default-active="1" class="el-menu-vertical-demo" @select="goIndex" :collapse="isCollapse">
					<el-menu-item index="1">
						<i class="el-icon-monitor"></i>
						<span slot="title">单机总排行</span>
					</el-menu-item>
					<el-menu-item index="2">
						<i class="el-icon-mouse"></i>
						<span slot="title">近日热门排行</span>
					</el-menu-item>
					<el-menu-item index="3">
						<i class="el-icon-coordinate"></i>
						<span slot="title">2020年单机排行</span>
					</el-menu-item>
				</el-menu>
			</div>
			<div class="rankGames">
				<div class="rankGame">
					<div class="aGame" v-for="item in returnRankingGames[nowIndex - 1]" :key="item.id">
						<div class="aGameLeft"><img :src="item.imgUrl" /></div>
						<div class="aGameMid">
							<div class="title">
								<span>{{ item.name }}</span>
								<span>{{ item.enName }}</span>
							</div>
							<hr />
							<div class="details">
								<span>开发：{{ item.development }}</span>
								<span>发行：{{ item.publisher }}</span>
								<span>发售时间：{{ item.date }}</span>
								<span>类型：{{ item.type }}</span>
								<span>平台：{{ item.platform }}</span>
								<span>语言：{{ item.lang }}</span>
							</div>
							<span style="font-size: 13px;">标签：{{ item.label }}</span>
						</div>
						<div class="aGameRight">
							<h1>{{ item.score }}</h1>
							<h4>{{ item.totie }}人评分</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { returnRankingGames } from '../components/util.js';

export default {
	data() {
		return {
			isCollapse: true,
			nowIndex: 1,
			returnRankingGames: []
		};
	},
	created() {
		this.returnRankingGames = returnRankingGames();
		// 利用vuex进行显示元素与否的判断
		this.$store.commit('getTag', '排行');
		this.$store.commit('componentsShow', true);
		this.$store.commit('l2dshow', false);
	},
	methods: {
		goIndex(index) {
			this.nowIndex = index;
			console.log(this.nowIndex);
		}
	}
};
</script>

<style scoped>
.details span {
}
.details {
	margin-top: 20px;
	font-size: 12px;
	height: 70px;
	display: grid;
	line-height: 1.2;
	grid-template-columns: 1fr 1.3fr 1fr;
	grid-template-rows: 1fr 1fr;
}
.title span {
	line-height: 2.2;
}
.title span:nth-child(1) {
	color: #f0412a;
	font-weight: bolder;
	font-size: 18px;
}
.title span:nth-child(2) {
	color: #c1c1c1;
	margin: 0 24px;
}
.title {
	text-align: left;
}
.aGame hr {
	height: 6px;
	background-color: #e2e2e2;
	border: 0;
	border-radius: 100px;
}
.aGame img {
	float: left;
	width: 128px;
	height: 160px;
	margin-right: 40px;
}
.aGameLeft {
	width: 18%;
}
.aGameMid {
	width: 66%;
}
.aGameRight h1 {
	font-size: 64px;
}
.aGameRight h4 {
	font-size: 15px;
	margin-top: 20px;
}
.aGameRight {
	margin-left: 35px;
	text-align: center;
	width: 10%;
	margin-top: 10px;
	line-height: 1.1;
}
.aGame {
	margin-bottom: 50px;
	padding: 30px 30px;
	width: 91%;
	height: 160px;
	display: flex;
	text-align: left;
	border-radius: 30px 0 30px 0;
	background: linear-gradient(145deg, #f0f0f0, #ffffff);
	box-shadow: 24px 24px 18px #d4d4d4, -24px -24px 18px #ffffff;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
	width: 180px;
	min-height: 400px;
}
.rankGames {
	width: 100%;
}
.rankLeft {
	width: 20%;
}
.rank {
	width: 80%;
	margin: 30px auto;
	display: flex;
	background-color: #ffffff;
	padding: 30px 0;
}
</style>
