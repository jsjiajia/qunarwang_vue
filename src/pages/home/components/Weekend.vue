<template>
	<div>
		<div class="recommend-title">
			周末去哪儿
		</div>
		<ul>
			<router-link 
				tag="li"
				class="list-item"
				v-for="item in weekendList"
				:key="item.id"
				to="/detail">
				<div class="item-img">
					<img :src="item.imgUrl" />
				</div>
				<div class="item-info">
					<div class="info-title">{{ item.title }}</div>
					<div class="info-comment">
						{{ item.comment }}
					</div>
				</div>
			</router-link>
		</ul>	
	</div>
</template>

<script>
export default {
	name: 'HomeWeekend',
	props: {
		weekendList: Array
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
@import '~styles/mixins.styl';
div {
	box-sizing: border-box;
}

.recommend-title {
	width: 100%;
	height: .8rem;
	line-height: .8rem;
	font-size: .28rem;
	background-color: #eee;
	padding: 0 .2rem;
}

.list-item .item-img {
	width: 100%;
	height: 0;
	padding-bottom: 37.1%;
}

.list-item .item-img img {
	width: 100%;
}

.list-item .item-info {
	padding: .14rem .2rem .2rem;
}

.item-info .inner-box .info-title {
	width: 100%;
	height: .48rem;
	line-height: .48rem;
	font-size: .28rem;
	ellipsis()
}

.item-info .info-comment {
	width: 100%;
	height: .42rem;
	line-height: .28rem;
	font-size: .24rem;
	color: $lightTxtColor;
}
</style>