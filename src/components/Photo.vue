<template>
  <main role="main" class="flex-shrink-0">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h3 class="jumbotron-heading">留下影像的，都是记不清的场景……</h3>
      <p class="lead text-muted">发胖、脱发、谢顶、老脸松弛的时间线！</p>
    </div>
    <div id="context">
      <vue-waterfall-easy
        ref="waterfall"
        :imgsArr="imgsArr"
        :imgWidth="360"
        :maxCols="3"
        :loadingDotCount="0"
        :enablePullDownEvent="true"
        :isRouterLink="true"
        :linkRange="linkRange"
        @scrollReachBottom="getData"
      >
        <div class="img-info" slot-scope="props">
          <div class="card mb-4 shadow-sm">
            <div class="card-body">
              <p class="card-text some-info">{{props.value.info}}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group"></div>
                <small class="text-muted some-info">{{props.index+1996+1}}</small>
              </div>
            </div>
          </div>
        </div>
      </vue-waterfall-easy>
    </div>
  </main>
</template>


<script>
import vueWaterfallEasy from "vue-waterfall-easy";

export default {
  data() {
    return {
      imgsArr: [],
      linkRange: "card",
      flag: false
    };
  },

  components: {
    vueWaterfallEasy
  },

  methods: {
    getData() {
      if (this.flag) {
        return;
      }

      this.imgsArr = [
        {
          src: "/static/img/1997/1.jpg",
          href: "/photo_1997",
          info: "加入 WTO 之前，我们都是土鳖……"
        },
        {
          src: "/static/img/1998/2.jpg",
          href: "/photo_1998",
          info: "南方发大水，我们浪啊浪……"
        },
        {
          src: "/static/img/1999/0.jpg",
          href: "/photo_1999",
          info: "本以为是结束，其实才刚刚开始……"
        },
        {
          src: "/static/img/2000/3.jpg",
          href: "/photo_2000",
          info: "新世纪，走天涯……"
        },
        {
          src: "/static/img/2001/0.jpg",
          href: "/photo_2001",
          info: "这一年，很神秘……"
        },
        {
          src: "/static/img/2002/1.jpg",
          href: "/photo_2002",
          info: "手拉手的，是闺蜜……"
        },
        {
          src: "/static/img/2003/0.jpg",
          href: "/photo_2003",
          info: "这一年，很神秘……"
        },
        {
          src: "/static/img/2004/0.jpg",
          href: "/photo_2003",
          info: "这一年，很神秘……"
        },
        {
          src: "/static/img/2005/0.jpg",
          href: "/photo_2005",
          info: "这一年，很神秘……"
        },
        {
          src: "/static/img/2006/1.jpg",
          href: "/photo_2006",
          info: "开始，进入衰老……"
        },
        {
          src: "/static/img/2007/5.jpg",
          href: "/photo_2007",
          info: "半生不熟的交情，开始准备流失……"
        },
        {
          src: "/static/img/2008/0.jpg",
          href: "/photo_2008",
          info: "大地震，照像也有震感……"
        },
        {
          src: "/static/img/2009/0.jpg",
          href: "/photo_2009",
          info: "开始，脏了起来……"
        },
        {
          src: "/static/img/2010/0.jpg",
          href: "/photo_2010",
          info: "开始，开始……"
        },
        {
          src: "/static/img/2011/0.jpg",
          href: "/photo_2011",
          info: "这一年，很神秘……"
        },
        {
          src: "/static/img/2012/0.jpg",
          href: "/photo_2012",
          info: "这一年，很神秘……"
        },
        {
          src: "/static/img/2013/2.jpg",
          href: "/photo_2013",
          info: "一个字，没有意外……"
        },
        {
          src: "/static/img/2014/0.jpg",
          href: "/photo_2014",
          info: "一个字，还是没有意外……"
        },
        {
          src: "/static/img/2015/93.jpg",
          href: "/photo_2015",
          info: "开始加速衰老……"
        },
        {
          src: "/static/img/2016/63.jpg",
          href: "/photo_2016",
          info: "北京热……"
        },
        {
          src: "/static/img/2017/43.jpg",
          href: "/photo_2017",
          info: "总算，总算……"
        },
        {
          src: "/static/img/2018/1.jpg",
          href: "/photo_2018",
          info: "三高朋友圈……"
        },
        {
          src: "/static/img/2019/389.jpg",
          href: "/photo_2019",
          info: "终于，终于……"
        }
      ];

      this.flag = true;

      try {
        this.$refs.waterfall.waterfallOver();
      } catch (e) {
        console.log(e);
      }

      return;
    }
  },

  created() {
    this.getData();
  }
};
</script>

<style scoped>
#context {
  position: absolute;
  top: 200px;
  bottom: 0;
  width: 100%;
}
</style>