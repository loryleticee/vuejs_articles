import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/articles",
      name: "articles",
      component: () => import("../views/articles/ArticlesView.vue"),
    },
    {
      path: "/article/:id",
      name: "article",
      component: () => import("../views/articles/ArticleView.vue"),
    },
    {
      path: "/article",
      name: "add_an_article",
      component: () => import("../views/articles/AddArticleView.vue"),
    },
  ],
});

export default router;
