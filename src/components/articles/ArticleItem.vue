<template>
  <div>
    <h1>{{ article?.title }}</h1>
    <p>{{ article?.content }}</p>
  </div>
</template>
<script>
import BaseMixin from "../../mixins/BaseMixin.vue";

export default {
  props: {
    article: Object,
  },
  mixins: [ BaseMixin ],
  methods: {
    async fetchArticle() {
      let articles = await fetch(
        "https://api.blog.quidam.re/api/getArticle.php",
        {
          // body: new FormData().append('id', )
        }
      )
        .then((response) => response.json())
        .catch((e) => e);

      if (articles instanceof Array) {
        this.setArticles = articles;
      }
    },
  },
  mounted() {
    // console.log(this.toto)
  },
  computed() {
    // _article(){
    //   return this.$props.article || fetchArticle().then(r=>r);
    // }
  },
};
</script>

<style scoped></style>
