<template>
  <div class="articles">
    <h1>Liste de mes articles</h1>
    <div v-for="article in currentArticles" :key="article.id" class="color">
      <ArticleItem :article="article" />
      <router-link :to="{ name: 'article', params: { id: article.id } }">
        <button>Voir l'article</button>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import ArticleItem from "./ArticleItem.vue";
import { useArticleStore } from "../../stores/article";
import { computed, onMounted, ref } from "@vue/runtime-core";

const color = ref("#286234");
const store_article = useArticleStore();

onMounted(() => {
  getArticles.length > 0 || fetchArticles();
});

const currentArticles = computed(() => {
  return store_article.$state.articles;
});

function changeColor() {
  color = color === "#286234" ? "blue" : "red";
};

async function fetchArticles() {
  let articles = await fetch("https://api.blog.quidam.re/api/getArticles.php")
    .then((response) => response.json())
    .catch((e) => e);

  if (articles instanceof Array) {
    store_article.$state.articles = articles;
  }
};
</script>

<style scoped>
.color {
  color: v-bind(color);
}
</style>
