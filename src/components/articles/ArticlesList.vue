<template>
  <div class="articles">
    <h1>Liste de mes articles</h1>
    <div v-for="article in currentArticles" :key="article.id">
      <ArticleItem :article="article" />
      <router-link :to="{ name: 'article', params: { id: article.id } }">
        Voir l'article
      </router-link>
    </div>
  </div>
</template>

<script>
import ArticleItem from "./ArticleItem.vue";
import { mapWritableState, mapState } from "pinia";
import { useArticleStore } from "../../stores/article";

export default {
  components: { ArticleItem },
  mounted() {
    this.getArticles.length > 0 || this.fetchArticles();
  },
  computed: {
    ...mapWritableState(useArticleStore, {
      setArticles: "articles",
    }),

    ...mapState(useArticleStore, {
      getArticles: "articles",
    }),

    currentArticles() {
      return this.getArticles;
    },
  },
  methods: {
    async fetchArticles() {
      let articles = await fetch(
        "https://api.blog.quidam.re/api/getArticles.php"
      )
        .then((response) => response.json())
        .catch((e) => e);

      if (articles instanceof Array) {
        this.setArticles = articles;
      }
    },
  },
};
</script>

<style scoped></style>
