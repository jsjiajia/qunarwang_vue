<template>
	<div class="gallery-container" @click="handleGalleryClick">
		<div class="img-wrapper">
			<swiper :options="swiperOptions">
	      <!-- slides -->
	      <swiper-slide v-for="(item, index) in imgsList"
	      							:key="index">
	        <img class="gallery-img" :src="item" />
	      </swiper-slide>
	      <div class="swiper-pagination" slot="pagination"></div>
	    </swiper>   
		</div>
	</div>
</template>

<script>
export default {
	name: 'CommonGallery',
	props: {
		imgsList: {
			type: Array,
			default: function() {
				return []
			}
		}
	},
	data: function() {
		return {
			swiperOptions: {
				pagination: '.swiper-pagination',
				paginationType: 'fraction',
				observer: true,
				observeParents: true
			}
		}
	},
	methods: {
		handleGalleryClick: function() {
			this.$emit('closeGallery');
		}
	}
}
</script>

<style lang="stylus" scoped>
div {
	display: flex;
}

.gallery-container >>> .swiper-container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.gallery-container >>> .swiper-slide {
	flex-direction: column;
	justify-content: center;
}

.gallery-container {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: fixed;
	z-index: 99;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #000;
}

.gallery-container .img-wrapper {
	width: 100%;
	height: 0;
	padding-bottom: 100%;
}

.gallery-container .img-wrapper img {
	width: 100%;
}

.gallery-container .img-wrapper .swiper-pagination {
	bottom: .48rem;
	color: #fff;
	justify-content: center;
}
</style>