<template>
	<div>
		<div class="topMain">
			<div class="logo"><img src="../assets/topLogo.png" /></div>
			<!--导航栏-->
			<nav>
				<ul>
					<li @click="getTag('首页')" :class="{ indexActive: $store.getters.getTag == '首页' }"><router-link to="/home">站点首页</router-link></li>
					<li @click="getTag('推荐')" :class="{ indexActive: $store.getters.getTag == '推荐' }"><router-link to="/main">好游推荐</router-link></li>
					<li @click="getTag('商店')" :class="{ indexActive: $store.getters.getTag == '商店' }"><router-link to="/shop">游戏商城</router-link></li>
					<li @click="getTag('排行')" :class="{ indexActive: $store.getters.getTag == '排行' }"><router-link to="/rank">游戏排行</router-link></li>
					<li @click="getTag('新闻')" :class="{ indexActive: $store.getters.getTag == '新闻' }"><router-link to="/news">游戏新闻</router-link></li>
					<li @click="getTag('首页')" :class="{ indexActive: $store.getters.getTag == '起始' }"><router-link to="/index">起始页</router-link></li>
				</ul>
			</nav>
			<!--导航结束-->
		</div>
		<!-- 回到顶部按钮 -->
		<el-backtop :visibility-height="500" :right="40" :bottom="110"></el-backtop>
	</div>
</template>
<script>
export default {
	data() {
		return {
			// 测试时改成true别忘记了 正式使用时改成false
			// topMain: false,
			// 2021-1-28 彻底修复显示BUG并弃用该方式
		};
	},
	created() {
		this.l2dshow()
	},
	watch:{
		$route(to,from){
			this.l2dshow()
		}
	},
	methods: {
		getTag(val) {
			this.$store.commit('getTag',val);
		},
		l2dshow(){
					let l2d = document.querySelector('#live2dcanvas')
					if(this.$store.state.l2dshow){
						setTimeout(()=>{
							// 解决快速切换页面时看板娘显示在错误的页面的BUG
							if(this.$store.state.l2dshow){
								l2d.style.display = 'block';
							}
						},1000)
					}else{
						l2d.style.display = 'none';
					}
				}
		}
};
</script>
<style scoped>
/* 导航栏被选中的变化 */
.indexActive a {
	color: #f0b43a !important;
}

nav ul li a:hover {
	transition: 0s;
	color: #eaaf37;
}
nav ul li a {
	transition: 0.8s;
	color: #384373;
}
.topMain {
	position: relative;
	z-index: 20;
	width: 100%;
	height: 150px;
	background-image: url('../assets/bg.jpg');
	background-size: 100%;
	background-repeat: no-repeat;
}
.logo {
	width: 100%;
	height: 54px;
	text-align: center;
	position: relative;
}
.logo img {
	position: absolute;
	width: 150px;
	left: 9%;
	top: 40%;
}
nav {
	position: relative;
	width: 100%;
	height: 70px;
	padding: 15px 0;
	z-index: 999;
}
nav ul {
	text-align: center;
	width: 960px;
	margin: 0 auto;
}
nav li {
	float: left;
	width: 110px;
	text-align: center;
	font-size: 24px;
	font-weight: bold;
	text-shadow: 3px 3px 1px #bdbfbf;
	margin-left: 50px;
	height: 30px;
	line-height: 30px;
}
nav li a {
	display: block;
	color: #551a8b;
}
nav li span {
	color: #f89c30;
	font-size: 12px;
	clear: both;
	text-shadow: none;
}
</style>
