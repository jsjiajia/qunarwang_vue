<template>
	<div>
		<router-link 
			tag="div" 
			to="/" 
			class="header-back" 
			v-show="showHeaderBack">
			<span class="iconfont icon-back">&#xe624;</span>
		</router-link>
		<div class="header" 
				:style="opacityStyle"
				v-show="!showHeaderBack">
			<router-link to="/" class="header-left">
				<span class="iconfont header-left-back">&#xe624;</span>
			</router-link>
			故宫(AAAAA景区)
		</div>		
	</div>
</template>

<script>
export default {
	name: 'DetailHeader',
	data: function() {
		return {
			showHeaderBack: true,
			opacityStyle: {
				opacity: 0
			}
		}
	},
	methods: {
		handleScroll: function() {
			var top = document.documentElement.scrollTop;
			if (top > 50) {
				var opacity = top / 100; 
				opacity = opacity > 1 ? 1 : opacity
				this.opacityStyle = {
					opacity: opacity
				}
				this.showHeaderBack = false
			} else {
				this.showHeaderBack = true
			}
		}
	},
	mounted: function() {
		window.addEventListener('scroll', this.handleScroll)
	}
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header-back {
	position: absolute;
	top: .2rem;
	left: .2rem;
	width: .8rem;
	height: .8rem;
	line-height: .8rem;
	text-align: center;
	border-radius: .4rem;
	background-color: rgba(0, 0, 0, .8);
}

.header-back .icon-back {
	color: #fff;
	font-size: .4rem;
}

.header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: .88rem;
	line-height: .88rem;
	text-align: center;
	color: #fff;
	font-size: .32rem;
	background-color: $bgColor;	
	z-index: 2;
}

.header .header-left {
	position: absolute;
	top: 0;
	left: 0;
	display: inline-block;
	width: .8rem;
	height: 100%;
	color: #fff;
}
</style>