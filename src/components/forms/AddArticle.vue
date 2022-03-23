<template>
  <div>
    <form
      class="d-flex justify-content-center align-items-center gap-2 flex-column text-light"
      @submit.prevent="handleSubmit"
    >
      <div>
        <label for="title"></label>
        <input type="text" v-model="user.title" id="title" />
      </div>
      <div>
        <label for="content"></label>
        <input type="text" v-model="user.content" id="content" />
      </div>
      <div>
        <label for="user_id"></label>
        <input type="number" v-model="user.user_id" id="user_id" />
      </div>
      <div>
        <label for="categorie"></label>
        <input type="number" v-model="user.categorie" id="categorie" />
      </div>
      <div>
        <input type="submit" value="Ajouter" />
      </div>
    </form>

    <div>
      <span> {{ notification }} </span>
      <span v-if="new_article">
        <router-link :to="{ name: 'article', params: { id: new_article }}">
          Voir l'article
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        title: "",
        content: "",
        user_id: "",
        categorie: "",
      },
      notification: "",
      new_article: null,
    };
  },
  methods: {
    async handleSubmit() {
      let datas = new FormData();
      datas.append("title", this.user.title);
      datas.append("content", this.user.content);
      datas.append("user_id", this.user.user_id);
      datas.append("categorie", this.user.categorie);

      let response = await fetch(
        "https://api.blog.quidam.re/api/postArticle.php",
        {
          method: "POST",
          body: datas,
        }
      ).then((res) => res.json()).catch((err) => err)

     

      if (response.message === "") {
        this.notification = "Article ajouter avec succès";
        this.new_article = response.article_id;
      }
    }
  }
};
</script>

<style scoped>
.d-flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.gap-2 {
  gap: 2;
}

.align-items-center {
  align-items: center;
}
.justify-content-center {
  justify-content: center;
}
.text-light {
  color: rgb(195, 192, 205) !important;
}
</style>
