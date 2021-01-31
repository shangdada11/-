<template>
	<div>
		<div class="background">
			<!-- 实际情况使用autoplay -->
			<video style="pointer-events: none;" src="../assets/video/BeyondLightDestiny2.mp4" muted loop autoplay></video>
		</div>
		<section>
			<div class="main">
				<h1>
					电子游戏的世界
				</h1>
				<div class="top">
					<div>
						<span>超<b>26</b>亿</span>
						<hr />
						<p>全球电子游戏玩家</p>
					</div>
					<div>
						<span>约<b>1</b>/ 3</span>
						<hr />
						<p>占全球总人数</p>
					</div>
					<div>
						<span>近<b>50</b>年</span>
						<hr />
						<p>电子游戏的历史</p>
					</div>
				</div>
				<div style="margin-top: 210px;">
					<el-steps :active="8" align-center>
					  <el-step title="1952年" description="最早有记录的电子游戏诞生《OXO》"></el-step>
					  <el-step title="1958年" description="威廉·辛吉勃森（WilliamHiginbotham）利用示波器与类比电脑创造出了个游戏"></el-step>
					  <el-step title="1960年" description="世界上第一个商用小型计算机PDP-1上市"></el-step>
					  <el-step title="1962年" description="麻省理工学院的学生们在PDP-1上开发出了世界上第一款视频游戏《Spacewars》"></el-step>
					  <el-step title="1972年" description="电子游戏的始祖——Atari（雅达利）公司成立"></el-step>
					  <el-step title="1979年" description="《银河战士(Galaxian)》(国内翻译为《小蜜蜂》)发布"></el-step>
					  <el-step title="1980年" description="日本游戏开发商南梦宫开发了一款叫《吃人豆(Pac-man)》的游戏"></el-step>
					  <el-step title="2020年" description="电子游戏已经融入但我们的生活当中"></el-step>
					  <el-step title="......" description="电子游戏的发展不会止于此的"></el-step>
					</el-steps>
				</div>
				<div class="pics">
					<div class="inpics">
						<img title="塞尔达传说:荒野之息" class="item_1" src="../assets/home/youxifazhan7.jpg" />
						<img title="《Tennis for Two》（双人网球）" src="../assets/home/youxifazhan1.jpg" />
						<img title="《Spacewars》（太空大战）" src="../assets/home/youxifazhan2.jpg" />
						<img title="《小蜜蜂》" src="../assets/home/youxifazhan3.jpg" />
						<img title="《吃豆人》" src="../assets/home/youxifazhan4.jpg" />
						<img title="1985《超级马里奥兄弟》" src="../assets/home/youxifazhan5.png" />
						<img title="<街头霸王II》" src="../assets/home/youxifazhan6.jpg" />
					</div>
				</div>
			</div>
			<div class="mid">
				<div class="inMid">
					<h1>当代主流游戏分类</h1>
					<div class="midPics">
						<div class="midPic">
							<img src="../assets/home/fenlei1.jpg" />
							<div class="midText">
								<h4>MOBA游戏</h4>
								<p>MOBA，又被称为Action Real-Time Strategy（缩写：Action RTS，ARTS）动作即时战略游戏。</p>
							</div>
						</div>
						<div class="midPic">
							<img src="../assets/home/fenlei2.jpg" />
							<div class="midText">
								<h4>FPS游戏</h4>
								<p>属于ACT类游戏的一个分支，但由于其在世界上的迅速风靡，使之发展成了一个单独的类型。</p>
							</div>
						</div>
						<div class="midPic">
							<img src="../assets/home/fenlei3.jpg" />
							<div class="midText">
								<h4>沙盒游戏</h4>
								<p>创造是该类型游戏的核心玩法，利用游戏中提供的物件制造出玩家自己独创的东西。</p>
							</div>
						</div>
						<div class="midPic">
							<img src="../assets/home/fenlei4.jpg" />
							<div class="midText">
								<h4>RPG游戏</h4>
								<p>角色扮演游戏，在游戏中，玩家负责扮演这个角色在一个写实或虚构世界中活动。</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		created() {
			// 利用vuex进行显示元素与否的判断
			this.$store.commit('getTag','首页');
			this.$store.commit('componentsShow',true);
			this.$store.commit('l2dshow',false);
		}
	}
</script>

<style scoped>
	.midText p{
		margin-top: 10px;
		padding: 0 12px;
		font-size: 13px;
		line-height: 2;
		color: #c8c8c8;
		opacity: 0;
	}
	.midText h4{
		line-height: 30px;
		font-weight: bolder;
		font-size: 17px;
		margin-top: 10px;
	}
	.midText{
		padding-top: 10px;
		color: #FFFFFF;
		height: 140px;
		width: 100%;
		position: absolute;
		line-height: 1.5;
		background-color: rgba(0,0,0,0.4);
		transition: all .2s ease-in;
		bottom: -70px;
	}
	.midPic:hover .midText h4{
		margin-top: 0;
	}
	.midPic:hover .midText p{
		opacity: 1;
	}
	.midPic:hover .midText{
		bottom: 0;
	}
	.midPic:hover img{
		transform: scale(1.1);
	}
	.midPic img{
		width: 100%;
		transition: all .5s;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
	}
	.midPic{
		position: relative;
		overflow: hidden;
		width: 25%;
		height: 280px;
		margin: 0 30px;
	}
	.midPics{
		margin: 90px auto;
		display: flex;
	}
	.inMid{
		width: 80%;
		margin: 0 auto;
	}
	.mid h1{
		font-size: 36px;
		font-weight: bolder;
		font-family: '像素字体';
	}
	.inpics img{
		width: 100%;
		height: 130px;
	}
	.inpics img:nth-child(1){
		height: calc(130px * 2);
	}
	.item_1{
		grid-column: 1 / span 2;
		grid-row: 1 / span 2;
	}
	.inpics{
		border-radius: 6px;
		overflow: hidden;
		grid-row-gap: 5px;
		grid-column-gap: 10px;
		width: 65%;
		margin: 130px auto;
		transform: translateX(-40px);
		display: grid;
		grid-template-rows: 1fr 1fr;
		grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
	}
	.top div p{
		font-size: 20px;
	}
	.top div span{
		font-size: 30px;
	}
	.top hr{
		margin: 30px 0;
	}
	.top b{
		margin: 0 10px;
		font-family: '像素字体';
		font-size: 72px;
	}
	.top div{
		color: #4a4a4a;
		width: 17%;
		height: 100px;
		margin: 0 auto;
	}
	.top{
		width: 80%;
		margin: 110px auto;
		display: flex;
	}
	.main h1{
		padding-top: 60px;
		font-size: 54px;
		font-weight: bolder;
		font-family: '像素字体';
	}
	.main{
		/* font-family: '像素字体'; */
	}
	section{
		position: relative;
		margin-top: 80vh;
		height: 1700px;
		background-color: #f4f4f4;
		background-image: url(../assets/homebg.jpg);
		background-size: 100%;
		background-repeat: no-repeat;
		margin-bottom: -40px;
	}
	/* 动态背景实现 */
	.background video{
		min-height: 100%;
		min-width: 100%;
	}
	.background{
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 0;
		height: 100%;
	}
</style>
