<script setup lang="ts">
import { inject, computed } from "vue";
import Column from "./Column.vue";
import { changeBoardTitle, setCardsHidden } from "../database";
import Button from "./Button.vue";

export interface Board {
  title: string
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

function onTitleChange(e: Event) {
  changeBoardTitle(boardId, (e?.target as HTMLElement).innerText)
}
</script>

<template>
  <div class="board">
    <h2 contenteditable @input="onTitleChange">{{ board.title }}</h2>
    <section class="columns">
      <Column v-for="(column, columnId) in board.columns" :cards="column.cards ?? []" :column-id="String(columnId)"
        :board-id="boardId" :key="String(columnId)" :title="column.title" :color="column.color" />
    </section>
  </div>
  <section class="options">
    <Button :on-click="toggleCardsHidden" :text="getToggleText()" />
  </section>
</template>

<style scoped>
h2 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
}

.columns {
  display: flex;
  gap: 32px;
  justify-content: center;
}

.board {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.options {
  position: absolute;
  right: 32px;
  bottom: 32px;
}
</style>
