<template>
  <section>
    <h2>{{ title }}</h2>
    <div
      class="card-spacer"
      @dragover="onDragOverSpacer"
      @dragleave="onDragLeaveSpacer"
      @drop="onDropSpacer"
    ></div>
    <ul>
      <li v-for="(card, cardId) in cards">
        <Card
          :id="cardId"
          :key="cardId"
          :author="card.author"
          :text="card.text"
          :color="color"
          :onDelete="onDelete"
          :board-id="boardId"
          :column-id="columnId"
        />
        <div
          v-if="Object.keys(cards).length > 0"
          class="card-spacer"
          @dragover="onDragOverSpacer"
          @dragleave="onDragLeaveSpacer"
          @drop="onDropSpacer"
        ></div>
      </li>
    </ul>
    <div v-if="Object.keys(cards).length > 0" class="spacer"></div>
    <CardInput :color="color" placeholder="Add new card" @save="addNewCard" />
  </section>
</template>

<script setup lang="ts">
import { inject } from "vue";
import { addCard, moveCard, removeCard } from "../database";
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

function onDragOverSpacer(e: DragEvent) {
  e.preventDefault();
  if (e.dataTransfer) e.dataTransfer.dropEffect = "move";
  if (e.target) (e.target as HTMLDivElement).style.height = "64px";
}

function onDragLeaveSpacer(e: DragEvent) {
  if (e.target) (e.target as HTMLDivElement).style.height = "8px";
}

function onDropSpacer(e: DragEvent) {
  if (e.target) (e.target as HTMLDivElement).style.height = "8px";

  const data = JSON.parse(e.dataTransfer?.getData("application/json") ?? "{}");

  moveCard(boardId, data.columnId, data.cardId, columnId);
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
}

.spacer {
  height: 24px;
}

.card-spacer {
  height: 8px;
}
</style>
