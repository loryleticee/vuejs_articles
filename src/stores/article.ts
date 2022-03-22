import { defineStore } from "pinia";

export const useArticleStore = defineStore({
  id: "article",
  state: () => ({
    article: {},
    articles: [],
  }),
  getters: {
    // current_article: (state) => state.article,
    // getArticles : (state) => state.articles
  },
  actions: {
    // setArticle(article : Object) {
    //   this.article = article;
    // },
  },
});
