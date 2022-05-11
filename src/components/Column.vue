<template>
  <section>
    <h2>{{ title }}</h2>
    <ul>
      <Card
        v-for="(card, cardId) in cards"
        :id="cardId"
        :author="card.author"
        :text="card.text"
        :color="color"
        :onDelete="onDelete"
      />
    </ul>
    <div class="input-container">
      <Input
        class="input"
        v-model:value="state.inputText"
        type="textarea"
        autosize
        placeholder="Add new card"
        @keydown="onInputKeyUp"
      />
      <button class="save-button" @click="addNewCard">save</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { NInput as Input } from "naive-ui";
import { inject, reactive } from "vue";
import { addCard, removeCard } from "../database";
import Card from "./Card.vue";

const { columnId, boardId } = defineProps<{
  title: string;
  color: string;
  boardId: string;
  columnId: string;
  cards: { [cardId: string]: { text: string; author: string } };
}>();

const state = reactive({
  inputText: "",
});

const user = inject<{ uid: string }>("user");

function addNewCard() {
  if (state.inputText.trim() === "") return;
  if (!user?.uid) return;

  addCard(boardId, columnId, {
    text: state.inputText,
    author: user.uid,
  });
  state.inputText = "";
}

function onDelete(cardId: string) {
  removeCard(boardId, columnId, cardId);
}

function onInputKeyUp(e: KeyboardEvent) {
  if (e.metaKey && e.key === "Enter") {
    e.preventDefault();
    addNewCard();
  }
}
</script>

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

.input {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
}

.input-container {
  position: relative;
}

.save-button {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: v-bind(color);
  color: white;
  border: 0;
  font-weight: 500;
  border-radius: 4px;
  margin: 4px;
  cursor: pointer;
  padding: 2px 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
