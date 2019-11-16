<template>
  <main role="main" class="flex-shrink-0">
    <section class="jumbotron text-center">
      <div class="container">
        <h3 class="jumbotron-heading">手拉手的，是闺蜜……</h3>
        <p class="lead text-muted">同性闺蜜都有快乐的秘密，异性闺蜜都有难言的苦衷！</p>
      </div>
    </section>
    <div id="context">
      <vue-waterfall-easy
        ref="waterfall"
        :imgsArr="imgsArr"
        :imgWidth="480"
        :maxCols="3"
        :loadingDotCount="0"
        :enablePullDownEvent="true"
        @scrollReachBottom="getData"
      ></vue-waterfall-easy>
    </div>
  </main>
</template>


<script>
import vueWaterfallEasy from "vue-waterfall-easy";

export default {
  data() {
    return {
      imgsArr: [],
      group: 0
    };
  },

  components: {
    vueWaterfallEasy
  },

  methods: {
    getData() {
      var i = 0;
      for (i = 0; i <= 8; i++) {
        if (this.group > 1) {
          try {
            this.$refs.waterfall.waterfallOver();
          } catch (e) {
            console.log(e);
          }
          return;
        }

        this.imgsArr = this.imgsArr.concat({
          src: "/static/img/2002/" + this.group + ".jpg",
          href: "/static/img/2002/" + this.group++ + ".jpg"
        });
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
  top: 332px;
  bottom: 0;
  width: 100%;
}
</style>