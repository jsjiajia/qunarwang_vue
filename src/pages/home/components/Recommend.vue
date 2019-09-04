<template>
	<div>
		<div class="recommend-title">
			<span class="iconfont icon-heart">&#xe757;</span>猜你喜欢
		</div>
		<ul>
			<router-link 
				tag="li"
				class="list-item"
				v-for="item in recommendList"
				:key="item.id"
				:to="'/detail/' + item.id">
				<div class="item-img">
					<img :src="item.imgUrl" />
				</div>
				<div class="item-img-tag">{{ item.tag }}</div>
				<div class="item-info">
					<div class="inner-box">
						<div class="info-title">{{ item.title }}</div>
						<div class="info-comment">
							<span class="iconfont icon-star">&#xe670;</span>
							<span class="iconfont icon-star">&#xe670;</span>
							<span class="iconfont icon-star">&#xe670;</span>
							<span class="iconfont icon-star">&#xe670;</span>
							<span class="iconfont icon-star">&#xe670;</span>
							<span class="comment-num">{{ item.commentNum }}条评论</span>
						</div>
						<div class="info-price">
							<span class="price">￥<em>{{ item.price }}</em></span>起
							<span class="district">{{ item.district }}</span>
						</div>
					</div>
				</div>
			</router-link>
		</ul>	
	</div>
</template>

<script>
export default {
	name: 'HomeRecommend',
	props: {
		recommendList: Array
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
	font-size: .32rem;
	background-color: #eee;
	padding: 0 .2rem;
}

.recommend-title .icon-heart {
	color: #FF4040;
}

.list-item {
	position: relative;
	display: flex;
	width: 100%;
	height: 2.4rem;
}

.list-item .item-img {
	width: 2.4rem;
	height: 2.4rem;
	padding: .2rem;
}

.list-item .item-img img {
	width: 100%;
	height: 100%;
}

.list-item .item-img-tag {
	position: absolute;
	top: .2rem;
	left: .2rem;
	width: 1.02rem;
	height: .38rem;
	line-height: .38rem;
	background-image: url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png);
	background-size: 100% 100%;
	font-size: .2rem;
	color: #fff;
	text-indent: .04rem;
}

.list-item .item-info {
	flex: 1;
	padding: .4rem .1rem;
	min-width: 0;
}

.list-item .item-info .inner-box {
	width: 100%;
	height: 100%;
}

.item-info .inner-box .info-title {
	width: 100%;
	height: .6rem;
	line-height: .6rem;
	font-size: .32rem;
	ellipsis()
}

.item-info .inner-box .info-comment {
	width: 100%;
	height: .4rem;
	line-height: .4rem;
	font-size: .24rem;
}

.item-info .inner-box .info-comment .icon-star {
	font-size: .2rem;
	color: #ffb436;
}

.item-info .inner-box .info-comment .comment-num {
	color: $lightTxtColor;
}

.item-info .inner-box .info-price {
	position: relative;
	width: 100%;
	height: .6rem;
	line-height: .6rem;
	color: $lightTxtColor;
}

.item-info .inner-box .info-price span {
	font-size: .24rem;
}

.item-info .inner-box .info-price .district {
	position: absolute;
	bottom: 0;
	right: .24rem;
}

.item-info .inner-box .info-price .price {
	color: #ff8300;
}

.item-info .inner-box .info-price .price em {
	font-size: .4rem;
}
</style>