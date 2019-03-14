<template>
  <div>

    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <router-link :to="'/home/newsinfo/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{item.titile}}</h1>
            <p class='mui-ellipsis'>
              <span>发表时间:{{item.add_time}}</span>
              <span>点击:{{item.click}}</span>
            </p>
          </div>
        </router-link>
      </li>


    </ul>

  </div>
</template>

<script>
  export default {
    name: "newsList",
    data(){
      return{
        newslist:[
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:1,
          click:1,
          add_time:"2015-05-05  16:36",
          titile:"一季度多家房地产公司",
          zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:2,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:3,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:4,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:5,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:6,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:7,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:8,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:9,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:10,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:11,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:12,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:13,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:14,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:15,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:16,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:17,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:18,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:19,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:20,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"},
          {img_url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552467219983&di=707da2461d7f2034e9378e6564c6f438&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F01%2F15%2F51V58PICNre_1024.jpg",
            id:21,
            click:1,
            add_time:"2015-05-05  16:36",
            titile:"一季度多家房地产公司",
            zhaiyao:"房企一季度销售业绩公开  铺面而来"}
        ]
      }
    },
    created(){
      this.getNewsList()
    },
    methods:{
      getNewsList(){
         console.log('获取新闻数据')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mui-table-view{
    h1{font-size: 14px}
    .mui-ellipsis{
      font-size: 12px;
      color: #1b6d85;
      display: flex;
      justify-content: space-between;
    }
  }
</style>