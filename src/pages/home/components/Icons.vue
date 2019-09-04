<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="icons-wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(page, idx) in pages" :key="idx">
        <div class="icon-box"
             v-for="item in page"
             :key="item.id">
          <div class="icon-img-box">
            <img class="icon-img" :src="item.imgUrl"  />
          </div>
          <p class="icon-desc">{{ item.description }}</p>
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>   
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconsList: Array
  },
  data: function() {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages: function() {
      var pages = [];
      this.iconsList.forEach(function(item, idx) {
        var page = Math.floor(idx / 8); 
        if(!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item)
      })

      return pages;
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
@import '~styles/mixins.styl';
.icons-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
  margin: .2rem 0;
}

.icons-wrapper .icon-box {
  position: relative;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}

.icons-wrapper .icon-box .icon-img-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: .44rem;
}

.icons-wrapper .icon-box .icon-img-box .icon-img {
  display: block;
  height: 100%;
  margin: 0 auto;
}

.icons-wrapper .icon-box .icon-desc {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: .44rem;
  line-height: .44rem;
  text-align: center;
  color: $darkTxtColor;
  ellipsis();
}
</style>