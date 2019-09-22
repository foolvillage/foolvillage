<template>
  <main role="main" class="flex-shrink-0">
    <div class="container starter-template">
      <h4>钢铁是怎样没有炼成的……</h4>
      <p class="lead">从未成年人渣到成年人渣！</p>
      <div class="text-left">
        <vue-markdown>{{msg}}</vue-markdown>
      </div>
    </div>
  </main>
</template>

<script>
import VueMarkdown from "vue-markdown";
import ABOUT from "../assets/md/about.md";

export default {
  name: "document",
  components: {
    VueMarkdown
  },
  data() {
    return {
      msg: ABOUT
    };
  },
  methods: {}
};
</script>