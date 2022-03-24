<template>
  <div class="d-flex justify-content-center align-items-center gap-2">
    <form
      class="d-flex justify-content-center align-items-center gap-2 flex-column text-light"
      @submit.prevent="handleSubmit"
    >
      <div class="d-flex flex-column align-items-center">
        <label for="title">title</label>
        <input type="text" v-model="article.title" id="title" />
      </div>
      <div class="d-flex flex-column align-items-center">
        <label for="content">content</label>
        <textarea type="text" v-model="article.content" id="content">
        </textarea>
      </div>
      <div class="d-flex flex-column align-items-center">
        <label for="user_id">User</label>
        <input
          type="number"
          min="6"
          max="8"
          v-model="article.user_id"
          id="user_id"
        />
      </div>
      <div class="d-flex flex-column align-items-center">
        <label for="categorie">categorie</label>
        <input
          type="number"
          min="1"
          max="19"
          v-model="article.categorie"
          id="categorie"
        />
      </div>
      <div class="d-flex flex-column align-items-center">
        <input type="submit" value="Ajouter" />
      </div>
      
      <div class="nbr_char_color">
        {{nbr}}
      </div>

    </form>
    <div class="d-flex gap-2 flex-column align-items-center">
      <span> {{ notification }} </span>
      <span v-if="new_article">
        <router-link :to="{ name: 'article', params: { id: new_article } }">
          Voir l'article
        </router-link>
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
const article = ref({
  title: "",
  content: "",
  user_id: "",
  categorie: "",
});

const notification = ref("");
const new_article = ref(null);

const nbr = computed(()=> (article.value.content.length + "  caractère(s)"))
const nbr_char_color = computed(()=> (article.value.content.length > 100 ? "red" : "green"))

async function handleSubmit() {
  let datas = new FormData();
  datas.append("title", article.value.title);
  datas.append("content", article.value.content);
  datas.append("user_id", article.value.user_id);
  datas.append("categorie", article.value.categorie);

  let response = await fetch("https://api.blog.quidam.re/api/postArticle.php", {
    method: "POST",
    body: datas,
  })
    .then((r) => r.json())
    .catch();

  if (response?.article_id) {
    notification.value = "Article ajouter avec succès";
    new_article.value = response.article_id;
  }
}
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
.nbr_char_color{

  color: v-bind(nbr_char_color)
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
