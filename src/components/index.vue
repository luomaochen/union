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
        <li class="nav-li">
          <a href="#">首页</a>
        </li>
        <li class="nav-li">
          <a href="#">联盟介绍</a>
          <ul class="nav-ul-ul">
            <li><a href="#" class="li-a">联盟简介</a></li>
            <li><a href="#" class="li-a">联盟架构</a></li>
            <li><a href="#" class="li-a">联盟章程</a></li>
            <li><a href="#" class="li-a">联盟宣言</a></li>
          </ul>
        </li>
        <li class="nav-li"><a href="#">理事会</a></li>
        <li class="nav-li"><a href="#">联盟成员</a></li>
        <li class="nav-li"><a href="#">新闻动态</a></li>
        <li class="nav-li"><a href="#">联盟活动</a></li>
        <li class="nav-li"><a href="#">增值服务</a></li>
        <li class="nav-li"><a href="#">联盟成果</a></li>
        <li class="nav-li"><a href="#">关于我们</a></li>

      </ul>
    </nav>
    <section class="img-box">
      <img src="@/assets/image/bigimg.png">
    </section>
    <section class="message-introduce-wrap">
      <article class="union-introduce">
        <div class="union-introduce-title">
          <span>联盟介绍</span>
          <span>Introduction to the Alliance</span>
        </div>
        <div class="union-introduce-img">
          <img src="@/assets/image/introduce.png">
        </div>
        <div class="union-introduce-content">
          <p>
            一带一路泛珠宝时尚产业联盟（The Belt and Road Jewelry-<br/>Extended Fashion Industry League 简称
            JFIL）是依托中国“一带一路”发展倡议，以升级全球泛珠宝产业为己任，通过泛珠宝领域的跨国交流实现“一带一路”沿线国家经济、政治、文化深度合作，增进各国人民的生活质量与相互认同，推动形成全球泛珠宝时尚产业共同体的资源平台。
          </p>
        </div>

      </article>
      <article class="news-information-wrap">
        <div class="news-information-title">
          <span>新闻动态</span>
          <span>News developments</span>
        </div>
        <div class="news-box">
          <div class="news">
            <span>Logo/Brand VI design 标志设计	</span>
            <span>2017-03-30</span>
          </div>
          <div class="news">
            <span>企业标志LOGO设计有哪些事项是需要忌讳和注意的</span>
            <span>2017-03-30</span>
          </div>
          <div class="news">
            <span>包装设计如何凸显品牌形象之包装图案设计的重要性</span>
            <span>2017-03-30</span>
          </div>
          <div class="news">
            <span>品牌设计让你的品牌更具价值</span>
            <span>2017-03-30</span>
          </div>
          <div class="news">
            <span>如何做好企业画册设计？什么样的设计才是好设计？</span>
            <span>2017-03-30</span>
          </div>
          <div class="news">
            <span>品牌设计让你的品牌更具价值</span>
            <span>2017-03-30</span>
          </div>
          <div class="news">
            <span>如何做好企业画册设计？什么样的设计才是好设计？</span>
            <span>2017-03-30</span>
          </div>

        </div>
      </article>
    </section>
    <section class="director-wrap">
        <div class="director-wrap-title">
          <span>理事介绍</span>
          <span>Director's introduction</span>
        </div>
    </section>
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
    height 2239px

    .header
      width 100%
      height 120px
      margin-bottom 0
      display flex
      img
        width 508px
        height 83px
        display: block
        margin-left 360px
        margin-top 19px
      .language-box
        margin-left 593px
        margin-top 18px
        span
          cursor pointer
          width: 28px
          height: 15px
          font-size: 14px
          font-family: MicrosoftYaHei
          color: rgba(37, 64, 111, 1)
          line-height: 14px

    .nav
      margin: 0 auto
      width: 1920px;
      height: 40px
      background: rgba(78, 38, 21, 0.05)
      border: 0
      .nav-ul
        padding: 0
        margin-left 331px
        &:hover
          display: block
        .nav-li
          list-style: none
          float: left
          margin-left 80px
          width: 57px
          height: 15px
          font-size: 14px
          font-family: MicrosoftYaHei
          color: #333333
          line-height: 14px
          position relative
          &:hover .nav-ul-ul
            display: block
          a
            color #333333
            width: 57px
            height: 40px
            display: block
            text-decoration: none
            text-align: center
            line-height: 40px
            font-family: Microsoft Yahei
            font-weight: 2px
            &:hover
              color #25406F

          .nav-ul-ul
            padding: 0
            background-color: #25406F
            position: absolute
            left: -35.5px
            display: none
            width 130px
            height 130px
            li
              list-style: none
              display: block
              width 130px
              height 32.5px
              background-color: #25406F
              .li-a
                color: rgba(229, 229, 229, 1)
                width: 130px
                height: 32.5px
                display: block
                text-decoration: none
                text-align: center
                line-height: 32.5px
                font-family: Microsoft Yahei
                font-weight: 2px
                &:hover
                  background-color: #6699FF

    .img-box
      width 100%
      height 560px
      img
        width 100%
        height 560px

    .message-introduce-wrap
      width 100%
      height 620px
      display: flex
      .union-introduce
        width 540px
        height 590px
        margin-left 360px
        margin-top 30px
        .union-introduce-title
          width 100%
          height 28px
          span:first-child
            width: 98px
            height: 24px
            font-size: 24px
            font-family: MicrosoftYaHei
            color: #25406F
            line-height: 24px
          span:second-child
            margin-left 9px
            width: 226px
            height: 14px
            font-size: 16px
            font-family: MicrosoftYaHei
            color: #25406F
            line-height: 14px
        .union-introduce-img
          margin-top 28px
          margin-bottom 0
          width 540px
          height 260px
          img
            width 540px
            height 260px
        .union-introduce-content
          background-color #FAFAFA
          padding-top 20px
          p
            margin auto
            width: 488px
            height: 220px
            font-size: 16px
            font-family: MicrosoftYaHei
            color: rgba(51, 51, 51, 1)
            line-height: 30px
            text-indent: 32px

      .news-information-wrap
        width 544px
        height 590px
        margin-left 115px
        margin-top 30px
        .news-information-title
          width 100%
          height 28px
          span:first-child
            width: 98px
            height: 24px
            font-size: 24px
            font-family: MicrosoftYaHei
            color: #25406F
            line-height: 24px
          span:second-child
            margin-left 9px
            width: 226px
            height: 14px
            font-size: 16px
            font-family: MicrosoftYaHei
            color: #25406F
            line-height: 14px
        .news-box
          margin-top 37px
          width 544px
          height 315px
          .news
            display flex
            justify-content space-between
            height 48px
            align-items center
            border-bottom:1px dotted
            span
              color #666666
              font-size 14px
</style>
