<template>
  <div class="index-container">
    <header class="header">
      <img src="@/assets/image/logo.png">
      <div class="language-box">
        <span>中文</span>
        <span>|</span>
        <span>English</span>
      </div>
    </header>
    <nav class="nav">
      <ul class="nav-ul">
        <li >首页</li>
        <li>
          <a href="#">联盟介绍</a>
          <ul>
            <li><a href="#">Java</a></li>
            <li><a href="#">Javascript</a></li>
            <li><a href="#">HTML</a></li>
          </ul>
        </li>
        <li >理事会</li>
        <li >联盟成员</li>
        <li >新闻动态</li>
        <li >联盟活动</li>
        <li >增值服务</li>
        <li >联盟成果</li>
        <li >关于我们</li>

      </ul>
    </nav>
  </div>

</template>

<script type="text/ecmascript-6">

  export default{
    data() {
      return {
        datas: [],
        id: ''
      }
    },
    methods: {},
    created() {

    },
    components: {}

  }
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .index-container
    width 1920px
    background-color red
    .header
      width 100%
      height 120px
      display flex
      background-color yellow
      img
        width 508px
        height 83px
        display:block
        margin-left 360px
        margin-top 19px
      .language-box
        margin-left 593px
        margin-top 18px
        span
          cursor pointer
          width:28px
          height:15px
          font-size:14px
          font-family:MicrosoftYaHei
          color:rgba(37,64,111,1)
          line-height:14px


  .nav
    position: relative
    margin:0 auto
    width: 19200px
    height:40px
    border: 0
    background-color: #0099CC
    ul
      padding: 0
      &:hover
        display: block
      li
        list-style: none
        float: left
        margin-left 30px
        a
          color: #FFF
          width: 100px
          height: 40px
          display: block
          text-decoration: none
          text-align: center
          line-height: 40px
          font-family: Microsoft Yahei
          font-weight: 2px
          &:hover
            background-color: #6699FF
        ul
          background-color: #0099CC
          position: absolute
          display: none
          li
            float: none
            background-color: #6688EE
            a
              font-size: 13px
              font-weight: 0px

  .nav ul li:hover ul
    display: block


</style>
