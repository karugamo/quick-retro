<script setup lang="ts">
import { inject, ref, watch, watchEffect } from "vue";
import { changeBoardTitle, joinBoard, setCardsHidden } from "../database";
import BoardData from "../types";
import Button from "./Button.vue";
import Column from "./Column.vue";

const board = inject("board") as BoardData;
const boardId = inject("boardId") as string;
const user = inject("user") as { uid: string };

watchEffect(() => {
  if (user.uid) joinBoard(user.uid, boardId);
});

function toggleCardsHidden() {
  setCardsHidden(boardId, !board.cardsHidden);
}

function getToggleText() {
  return board.cardsHidden ? "Show all cards" : "Hide other cards";
}

function onTitleKeyPress(e: KeyboardEvent) {
  if (e.key === "Enter") {
    (e.target as HTMLInputElement).blur();
    e.preventDefault();
  }
}

function onTitleBlur(e: Event) {
  const newTitle = (e?.target as HTMLInputElement).value.trim();
  changeBoardTitle(boardId, newTitle);
  title.value = newTitle || "Untitled Retro";
}

function onTitleFocus() {
  if (title.value === "Untitled Retro") {
    title.value = "";
  }
}

const title = ref(board.title || "Untitled Retro");

watch(board, (newBoard) => {
  title.value = newBoard.title || "Untitled Retro";
});
</script>

<template>
  <div class="board">
    <input
      :class="{ untitled: title === 'Untitled Retro' }"
      v-model="title"
      @keypress="onTitleKeyPress"
      @focusout="onTitleBlur"
      @focusin="onTitleFocus"
    />
    <section class="columns">
      <Column
        v-for="(column, columnId) in board.columns"
        :cards="column.cards ?? []"
        :column-id="String(columnId)"
        :board-id="boardId"
        :key="String(columnId)"
        :title="column.title"
        :color="column.color"
      />
    </section>
  </div>
  <section class="options">
    <Button @click="toggleCardsHidden" :text="getToggleText()" />
  </section>
</template>

<style scoped>
input {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
  outline: none;
  text-align: center;
  border: 0;
  background-color: transparent;
}

.untitled {
  color: #777777cb;
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
  top: 32px;
}
</style>
