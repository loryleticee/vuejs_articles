<script>
export default {
  data() {
    return {
      toto: "tutu",
    };
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
