import Vue from 'vue'
import App from './App.vue'
// 导入全局初始化样式
import "./assets/css/reset.css"
// 导入路由
import VueRouter from "vue-router";
// 导入element.ui
import ElementUI from 'element-ui';
import store from '@/vuex/store' // 引入store
import 'element-ui/lib/theme-chalk/index.css';
import less from 'less'

Vue.use(VueRouter);
Vue.use(less)
Vue.use(ElementUI);

// 导入路由对应的路径
import index from './views/index.vue'
import home from './views/home.vue'
import main from './views/main.vue'
import news from './views/news.vue'
import new1 from './views/new-1.vue'
import new2 from './views/new-2.vue'
import new3 from './views/new-3.vue'
import new4 from './views/new-4.vue'
import new5 from './views/new-5.vue'
import new6 from './views/new-6.vue'
import new7 from './views/new-7.vue'
import new8 from './views/new-8.vue'
import new9 from './views/new-9.vue'
import newA from './views/new-A.vue'
import newB from './views/new-B.vue'
import newC from './views/new-C.vue'
import shop from './views/shop.vue'
import rank from './views/ranking.vue'

const router = new VueRouter({
	routes: [{
		// 默认页
			path: '/',
			redirect: '/index',
		},
		{
			// 主页
			path: '/index',
			component: index,
		},
		{
			// 首页
			path: '/home',
			component: home,
		},
		{
			// 商店
			path: '/shop',
			component: shop,
		},
		{
			// 排行
			path: '/rank',
			component: rank,
		},
		{
			// 推荐
			path: '/main',
			component: main,
		},
		{
			// 游戏新闻页
			path: '/news',
			component: news,
		},
		{
			// 游戏新闻详情页
			path: '/news/new1',
			component: new1,
		},
		{
			// 游戏新闻详情页
			path: '/news/new2',
			component: new2,
		},
		{
			// 游戏新闻详情页
			path: '/news/new3',
			component: new3,
		},
		{
			// 游戏新闻详情页
			path: '/news/new4',
			component: new4,
		},
		{
			// 游戏新闻详情页
			path: '/news/new5',
			component: new5,
		},
		{
			// 游戏新闻详情页
			path: '/news/new6',
			component: new6,
		},
		{
			// 游戏新闻详情页
			path: '/news/new7',
			component: new7,
		},
		{
			// 游戏新闻详情页
			path: '/news/new8',
			component: new8,
		},
		{
			// 游戏新闻详情页
			path: '/news/new9',
			component: new9,
		},
		{
			// 游戏新闻详情页
			path: '/news/newA',
			component: newA,
		},
		{
			// 游戏新闻详情页
			path: '/news/newB',
			component: newB,
		},
		{
			// 游戏新闻详情页
			path: '/news/newC',
			component: newC,
		},
	]
})

Vue.config.productionTip = false

// 点击router-link后回到顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')
