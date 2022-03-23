<template>
  <div>
    <h1>{{ article?.title }}</h1>
    <p>{{ article?.content }}</p>
  </div>
</template>
<script>
export default {
  props: {
    article: Object,
  },
  methods: {
    
  },
  mounted(){
    
  },
  computed(){
   
  }
};
</script>

<style scoped></style>
