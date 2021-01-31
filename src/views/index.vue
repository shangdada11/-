<template>
	<div class="index" id="index">
		<!-- 引用星空背景 路径:"../components/Star.vue" -->
		<star v-if="background == '1'" />
		<iframe v-else="background == '2'" src="star.html"></iframe>
		<div id="inApp" @click="goUpUp()">
			<div class="test upUP"></div>
			<div class="nowTime upUP">
				<div class="minTime">
					<h1>{{ NowTime }}</h1>
				</div>
				<div class="date">
					<h4>{{ NowDate }}</h4>
				</div>
			</div>
			<div class="join upUP"><p>点击此处开始游戏</p></div>
			<div class="goUp upUP">
				<i class="iconfont icon-een"></i>
				<br />
				<i class="iconfont icon-een"></i>
			</div>
			<div class="goDown upUP">
				<i class="iconfont icon-angle-right"></i>
				<br />
				<i class="iconfont icon-angle-right"></i>
			</div>
		</div>
		<!-- 用户设置1 -->
		<div class="_login" :class="{ set01: value01, set02: value02 }">
			<div class="title"><b>The Game</b></div>
			<div class="start" @click="goStart"><b>Start</b></div>
			<div class="login" @click="userLogin">
				<b>{{ login }}</b>
			</div>
			<div class="setting" @click="drawer = true" type="primary"><b>Setting</b></div>
			<div class="home" @click="goBack"><b>Back</b></div>
		</div>
		<div class="userlogin" :class="{ set01: value01, set02: value02 }">
			<div>
				<div class="demo-type">
					<div><el-avatar :size="60" icon="el-icon-user-solid"></el-avatar></div>
				</div>
				<input type="text" autocomplete="off" placeholder="用户名" />
				<br />
				<input type="password" autocomplete="off" placeholder="密码" />
				<br />
				<div class="btnLogin"><el-button @click="clickLogin" icon="el-icon-lollipop" round>登录</el-button></div>
				<div class="loginBack"><el-button @click="loginBack" icon="el-icon-right" circle></el-button></div>
			</div>
		</div>
		<el-drawer title="我是标题" :visible.sync="drawer" :modal-append-to-body="false" direction="ltr" :with-header="false">
			<el-collapse class="collapse" v-model="activeName" accordion>
				<el-collapse-item title="设置的设置" name="1">
					<div style="padding: 20px 0;">
							<img v-for="item in bgUrl" :key="item.id" :src="item.bgUrl" :class="{ collapseActiveUrl: background == item.id }" @click="set00(item.id)" />
					</div>
				</el-collapse-item>
				<el-collapse-item title="常规设置" name="2">
					<div style="padding-bottom: 30px;">
						<!-- 一个设置(命名为'aSetting') -->
						<div class="aSetting">
							<span class="settingText">右侧背景毛玻璃效果</span>
							<el-switch @change="set01" :active-color="setColor" class="switch" v-model="value01" active-text="开启" inactive-text="关闭"></el-switch>
						</div>
						<br />
						<div class="aSetting">
							<span class="settingText">右侧背景拟态效果</span>
							<el-switch @change="set02" :active-color="setColor" class="switch" v-model="value02" active-text="开启" inactive-text="关闭"></el-switch>
						</div>
					</div>
				</el-collapse-item>
				<el-collapse-item title="设置的设置" name="3">
					<div style="padding-bottom: 30px;">
						<!-- 一个设置(命名为'aSetting') -->
						<div class="aSetting">
							<span class="settingText">设置主题</span>
							<div class="block switch"><el-color-picker @change="settingColor" size="mini" v-model="setColor"></el-color-picker></div>
						</div>
						<!-- <br /> -->
					</div>
				</el-collapse-item>
				<span class="edition">当前版本：{{ NowEdition }}</span>
			</el-collapse>
		</el-drawer>
		<div class="loader" v-if="flag">
			<div style="--i:1;--color:#FD79A8"></div>
			<div style="--i:2;--color:#0984E3"></div>
			<div style="--i:3;--color:#00B894"></div>
			<div style="--i:4;--color:#FDCB6E"></div>
		</div>
	</div>
</template>

<script>
import star from '../components/Star.vue';
export default {
	components: {
		star
	},
	data() {
		return {
			// 版本号
			NowEdition: '1.8 2021-1-17',

			NowTime: '',
			NowDate: '',
			NowH: '',
			NowM: '',
			NowMonth: 0,
			flag: false,
			login: 'Login',

			// 开发和测试时用true,实际情况使用false
			drawer: false,

			// 用户设置板块
			activeName: '1',
			setColor: '#409EFF',
			value01: false,
			value02: true,
			value03: false,
			background: '1',
			bgUrl: [{ id: 1, bgUrl: require('@/assets/background01.png') }, { id: 2, bgUrl: require('@/assets/background02.png') }]
		};
	},
	created() {
		this.getTime();
		setInterval(this.getTime, 1000);
		// 利用vuex进行显示元素与否的判断
		this.$store.commit('getTag','首页');
		this.$store.commit('componentsShow',false);
		this.$store.commit('l2dshow',false);
		// 确认登录情况
		if (localStorage.getItem('2')) {
			this.login = localStorage.getItem('2');
		} else {
			this.login = 'Login';
		}
		// 调用localStorage设置
		if(localStorage.getItem('background')){
			this.background = localStorage.getItem('background')
		}
		switch (localStorage.getItem('value01')) {
			case 'true':
				this.value01 = true;
				break;
			case 'false':
				this.value01 = false;
				break;
		}
		switch (localStorage.getItem('value02')) {
			case 'true':
				this.value02 = true;
				break;
			case 'false':
				this.value02 = false;
				break;
		}
		switch (localStorage.getItem('value03')) {
			case 'true':
				this.value03 = true;
				break;
			case 'false':
				this.value03 = false;
				break;
		}
		if (localStorage.getItem('ztColor')) {
			this.setColor = localStorage.getItem('ztColor');
		}
	},
	methods: {
		set00(val){
			this.background = val;
			localStorage.setItem('background', val);
		},
		set01(val) {
			localStorage.setItem('value01', val);
		},
		set02(val) {
			localStorage.setItem('value02', val);
		},
		settingColor(val) {
			localStorage.setItem('ztColor', val);
			this.$message({
				message: '设置主题色修改成功，F5刷新后生效',
				type: 'success'
			});
		},
		loginBack() {
			let login = document.querySelector('._login');
			let userLogin = document.querySelector('.userlogin');
			userLogin.style.right = '-40%';
			setTimeout(() => {
				login.style.right = '5%';
			}, 1000);
		},
		clickLogin() {
			let login = document.querySelector('._login');
			let userLogin = document.querySelector('.userlogin');
			userLogin.style.right = '-40%';
			localStorage.setItem('2', 'Logout');
			this.login = localStorage.getItem('2');
			this.$message({
				message: '登陆成功',
				type: 'success'
			});
			setTimeout(() => {
				login.style.right = '5%';
			}, 1000);
		},
		userLogin() {
			let login = document.querySelector('._login');
			let userLogin = document.querySelector('.userlogin');
			if (!localStorage.getItem('2')) {
				login.style.right = '-40%';
				setTimeout(() => {
					userLogin.style.right = '5%';
				}, 1000);
			} else {
				localStorage.removeItem('2');
				this.$message({
					message: '登出成功',
					type: 'success'
				});
				this.login = 'Login';
			}
		},
		goStart() {
			let start = document.querySelector('.start');
			start.parentNode.style.right = '-30%';
			this.flag = true;
			setTimeout(() => {
				this.$router.push('/home');
			}, 2400);
		},
		goUpUp() {
			let goUpUp = document.querySelectorAll('.upUP');
			let login = document.querySelector('._login');
			goUpUp[0].style.opacity = '0';
			for (let i = 0; i < goUpUp.length; i++) {
				goUpUp[i].classList.add('goUpUp');
			}
			setTimeout(() => {
				login.style.right = '5%';
			}, 1000);
		},
		goBack() {
			let goDown = document.querySelectorAll('.upUP');
			let login = document.querySelector('._login');
			login.style.right = '-40%';
			setTimeout(() => {
				goDown[0].style.opacity = '1';
				for (let i = 0; i < goDown.length; i++) {
					goDown[i].classList.remove('goUpUp');
				}
			}, 600);
		},
		getTime() {
			let today = new Date();
			this.NowMonth = today.getMonth() + 1;
			this.NowH = today.getHours();
			this.NowM = today.getMinutes();
			if (this.NowH < 10) {
				this.NowH = '0' + this.NowH;
			}
			if (this.NowM < 10) {
				this.NowM = '0' + this.NowM;
			}
			this.NowTime = this.NowH + ':' + this.NowM;
			this.NowDate = today.getFullYear() + '年' + this.NowMonth + '月' + today.getDate() + '日';
		}
	}
};
</script>

<style scoped>
@import url('http://at.alicdn.com/t/font_2278906_4ok1tkf0aba.css');

* {
	/* 全局禁止选中文字 */
	user-select: none;
}
/* 版本号 */
.edition {
	position: absolute;
	width: 200px;
	bottom: 5px;
	left: calc(50% - 100px);
}
iframe {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
}
.loginBack {
	position: absolute;
	right: 10%;
	top: 5%;
}
.index video {
	transition: 10s;
	min-height: 100%;
	min-width: 100%;
}
/* 用户设置模块 */
.set01 {
	/* 毛玻璃效果 */
	backdrop-filter: blur(3px);
}
.set02 {
	box-shadow: inset 20px 20px 50px #f0f0f001, inset -20px -20px 50px #ffffff01;
}
.aSetting {
	margin-top: 20px;
	padding: 0 20px;
}
.settingText {
	margin-right: 30px;
	float: left;
}
.switch {
	float: right;
}
.collapseActiveUrl {
	border: 3px solid #121212 !important;
}
.collapse div img {
	width: 140px;
	height: 80px;
	margin: 8px 2px;
	padding: 2px 2px;
	border: 3px solid transparent;
}
.collapse {
	height: 100%;
	padding: 30px 50px;
}
/* 用户登录模块(由于不加入后端，所以就意思意思) */
.btnLogin {
	position: absolute;
	top: 75%;
	left: calc(50% - 120px);
	width: 240px;
}

.demo-type {
	margin-top: 20%;
	opacity: 0.9;
}
.userlogin input {
	position: absolute;
	top: 40%;
	left: calc(50% - 140px);
	width: 240px;
	background-color: transparent;
	border: 0;
	border-bottom: 2px solid white;
	border-radius: 1px;
	padding: 10px 20px;
	font-size: 16px;
	color: #ffffff;
	outline: none;
	text-align: center;
	transition: all 0.4s ease-in-out;
}
.userlogin input:focus {
	border-bottom: 3px solid #0984e3;
}
.userlogin input:focus::placeholder {
	transform: translateX(40%);
}
.userlogin input::placeholder {
	color: #f1f2f4;
	transition: all 0.4s ease-in-out;
}
.userlogin input:nth-child(4) {
	top: 55%;
}
.userlogin {
	color: white;
	height: 80%;
	min-height: 500px;
	width: 25%;
	min-width: 400px;
	position: fixed;
	top: 10%;
	right: -40%;
	color: white;
	/* background: url('../assets/dotsAlt.png') no-repeat left bottom; */
	background-color: rgba(0, 0, 0, 0.2);
	padding-top: 10px;
	transition: all 0.5s ease-out;
	border-radius: 12px;
	box-shadow: inset 20px 20px 50px #f0f0f033, inset -20px -20px 50px #ffffff40;
}
:root {
	--background-color: #2c3e50;
	--border-color: #7591ad;
	--text-color: #34495e;
	--color1: #ec3e27;
	--color2: #fd79a8;
	--color3: #0984e3;
	--color4: #00b894;
	--color5: #fdcb6e;
	--color6: #e056fd;
	--color7: #f97f51;
	--color8: #bdc581;
}
.title {
	font-family: '像素字体';
}
/* 加载动画 */
.loader {
	z-index: 40;
	position: absolute;
	left: 75%;
	top: 85%;
	width: 100px;
	height: 50px;
	animation: loader_D 4s forwards;
}
@keyframes loader_D {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
.loader div {
	z-index: 40;
	position: absolute;
	width: 40px;
	height: 40px;
	background-color: var(--color);
	left: calc((var(--i) - 1) * 70px);
	border-radius: 5px;
	animation: animate 1s linear infinite;
	display: flex;
	justify-content: center;
	align-items: center;
}
@keyframes animate {
	0% {
		transform: rotate(-45deg);
	}

	100% {
		transform: rotate(45deg);
	}
}
.loader div::after {
	position: absolute;
	content: '';
	width: 40px;
	height: 40px;
	background-color: var(--color);
	top: -50px;
	border-radius: 5px;
	animation: animate_show 4s steps(1, end) infinite;
	animation-delay: calc((5 - var(--i)) * -1s);
}
@keyframes animate_show {
	0% {
		opacity: 1;
	}

	25% {
		opacity: 0;
	}

	50% {
		opacity: 0;
	}

	75% {
		opacity: 0;
	}

	100% {
		opacity: 0;
	}
}
.loader div::before {
	position: absolute;
	content: '';
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: #fff;
}
.index {
	height: 100%;
	width: 100%;
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
	transition: all 0.5s ease-out;
	z-index: -2;
	background-size: cover;
}
.index::after {
	content: '';
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0;
	top: 0;
	background: inherit;
	filter: contrast(80%) blur(1px);
	z-index: -3;
}
._login {
	/* backdrop-filter: blur(3px); */
	color: white;
	height: 80%;
	min-height: 500px;
	width: 25%;
	min-width: 400px;
	position: fixed;
	top: 10%;
	right: -40%;
	color: white;
	/* background: url('../assets/dotsAlt.png') no-repeat left bottom; */
	background-color: rgba(0, 0, 0, 0.2);
	padding-top: 10px;
	border: 1px solid #2a2a2a5a;
	transition: all 0.5s ease-out;
	border-radius: 10px;
}
/* 右侧悬浮菜单按钮 */
._login > div {
	position: relative;
	width: 100%;
	height: 13%;
	margin: 7% 0px;
	line-height: 80px;
	font-family: 'blackadder itc';
	font-size: 35px;
	letter-spacing: 0px;
	font-weight: 1000;
	color: rgba(255, 255, 255, 0.5);
	transition: all 0.25s ease-out;
	overflow: hidden;
	cursor: pointer;
}

._login > div::before {
	content: '';
	position: absolute;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	transition: all 0.25s ease-out;
	border-radius: 5px;
}

/* 右侧悬浮菜单按钮交互动画 */
._login > div:nth-child(2)::before {
	background-color: #333333da;
	left: 100%;
}

._login > div:nth-child(2):hover::before {
	left: 0;
}

._login > div:nth-child(3)::before {
	background-color: #333333da;
	top: -200%;
	height: 200%;
	border-radius: 0 0 50% 50%;
}

._login > div:nth-child(3):hover::before {
	top: 0;
}

._login > div:nth-child(4)::before {
	background-color: #333333da;
	left: -100%;
}

._login > div:nth-child(4):hover::before {
	left: 0;
}

._login > div:nth-child(5) {
	position: relative;
}
._login > div:nth-child(5)::before {
	display: block;
	top: 50%;
	left: 50%;
	width: 400% !important;
	height: 0;
	background-color: #333333da;
}
._login > div:nth-child(5):before {
	transform: translateX(-50%) translateY(-50%) rotate(-30deg);
}
._login > div:nth-child(5):hover::before {
	height: 300px;
}

._login > div:hover {
	color: rgba(255, 255, 255, 0.5);
	letter-spacing: 4px;
}

._login > div:nth-child(1):hover {
	background-color: transparent;
	cursor: default;
	letter-spacing: 0px !important;
}

/* 单击指定位置添加class */
.upUP {
	transition: all 0.5s ease-in;
}

.goUpUp {
	transform: translateY(-1000px);
	transition: all 1s ease-in;
}

.test {
	position: absolute;
	top: 1%;
	left: 50%;
	transform: translateX(-50%);
	color: #fff;
	letter-spacing: 5px;
	font-weight: 100;
	font-size: 10px;
	z-index: 1;
	font-weight: 600;
	transition: all 0.1s;
}

/* 时间显示 */
.nowTime {
	position: absolute;
	width: 450px;
	height: 200px;
	top: 24%;
	left: calc(50% - 225px);
}

.nowTime div {
	width: 100%;
	text-align: center;
	color: white;
}

.nowTime h1 {
	letter-spacing: 17px;
	font-size: 100px;
}

.nowTime h4 {
	font-size: 20px;
	letter-spacing: 6px;
}

/* 日期显示 */
.date {
	margin-top: 30px;
}

.date h4 {
	letter-spacing: 15px;
}

/* 点击屏幕以进入 */
.join {
	position: absolute;
	width: 200px;
	height: 50px;
	top: 70%;
	left: calc(50% - 100px);
	text-align: center;
	letter-spacing: 5px;
	color: #fff;
	line-height: 50px;
}

/* 点击屏幕进入的渐变动画
	          注：只支持谷歌浏览器 */
@-webkit-keyframes joinDH {
	0% {
		background-position: 0 0;
	}

	50% {
		background-position: -100% 0;
	}

	100% {
		background-position: 0 0;
	}
}

.join p {
	/* 应用动画 */
	font-size: 12px;
	background-image: -webkit-linear-gradient(left, #999999, #fff 20%, #2d8cf0 50%, #fff 80%, #999999);
	background-clip: text;
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
	-webkit-background-size: 200% 100%;
	-webkit-animation: joinDH 6s infinite linear;
}

.goUp {
	position: fixed;
	width: 50px;
	height: 50px;
	text-align: center;
	line-height: 0.7;
	left: calc(50% - 25px);
	top: 10px;
	display: none;
}

.goUp i {
	font-size: 10px;
	color: #fff;
}

.goDown {
	position: fixed;
	bottom: 5px;
	left: calc(50% - 25px);
	width: 50px;
	height: 50px;
	text-align: center;
	line-height: 0.6;
}

@keyframes goDown_i {
	0% {
		opacity: 0;
	}

	40% {
		opacity: 0.8;
	}

	100% {
		opacity: 0;
	}
}

.goDown i {
	font-size: 22px;
	color: #fff;
}

.goDown i:nth-child(1) {
	animation: goDown_i 2s infinite;
}

.goDown i:nth-child(3) {
	animation: goDown_i 2s 1s infinite;
}
</style>
