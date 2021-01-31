<template>
	<div class="bottom">
		<!-- 版权开始 -->
		<footer class="foot" style="margin-top:30px;">
			<div class="kuan">
				<div class="bottomlogo"><img src="../assets/buttomLogo.jpg" /></div>
				<div class="copyright">Copyright © 2020 St Inc. All Rights Reserved. 史蒂夫公司 版权所有</div>
				<div class="botnav">
					<ul>
						<li @click="getTag('首页')">
							<router-link to="/home">站点首页</router-link>
							<el-divider direction="vertical"></el-divider>
						</li>
						<li @click="getTag('推荐')">
							<router-link to="/main">好游推荐</router-link>
							<el-divider direction="vertical"></el-divider>
						</li>
						<li @click="getTag('商店')">
							<router-link to="/shop">游戏商城</router-link>
							<el-divider direction="vertical"></el-divider>
						</li>
						<li @click="getTag('排行')">
							<router-link to="/rank">游戏排行</router-link>
							<el-divider direction="vertical"></el-divider>
						</li>
						<li @click="getTag('新闻')">
							<router-link to="/news">游戏新闻</router-link>
							<el-divider direction="vertical"></el-divider>
						</li>
						<li @click="getTag('首页')"><router-link to="/index">起始页</router-link></li>
					</ul>
				</div>
			</div>
		</footer>
		<!-- 版权结束 -->
	</div>
</template>

<script>
export default {
	methods: {
		getTag(val) {
			this.$store.commit('getTag', val);
		}
	}
};
</script>

<style scoped>
.bottom {
	position: relative;
}
.foot {
	clear: both;
	width: 100%;
	height: 70px;
	background-color: #283147;
}

.kuan {
	width: 1100px;
	margin: 0 auto;
}

.bottomlogo {
	left: 15px;
	box-shadow: 5px 5px 5px #000000;
	float: left;
	margin-left: 25px;
}

.bottomlogo img {
	width: 76px;
}

.copyright {
	float: left;
	margin-left: 20px;
	line-height: 70px;
	height: 70px;
	color: #ccc;
	font-size: 12px;
}

.botnav {
	width: 370px;
	float: left;
	margin-left: 170px;
}

.botnav li {
	float: left;
	font-size: 12px;
	line-height: 70px;
	height: 70px;
	color: white;
}

.botnav li a {
	color: #ccc;
}
</style>
