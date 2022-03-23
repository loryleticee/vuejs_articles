<template>
  <div>
      <ArticleItem :article="_article"/>
  </div>
</template>

<script>
import ArticleItem from "../../components/articles/ArticleItem.vue";
import { mapState } from "pinia";
import { useArticleStore } from "../../stores/article";


export default {
  data(){
    return {
      _article : {}
    }
  },
  components: {
    ArticleItem,
  },
  computed: {
    ...mapState(useArticleStore, {
      storedArticle: "articles",
    }),
  },
  created() {
    this._article = this.storedArticle.find((a) => a.id === this.$route.params.id)
  },
};
</script>

<style scoped></style>
