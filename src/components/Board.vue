<script setup lang="ts">
import { inject, computed } from "vue";
import Column from "./Column.vue";
import { setCardsHidden } from "../database";
import Button from "./Button.vue";

export interface Board {
  cardsHidden: boolean;
  columns: { [columnId: string]: any };
  loading: boolean;
}

const board = inject("board") as Board;
const boardId = inject("boardId") as string;

function toggleCardsHidden() {
  setCardsHidden(boardId, !board.cardsHidden);
}

function getToggleText() {
  return board.cardsHidden ? "Show all cards" : "Hide other cards";
}
</script>

<template>
  <Column
    v-for="(column, columnId) in board.columns"
    :cards="column.cards ?? []"
    :column-id="String(columnId)"
    :board-id="boardId"
    :key="String(columnId)"
    :title="column.title"
    :color="column.color"
  />
  <section class="options">
    <Button :on-click="toggleCardsHidden" :text="getToggleText()" />
  </section>
</template>

<style scoped>
.options {
  position: absolute;
  right: 32px;
  bottom: 32px;
}
</style>
