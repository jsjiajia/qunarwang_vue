<template>
	<div>
		<div class="list-item" 
			 	 v-for="(item, index) in list"
			   :key="index">
			<div class="list-item-title border-bottom">
				<span class="item-title-icon"></span>
				{{ item.title }}
			</div>
			<div v-if="item.children" class="item-children">
				<detail-list :list="item.children"></detail-list>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'DetailList',
	props: {
		list: Array
	}
}
</script>

<style lang="stylus" scoped>
.list-item-title {
	width: 100%;
	height: .8rem;
	line-height: .8rem;
	font-size: .32rem;
	padding: 0 .2rem;
	text-indent: .4rem;
}

.list-item-title .item-title-icon {
	display: inline-block;
  position: absolute;
  width: .36rem;
  height: .36rem;
  top: .26rem;
  left: .2rem;
  background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
  margin-right: .1rem;
  background-size: .4rem 3rem;
}

.list-item .item-children {
	padding: 0 .2rem;
}
</style>