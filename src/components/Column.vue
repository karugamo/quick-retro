<script setup lang="ts">
import { reactive } from "vue";
import Card from "./Card.vue";

const title = "Items";
const state = reactive({
  items: [{ text: "example" }],
  inputText: "",
});

function onAdd(e: Event) {
  e.preventDefault();
  state.items.push({ text: state.inputText });
  state.inputText = "";
}
</script>

<template>
  <h2>{{ title }}</h2>
  <ul>
    <Card v-for="item in state.items" :text="item.text" />
  </ul>
  <form target="#" @submit="onAdd">
    <input v-model="state.inputText" />
  </form>
</template>
