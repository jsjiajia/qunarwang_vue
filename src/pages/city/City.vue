<template>
	<div>
		<city-header></city-header>
		<city-list :hot-cities="hotCities" :cities="cities"></city-list>
	</div>
</template>

<script>
import axios from 'axios';
import CityHeader from './components/Header.vue';
import CityList from './components/List.vue';
export default {
	name: 'city',
	components: {
		'city-header': CityHeader,
		'city-list': CityList
	},
	data: function() {
		return {
			hotCities: [],
			cities: {}
		}
	},
	methods: {
		getCityInfo: function() {
			axios.get('/api/city.json')
				.then(this.getCityInfoSuccess)
		},
		getCityInfoSuccess: function(res) {
			var data = res.data.data;
			this.hotCities = data.hotCities;
			this.cities = data.cities;
		}
	},
	mounted: function() {
		this.getCityInfo();
	}
}
</script>