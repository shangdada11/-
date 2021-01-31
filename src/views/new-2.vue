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
					<h1>TGA颁奖全程报道：《最后生还者2》获得年度游戏</h1>
					<p class="time">发布时间：2020-12-11 10:50:59</p>
					<div style="clear: both;"></div>
					<el-divider><i class="el-icon-reading"></i></el-divider>
				</div>
				<div class="mainText">
					<p>TGA 2020年颁奖典礼在今日（12月11日）上午正式举行，年度游戏最终被顽皮狗系列新作《最后生还者2》收入囊中，除了年度游戏之外，《最后生还者2》还获得了最佳游戏指导、最佳动作/冒险、最佳表演（Laura Bailey，Abby）、最佳游戏叙事、最佳音效设计、最佳无障碍创新6项大奖，无疑是今年TGA的最大赢家。</p>
					<p><b>年度最佳游戏</b></p>
					<p>获奖游戏：《最后生还者2》</p>
					<p>其他提名游戏：《集合啦！动物森友会》、《毁灭战士：永恒》、《最终幻想7：重制版》、《对马岛之鬼》、《哈迪斯》</p>
					<div class="img">
						<img width="700px" src="../assets/New_1.jpg">
					</div>
					<p><b>最佳游戏指导</b></p>
					<p>获奖游戏：《最后生还者2》</p>
					<p>其他提名游戏：《对马岛之鬼》、《哈迪斯》、《最终幻想7：重制版》、《半衰期：爱莉克斯》</p>
					<p><b>最佳策略/模拟游戏</b></p>
					<p>获奖游戏：《微软飞行模拟》</p>
					<p>其他提名游戏：《十字军之王3》、《赏金奇兵3》、《战争机器：战术小队》、《幽浮：奇美拉战队》</p>
					<p><b>最佳内容创作</b></p>
					<p>获奖人：Valkyrae（Capcom）</p>
					<p>其他提名人：</p>
					<p>Alanah Pearce（Youtube）</p>
					<p>Nickmercs（Youtube）</p>
					<p>Timthetatman（Twitch）</p>
					<p>Jay Ann Lopez（Twitch）</p>
					<p><b>最佳音乐</b></p>
					<p>获奖游戏：《最终幻想7：重制版》</p>
					<p>其他提名游戏：《毁灭战士：永恒》、《哈迪斯》、《精灵与萤火意志》、《最后生还者2》</p>
					<p><b>最佳动作/冒险游戏</b></p>
					<p>获奖游戏：《最后生还者2》</p>
					<p>其他提名游戏：《刺客信条：英灵殿》、《对马岛之鬼》、《漫威蜘蛛侠：迈尔斯》、《星球大战绝地：陨落的武士团》</p>
					<p><b>最佳家庭游戏</b></p>
					<p>获奖游戏：《集合啦！动物森友会》</p>
					<p>其他提名游戏：《古惑狼4》、《糖豆人》、《我的世界：地下城》、《纸片马里奥：折纸国王》</p>
					<p><b>最佳社区支持</b></p>
					<p>获奖游戏：《糖豆人：终极淘汰赛》</p>
					<p>其他提名游戏：《Apex英雄》、《命运2》、《堡垒之夜》、《无人深空》、《Valorant》</p>
					<p><b>最佳电竞教练</b></p>
					<p>获奖教练：zonic（CS：GO）</p>
					<p>其他提名教练：zefa（英雄联盟）、crusty（守望先锋）、rambo（使命召唤）、grabbz（英雄联盟）</p>
					<p><b>最佳电竞赛事</b></p>
					<p>获奖赛事：《英雄联盟》2020全球总决赛</p>
					<p>其他提名赛事：Blast Premier：Spring 2020 European Finals（CS:GO） 、《使命召唤》联赛2020锦标赛、IEM Katowice 2020（CS:GO） 、《守望先锋》2020联赛总决赛</p>
					<p><b>最佳电子竞技主持人</b></p>
					<p>获奖主持人：Sjokz</p>
					<p>其他提名主持人：Sjokz、Machine、Goldenboy、Dash、Sheever</p>
					<p><b>最佳电竞团队</b></p>
					<p>获奖团队：G2 Esports（英雄联盟）</p>
					<p>其他提名团队：Damwon Gaming（英雄联盟）、Dallas Empire（使命召唤）、San Francisco Shock（守望先锋）、Team Secret（DOTA2）</p>
					<p><b>最佳电竞选手</b></p>
					<p>获奖选手：Showmaker（英雄联盟）</p>
					<p>其他提名选手：crimsix（使命召唤）、canyon（英雄联盟）、shotzzy（使命召唤）、zywoo（CS：GO）</p>
					<p><b>最佳表演</b></p>
					<p>获奖演员：Laura Bailey，Abby（《最后的生还者2》）</p>
					<p>其他提名演员：</p>
					<p>Ashley Johnson - 《最后生还者2》艾莉</p>
					<p>Daisuke Tsuji - 《对马岛之鬼》镜井仁</p>
					<p>Logan Cunningham - 《哈迪斯》哈迪斯</p>
					<p>Nadji Jeter - 《漫威蜘蛛侠：迈尔斯》迈尔斯·莫拉莱斯</p>
					<p><b>最佳运营游戏</b></p>
					<p>获奖游戏：《无人深空》</p>
					<p>其他提名游戏：《Apex英雄》、《命运2》、《使命召唤：战区》</p>
					<p><b>最受期待游戏</b></p>
					<p>获奖游戏：《Elden Ring》</p>
					<p>其他提名游戏：《战神5》、《光环：无限》、《地平线：禁忌西部》、《生化危机8：村庄》、《塞尔达传说：旷野之息》续作</p>
					<p><b>最佳体育/竞速游戏</b></p>
					<p>获奖游戏：《托尼霍克职业滑板1+2》</p>
					<p>其他提名游戏：《尘埃5》、《F1 2020》、《FIFA 21》、《NBA 2K21》</p>
					<p><b>最佳AR/VR游戏</b></p>
					<p>获奖游戏：《半衰期：爱莉克斯》</p>
					<p>其他提名游戏：《Dreams》、《漫威钢铁侠VR》、《星球大战：战机中队》、《行尸走肉》</p>
					<p><b>最佳动作游戏</b></p>
					<p>获奖游戏：《哈迪斯》</p>
					<p>其他提名游戏：《毁灭战士：永恒》、《半衰期：爱莉克斯》、《仁王2》、《怒之铁拳4》</p>
					<p><b>最佳美术指导</b></p>
					<p>获奖游戏：《对马岛之鬼》</p>
					<p>其他提名游戏：《最终幻想7：重制版》、《哈迪斯》、《精灵与萤火意志》、《最后生还者2》</p>
					<p><b>最佳游戏叙事</b></p>
					<p>获奖游戏：《最后生还者2》</p>
					<p>其他提名游戏：《十三机兵防卫圈》、《最终幻想7：重制版》、《对马岛之魂》、《哈迪斯》</p>
					<p><b>最具影响力游戏</b></p>
					<p>获奖游戏：《Tell Me Why》</p>
					<p>其他提名游戏：《if found》、《肯塔基0号路:TV版》、《Spiritfarer》、《走过至暗时刻》</p>
					<p><b>最佳多人游戏</b></p>
					<p>获奖游戏：《Among Us》</p>
					<p>其他提名游戏：《集合吧！动物森友会》、《使命召唤：战区》、《糖豆人：终极淘汰赛》、《无畏契约》</p>
					<p><b>最佳独立游戏</b></p>
					<p>获奖游戏：《哈迪斯》</p>
					<p>其他提名游戏：《洞窟探险2》、《糖豆人》、《恐鬼症》、《红怪》</p>
					<p><b>最佳格斗游戏</b></p>
					<p>获奖游戏：《真人快打11终极版》</p>
					<p>其他提名游戏：《一拳超人：无名英雄》、《街头霸王5冠军版》、《碧蓝幻想versus》、《夜下降生Exe:Late》</p>
					<p><b>最佳音效设计</b></p>
					<p>获奖游戏：《最后生还者2》</p>
					<p>其他提名游戏：《毁灭战士：永恒》、《对马岛之鬼》、《半衰期：爱莉克斯》、《生化危机3：重制版》</p>
					<p><b>最佳RPG</b></p>
					<p>获奖游戏：《最终幻想7：重制版》</p>
					<p>其他提名游戏：《原神》、《女神异闻录5：皇家版》、《废土3》、《如龙7：光与暗的去向》</p>
					<p><b>最佳无障碍创新游戏</b></p>
					<p>获奖游戏：《最后生还者2》</p>
					<p>其他提名游戏：《刺客信条：英灵殿》、《Grounded》、《HyperDot》、《看门狗：军团》</p>
					<p><b>玩家之声</b></p>
					<p>获奖游戏：《对马岛之鬼》</p>
					<p>其他提名游戏（第三轮前五名）：《毁灭者：永恒》、《哈迪斯》、《漫威蜘蛛侠：迈尔斯》、《最后的生还者2》</p>
					<p><b>最佳手游</b></p>
					<p>获奖游戏：《Among Us》</p>
					<p>其他提名游戏：《原神》、《使命召唤手游》、《宝可梦 Cafe Mix》、《符文之地传说》 </p>
					<div class="img">
						<img width="700px" src="../assets/news/new2-1.jpg">
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
	/* 右侧部分 */
	/* 右侧日历 */
	.calendar {
		margin-top: 40px;
	}
	
	/* 新闻正文部分 */
	b{
		color: #F0412A;
		font-weight: bolder;
	}
	.img {
		display: flex;
	}
	
	.img img {
		margin: 20px auto;
	}
	
	.mainText p {
		margin-top: 10px;
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
