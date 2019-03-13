<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" alt="">
      </mt-swipe-item>

    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu1.png" alt="">
        <div class="mui-media-body">新闻资讯</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu2.png" alt="">
        <div class="mui-media-body">图片分享</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu3.png" alt="">
        <div class="mui-media-body">商品购买</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu4.png" alt="">
        <div class="mui-media-body">留言反馈</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu5.png" alt="">
        <div class="mui-media-body">视频专区</div></a></li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
        <img src="../../images/menu6.png" alt="">
        <div class="mui-media-body">联系我们</div></a></li>

    </ul>

    <h3>Home组件</h3>
  </div>
</template>

<script>
  export default {
    name: "home",
    data(){
      return{
        lunbotuList:[
          {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
          url:"1"},
          {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467697480&di=cf8ebc55198d2862614c6edb89a76a1f&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01b266571dd33b32f875a3996d817b.jpg%402o.jpg",
            url:"2"},
          {img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553062446&di=49e6753cad9eb2f0354ac8233f3ddac4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0111ee55440a300000019ae9c33662.jpg",
            url:"3"}
        ]
      };
    },
    created(){
      this.getlunbotu()
    },
    methods:{
      getlunbotu(){
        console.log('用data数据')
        }
      }
    }

</script>

<style lang="scss" scoped>
.mint-swipe{
  height: 200px;
  .mint-swipe-item{
    &:nth-child(1){
      background-color: red;
    }
    &:nth-child(2){
      background-color: black;
    }
    &:nth-child(3){
      background-color: blue;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }

}


.mui-grid-view.mui-grid-9{
  background-color: #fff;
  border:none;
  img{
    width: 60px;
    height: 60px;
  }
  .mui-media-body{
    font-size: 13px;
  }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border:0;
}
</style>