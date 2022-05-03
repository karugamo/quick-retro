<script setup lang="ts">
import { provide } from "vue";
import Column from "./components/Column.vue";
import { setCardsHidden, useBoard, useUser } from "./database";
import Spinner from "./components/Spinner.vue";

export interface Board {
  cardsHidden: boolean;
  columns: { [columnId: string]: any };
  loading: boolean;
}

const boardId = "-N19He2knvTtxbAGe0_V";

const board = useBoard(boardId) as Board;
const user = useUser() as { uid: string };

provide("user", user);

provide<Board>("board", board);

function toggleCardsHidden() {
  setCardsHidden(boardId, !board.cardsHidden);
}
</script>

<template>
  <h1>🚀 quick retro 🚀</h1>
  <main v-if="!board.loading">
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
  </main>
  <main v-if="board.loading">
    <Spinner />
  </main>
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

h1 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
}

main {
  display: flex;
  width: 100%;
  gap: 32px;
  justify-content: center;
}
</style>
