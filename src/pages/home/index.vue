<template>
  <div>
    <div class="header">
      <span class="title">豆画</span>
      <icon color='#00b600' type="search" size="16"/>
      <button class="btn">打开豆画APP</button>
    </div>
    <!-- 影院详情 -->
    <div class="move_item">
      <div class="move_title">
        <span class="move_hot">影院热映</span>
        <span class="move_more">更多</span>
      </div>
       <scroll-view class="scroll-view_H" scroll-x="true" bindscroll="scroll" style="width: 100%">
          <view id="demo1" class="scroll-view-item_H" v-for="(item,index) in 20">
            <img src="https://img3.doubanio.com/view/photo/m_ratio_poster/public/p2574040764.jpg" alt="">
            <p>扫毒2</p>
            <div class="rating">
              <img class="start" src="../../../static/images/star.svg" alt="" >
              <span>5.0</span>
            </div>
          </view>
        </scroll-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' src='./css/index.less'> 
</style>