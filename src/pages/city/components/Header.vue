<template>
	<div class="header">
		<router-link to="/">
			<span class="iconfont city-back">&#xe624;</span>
		</router-link>
		城市选择
	</div>
</template>

<script>
export default {
	name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
.header {
	position: relative;
	width: 100%;
	height: .88rem;
	line-height: .88rem;
	text-align: center;
	color: #fff;
	background-color: $bgColor;
}

.header .city-back {
	position: absolute;
	top: 0;
	left: .2rem;
	color: #fff;
}
</style>