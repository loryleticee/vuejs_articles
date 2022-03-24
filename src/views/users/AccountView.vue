<template>
  {{ state.count }}
  <button @click="inc">+</button>
</template>

<script setup>
// import { defineComponent } from '@vue/composition-api'
import { reactive } from "vue";

const state = reactive({ count: 0 });   

function inc() {
  state.count++;
}
</script>
