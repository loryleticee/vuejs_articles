import { defineStore } from "pinia";

export const useArticleStore = defineStore({
  id: "article",
  state: () => ({
    article: {},
    articles: [],
    toto: "",
  }),
  getters: {
    getArticles : (state) => state.articles
  },
  actions: {
   
  },
});
