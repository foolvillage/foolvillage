<template>
  <main role="main" class="flex-shrink-0">
    <section class="jumbotron text-center">
      <div class="container">
        <h3 class="jumbotron-heading">大地震，照像也有震感……</h3>
        <p class="lead text-muted">从此，团聚变得慢慢奢侈起来！</p>
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
        if (this.group > 0) {
          try {
            this.$refs.waterfall.waterfallOver()
          } catch(e) {
            console.log(e)
          }
          return;
        }

        this.imgsArr = this.imgsArr.concat({
          src: "/static/img/2008/" + this.group + ".jpg",
          href: "/static/img/2008/" + this.group++ + ".jpg"
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