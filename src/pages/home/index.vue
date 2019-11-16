<template>
  <div>
    <div class="header">
      <span class="title">豆画</span>
      <icon color='#00b600'
            type="search"
            size="16" />
      <button class="btn">打开豆画APP</button>
    </div>
    <div class="move_item"
         v-for="(k,i) in categoryList"
         :key="k.name"
         v-if="categoryList[0].list.length">
      <div class="move_title">
        <span class="move_hot">{{k.name}}</span>
        <span class="move_more">更多</span>
      </div>
      <scroll-view class="scroll-view_H"
                   scroll-x="true"
                   bindscroll="scroll"
                   style="width: 100%">
        <view id="demo1"
              class="scroll-view-item_H"
              v-for="item in k.list"
              :key="item.id">
          <img :src="item.images.large"
               alt="">
          <p>{{item.title}}</p>
          <div class="rating">
            <img class="start"
                 src="../../../static/images/star.svg"
                 alt=""
                 v-for="(item2,index2) in item.startNum"
                 :key="index2"
                 v-if="item.rating.average">
            <img class="start"
                 src="../../../static/images/unstar.svg"
                 alt=""
                 v-for="(item2,index2) in 5-item.startNum"
                 :key="index2"
                 v-if="item.rating.average">

            <span>{{item.rating.average?item.rating.average:'暂无评论'}}</span>
          </div>
        </view>
      </scroll-view>
    </div>
  </div>
</template>

<script src='./js/index.js'>
</script>

<style lang='less' src='./css/index.less'>
</style>