<template>
  <div class="newsinfo-container">
    <h3 class="title">{{title}}</h3>
    <p class="subtitle">
      <span>发表事件{{time}}</span>
      <span>{{click}}</span>
    </p>

    <hr>

    <div class="content" >
      {{content}}
    </div>

    <comment></comment>
  </div>
</template>

<script>
  import comment from '../subcomponents/comment.vue'
  export default {
    name: "newsinfo",
    data(){
      return{
        id:this.$route.params.id,
        title:'许家印 范冰冰',
        time:'2015-1-1 11:33:33',
        click:111,
        content:`d afs fa sdf a我和哦分欧剑锋流口水到家了解放路就快睡觉凉快撒地方是减肥了手机发的啦就到了开始放假了撒多久老师就分了
        dsf f sdf sdf 问发生的打发说的舒服水电费发生大幅水电费水电费说的发生的说的发生的说的水电费舒服水电费水电费水电费水电费水电费sd 第三方sd
         水电费水电费水电费水电费水电费水电费水电费 高富帅古典风格是非观风格电饭锅水电费地方电风扇水电费说的发生的发生的发生的f说的方式d
         是电风扇电风扇电风扇都是发生的发生的发生的发生的发生的发个发生过梵蒂冈佛挡杀佛发生过梵蒂冈风格电饭锅水电费水电费 佛山大道沙发上`

      }
    },
    components:{
      comment
    }
  }
</script>

<style lang="scss" scoped>
.newsinfo-container{
  padding:0 5px;
  .title{
    font-size: 16px;
    text-align: center;
    margin:15px 0;
    color: red;
  }
  .subtitle{
    font-size: 13px;
    color: #5bc0de;
    display: flex;
    justify-content: space-between;

  }
  .content{}
}
</style>