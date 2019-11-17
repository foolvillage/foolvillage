<template>
  <main role="main" class="flex-shrink-0">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h3 class="jumbotron-heading">开始加速衰老……</h3>
      <p class="lead text-muted">黄河边的小时代，西湖边的小团圆……</p>
    </div>
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
        if (this.group > 105) {
          try {
            this.$refs.waterfall.waterfallOver();
          } catch (e) {
            console.log(e);
          }
          return;
        }

        this.imgsArr = this.imgsArr.concat({
          src: "/static/img/2015/" + this.group + ".jpg",
          href: "/static/img/2015/" + this.group++ + ".jpg"
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
  top: 200px;
  bottom: 0;
  width: 100%;
}
</style>