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
					<h1>《暗黑4》第四季度新更新 独有装备将取代神话</h1>
					<p class="time">发布时间：2020-12-16 08:37:25</p>
					<div style="clear: both;"></div>
					<el-divider><i class="el-icon-reading"></i></el-divider>
				</div>
				<div class="mainText">
					<p>近日暴雪公布了《暗黑破坏神4》第四季度新更新，此次暴雪希望在一定程度上淡化装备的影响，加强职业特色。物品和技能需要直接跟职业挂钩，加强深层次的个人化定制和配装。同时需要强调物品应该是辅助和加强职业本身，而不是根据物品的配置就可以定义一个职业。</p>
					<div class="img">
						<img width="700px" src="../assets/news/new8-1.jpg">
					</div>
					<p>暴雪准备把《暗黑4》游戏深度控制在《暗黑2》和《暗黑3》之间，目标是提供超大内容和“无数”BD供玩家选择。</p>
					<P><b>技能树</b></p>
					<p>技能树是一个正确的方向，暴雪希望技能的选择给角色带来不同感受。暴雪将对其进行迭代并进一步改进，技能树洗点是无限次的，但不是免费的。前期洗点很轻松，后期成本会大大增加。</p>
					<P><b>属性点回归</b></p>
					<p>暴雪研究了暗黑系列早期作品经典RPG元素，当你在打怪时，你实际在做什么?你正在不断训练你的技能，你变得越来越熟练，强大和聪明。</p>
					<div class="img">
						<img width="700px" src="../assets/news/new8-2.gif">
					</div>
					<p>升一级，将获得力量，智力，敏捷或意志点数以及技能点，不同职业，主属性点的加成也不一样，比如野蛮人力量加技能伤害，法师力量则加防御。</p>
					<div class="img">
						<img width="700px" src="../assets/news/new8-3.jpg">
					</div>
					<p>装备会提供少量的属性点选择，但大部分的属性点组合将来自玩家有限的分配。每个职业拥有繁多的技能树选择的同时，玩家可以用属性点来解锁技能的第三形态。</p>
					<P><b>新系统：属性点可以解锁技能的升级效果</b></p>
					<div class="img">
						<img width="700px" src="../assets/news/new8-4.jpg">
					</div>
					<div class="img">
						<img width="700px" src="../assets/news/new8-5.jpg">
					</div>
					<p><b>武器类型</b></p>
					<p>最新的内部测试中为所有武器增加了武器速度和固有特性。比如快速单手武器和慢速双手武器，除速度外，每种武器都有其固有的物理特性。比如盾牌来说，任何盾牌无论品质如何都有格挡值。</p>
					<div class="img">
						<img width="700px" src="../assets/news/new8-6.jpg">
					</div>
					<P><b>物品质量</b></p>
					<p>改动：魔法装备上词缀的范围上调，稀有装备上词缀数量上调。传奇词缀现在会随机出现在任意传奇物品上，用独有装备取代神话装备。</p>
					<div class="img">
						<img width="700px" src="../assets/news/new8-7.jpg">
					</div>
					<p>魔法装备 - 提升了单条属性词缀的潜力，拥有最强大的单条词缀</p>
					<p>稀有装备 - 提升了最大数量的词缀栏以及后期游戏中黄装的强度，拥有5个条词缀</p>
					<p>传奇装备 - 传奇词缀现在在传奇物品中随机，拥有4个常规词缀和1个传奇词缀</p>
					<p>独有装备 - 代替神话装备</p>
					<P><b>传奇词缀</b></p>
					<div class="img">
						<img width="700px" src="../assets/news/new8-8.jpg">
					</div>
					<p>《可以把传奇物品想象成有一个词缀被替换为传奇效果的稀有物品。新的传奇词缀就像常规词缀一样，可以在不同物品和不同的装备槽中随机得到。</p>
					<p><b>独有装备</b></p>
					<div class="img">
						<img width="700px" src="../assets/news/new8-9.jpg">
					</div>
					<p>独有装备就是带有完全固定词缀，主题鲜明且通常是职业特定技能的拥有独特外观的装备。神话装备被替换，其概念用在了传奇物品上。</p>
					<p>暴雪表示喜欢神话装备的理念，但并不想设计出碾压其他物品的装备和词缀，所以做了折中。在独有装备的设计上有一件事是确定的，就是物品的传奇特效和强度是随机的。</p>
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
		color: #E6A23C;
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
