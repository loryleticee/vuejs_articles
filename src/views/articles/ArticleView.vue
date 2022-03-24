<template>
  <div>
    <ArticleItem :article="_article" />
  </div>
</template>

<script setup>
import ArticleItem from "../../components/articles/ArticleItem.vue";
import { fetchArticle } from "../../plugins/fetchAll";
import { useArticleStore } from "../../stores/article";
import { computed } from "@vue/runtime-core";

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const _article = ref({});

const store = useArticleStore();

const storedArticle = computed(() => {
  return store.$state.articles;
});

onMounted(() => {
  let filterd_article = undefined;
  if (storedArticle.length > 0) {
    filterd_article = storedArticle.find((a) => a.id === this.$route.params.id);
  }

  if (filterd_article) {
    _article.value = filterd_article;
    return;
  }

  fetchArticle(route.params.id).then((r) => {
    if (r instanceof Array) {
      _article.value = r[0];
    }
  });
});
</script>

<style scoped></style>
