<template>
	<div>
		<home-header></home-header>
		<home-swiper :swiper-list="swiperList"></home-swiper>
		<home-icons :icons-list="iconsList"></home-icons>
		<home-recommend :recommend-list="recommendList"></home-recommend>
		<home-weekend :weekend-list="weekendList"></home-weekend>
	</div>
</template>

<script>
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper';
import HomeIcons from './components/Icons';
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
	name: 'Home',
	components: {
		'home-header': HomeHeader,
		'home-swiper': HomeSwiper,
		'home-icons': HomeIcons,
		'home-recommend': HomeRecommend,
		'home-weekend': HomeWeekend
	},
	computed: {
		...mapState({
			curCity: 'city'
		})
	},
	data: function() {
		return {
			lastCity: '',
			swiperList: [],
			iconsList: [],
			recommendList: [],
			weekendList: []
		}
	},
	methods: {
		getHomeInfo: function() {
			axios.get('/api/index.json?city=' + this.curCity)
			  .then(this.getHomeInfoSuccess)
		},
		getHomeInfoSuccess: function(res) {
			if (res.data.ret && res.data.data) {
				var data = res.data.data;
				this.swiperList = data.swiperList;
				this.iconsList = data.iconsList;
				this.recommendList = data.recommendList;
				this.weekendList = data.weekendList;
			}
		}
	},
	mounted: function() {
		this.lastCity = this.curCity;
		this.getHomeInfo();
	},
	activated: function() {
		if (this.lastCity !== this.curCity) {
			this.lastCity = this.curCity;
			this.getHomeInfo();
		}
	}
}
</script>

<style>

</style>