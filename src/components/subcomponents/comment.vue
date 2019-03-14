<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="评论的内容请输入(120字以内) maxlength=120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          用户1
        </div>
        <div class="cmt-body">
          这里是评论内容
        </div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          用户1
        </div>
        <div class="cmt-body">
          这里是评论内容
        </div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          用户1
        </div>
        <div class="cmt-body">
          这里是评论内容
        </div>
      </div>
    </div>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          用户1
        </div>
        <div class="cmt-body">
          这里是评论内容
        </div>
      </div>
    </div>


    <mt-button type="danger" size="large">加载更多</mt-button>
  </div>
</template>

<script>
  export default {
    name: "comment"
  }
</script>

<style lang="scss" scoped>
  .cmt-container{
    h3{
      font-size:18px;
    }
    textarea{
      font-size: 14px;
      height: 100px;
      margin:0;
    }
    .cmt-list{
      margin: 10px 0;
      .cmt-item{
        font-size: 11px;
        .cmt-title{
          line-height: 30px;
          background-color: #ccc;
        }
        .cmt-body{
          line-height: 35px;
          text-indent:2em;
        }
      }
    }
  }
</style>