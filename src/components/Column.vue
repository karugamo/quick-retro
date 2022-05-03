<script setup lang="ts">
import { reactive } from "vue";
import { addCard } from "../database";
import Card from "./Card.vue";

const { columnId, boardId } = defineProps<{
  title: string;
  color: string;
  boardId: string;
  columnId: string;
  cards: { [cardId: string]: { text: string } };
}>();

const state = reactive({
  inputText: "",
});

function onAdd(e: Event) {
  e.preventDefault();
  addCard(boardId, columnId, state.inputText);
  state.inputText = "";
}
</script>

<template>
  <section>
    <h2>{{ title }}</h2>
    <ul>
      <Card v-for="card in cards" :text="card.text" :color="color" />
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
  border: 2px solid v-bind(color);
  border-radius: 4px;
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>
