<script setup lang="ts">
import { ref } from "vue";
import Card from "./Card.vue";

const title = "Items";
const items = ref([{ text: "example" }]);
const inputText = ref("");

function onAdd(e: Event) {
  e.preventDefault();
  items.value.push({ text: inputText.value });
  inputText.value = "";
}
</script>

<template>
  <h2>{{ title }}</h2>
  <ul>
    <Card v-for="item in items" :text="item.text" />
  </ul>
  <form target="#" @submit="onAdd">
    <input v-model="inputText" />
  </form>
</template>
