<template>
	<div id="app">
		<top v-if="$store.state.componentsShow" />
		<router-view />
		<buttom v-if="$store.state.componentsShow" />
	</div>
</template>

<script>
	import top from './components/top.vue';
	import buttom from './components/buttom.vue';

	export default {
		name: 'app',
		components: {
			top,
			buttom,
		},

	};
</script>

<style>
	#app {
		font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		width: 100%;
		height: 20%;
		background-color: #ebecee;
	}
	::-webkit-scrollbar { /*滚动条整体样式*/
	    width: 5px !important;; /*高宽分别对应横竖滚动条的尺寸*/
	    height: 6px !important;;
	    background: #ebecee !important;;
	    cursor: pointer !important;
	
	}
	
	::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
	    border-radius: 5px !important;
	    -webkit-box-shadow: inset 0 0 5px rgba(240, 240, 240, .2) !important;;
	    background: rgba(63, 98, 131, 0.6) !important;;
	    cursor: pointer !important;
	}
	
	::-webkit-scrollbar-track { /*滚动条里面轨道*/
	    -webkit-box-shadow: inset 0 0 1px rgba(240, 240, 240, .5) !important;;
	    border-radius: 0 !important;;
	    background: rgba(240, 240, 240, 0.5) !important;;
	    cursor: pointer !important;
	}
</style>
