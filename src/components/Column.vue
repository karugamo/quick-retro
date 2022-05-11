<template>
  <section>
    <h2>{{ title }}</h2>
    <ul>
      <Card
        v-for="(card, cardId) in cards"
        :id="cardId"
        :key="cardId"
        :author="card.author"
        :text="card.text"
        :color="color"
        :onDelete="onDelete"
        :board-id="boardId"
        :column-id="columnId"
      />
    </ul>
    <CardInput :color="color" placeholder="Add new card" @save="addNewCard" />
  </section>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { addCard, removeCard } from "../database";
import Card from "./Card.vue";
import CardInput from "./CardInput.vue";

const { columnId, boardId } = defineProps<{
  title: string;
  color: string;
  boardId: string;
  columnId: string;
  cards: { [cardId: string]: { text: string; author: string } };
}>();

const user = inject<{ uid: string }>("user");

function addNewCard(newText: string) {
  if (newText.trim() === "") return;
  if (!user?.uid) return;

  addCard(boardId, columnId, {
    text: newText,
    author: user.uid,
  });
}

function onDelete(cardId: string) {
  removeCard(boardId, columnId, cardId);
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
</style>
