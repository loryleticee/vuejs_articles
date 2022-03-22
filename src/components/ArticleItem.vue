<template>
  <div>
    <router-link :to="{ name: 'article', params: { id: article.id} }">
      <h1>{{ article?.title }}</h1>
    </router-link>
    <p>{{ article?.content }}</p>
  </div>
</template>
<script>
export default {
  props: {
    article: Object,
  }
};
</script>

<style scoped></style>
