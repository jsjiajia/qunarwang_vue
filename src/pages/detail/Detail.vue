<template>
	<div>
		<detail-banner 
			:sight-name="sightName"
			:banner-image="bannerImage"
			:gallery-images="galleryImages"
		></detail-banner>
		<detail-header></detail-header>
		<div class="content-box">
			<detail-list :category-list="categoryList"></detail-list>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
export default {
	name: 'Detail',
	components: {
		'detail-banner': DetailBanner,
		'detail-header': DetailHeader,
		'detail-list': DetailList
	},
	data: function() {
		return {
			sightName: '',
			bannerImage: '',
			galleryImages: [],
			categoryList: []
		}
	},
	methods: {
		getDetailInfo: function() {
			axios.get('/api/detail.json', {
				params: {
					id: this.$route.params.id
				}
			})
			.then(this.getDetailInfoSuccess)
		},
		getDetailInfoSuccess: function(res) {
			if (res.data.ret && res.data.data) {
				var data = res.data.data;
				this.sightName = data.sightName;
				this.bannerImage = data.bannerImage;
				this.galleryImages = data.galleryImages;
				this.categoryList = data.categoryList;
			}
		}
	},	
	mounted: function() {
		this.getDetailInfo();
	}
}
</script>

<style lang="stylus" scoped>
.content-box {
	height: 50rem;
}
</style>