<template>
  <div>
      <!-- <AddArticle :article="_article"/> -->
  </div>
</template>

<script>
// import AddArticle from "../components/forms/AddArticle.vue";


export default {
  data(){
    return {
      _article : {}
    }
  },
  components: {
    // AddArticle,
  },
  computed: {
    ...mapState(useArticleStore, {
      storedArticle: "articles",
      // you can also write a function that gets access to the store
      getArticles: (store) => store.articles,
    }),
  },
  created() {
    this._article = this.storedArticle.find((a) => a.id === this.$route.params.id)
  },
  mounted(){
      let stgrs = [
      "Amelie",
      "Alexis",
      "Adeline",
      "Pauline",
      "Clément",
      "Clémentine",
      "Yann",
      "Maxime",
      "Julien",
      "Thomas",
      ];
      
      console.log(stgrs[Math.floor(Math.random() * stgrs.length)]);
  }
};
</script>

<style scoped></style>
