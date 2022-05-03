<script setup lang="ts">
import { inject } from "vue";
import Column from "./Column.vue";
import { setCardsHidden } from "../database";

export interface Board {
  cardsHidden: boolean;
  columns: { [columnId: string]: any };
  loading: boolean;
}

const board = inject("board") as Board;
const boardId = inject("boardID") as string;

function toggleCardsHidden() {
  setCardsHidden(boardId, !board.cardsHidden);
}
</script>

<template>
  <Column
    v-for="(column, columnId) in board.columns"
    :cards="column.cards"
    :column-id="String(columnId)"
    :board-id="boardId"
    :key="String(columnId)"
    :title="column.title"
    :color="column.color"
  />
  <section class="options">
    <button @click="toggleCardsHidden">
      {{ board.cardsHidden ? "Show all cards" : "Hide other cards" }}
    </button>
  </section>
</template>

<style scoped>
.options {
  position: absolute;
  right: 32px;
  bottom: 32px;
}

button {
  width: 200px;
  border: 2px solid rgb(47, 43, 43);
  color: rgb(47, 43, 43);
  border-radius: 6px;
  cursor: pointer;
  padding: 8px 16px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: transparent;
}
</style>
