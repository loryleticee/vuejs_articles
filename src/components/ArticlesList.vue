
<template>
  <div class="articles">
    <h1>Liste de mes articles</h1>
    <div v-for="article in articles" :key="article.id">
      <ArticleItem :article="article" />
    </div>
  </div>
</template>

<script>
import ArticleItem from "./ArticleItem.vue";

export default {
  components : { ArticleItem },
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    this.fetchArticles();
  },
  methods: {
    async fetchArticles() {
      let articles = await fetch(
        "https://api.blog.quidam.re/api/getArticles.php"
      )
        .then((response) => response.json())
        .catch((e) => e);
      if (articles instanceof Array) {
        this.articles = articles;
      }
    },
  },
};
</script>

<style scoped></style>