<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="user.title" id="title" />
      <input type="text" v-model="user.content" id="content" />
      <input type="number" v-model="user.userID" id="userID" />
      <input type="number" v-model="user.catID" id="catID" />
      <input type="submit" value="Ajouter" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        title: "",
        content: "",
        userID: "",
        catID: "",
      },
    };
  },
  methods: {
    async handleSubmit() {
      let response = await fetch(
        "https://api.blog.quidam.re/api/postArticle.php",
        {
          method: "POST",
          body: JSON.stringify(this.user),
        }
      )
        .then((r) => r.json())
        .catch();
        console.log(response);
    }
  },
};
</script>

<style scoped></style>
