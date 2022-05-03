<script setup lang="ts">
import { reactive } from "vue";
import Card from "./Card.vue";

defineProps<{ title: string }>();

const state = reactive({
  items: [] as { text: string }[],
  inputText: "",
});

function onAdd(e: Event) {
  e.preventDefault();
  state.items.push({ text: state.inputText });
  state.inputText = "";
}
</script>

<template>
  <section>
    <h2>{{ title }}</h2>
    <ul>
      <Card v-for="item in state.items" :text="item.text" />
    </ul>
    <form target="#" @submit="onAdd">
      <input v-model="state.inputText" />
    </form>
  </section>
</template>

<style scoped>
h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

section {
  width: 400px;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
}

form {
  width: 100%;
}

input {
  border: 2px solid #009a85;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
