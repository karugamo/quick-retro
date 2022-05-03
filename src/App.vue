<script setup lang="ts">
import { provide } from "vue";
import Column from "./components/Column.vue";
import { setCardsHidden, useBoard, useUser } from "./database";

export interface Board {
  cardsHidden: boolean;
  columns: { [columnId: string]: any };
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

  <main>
    <Column
      v-for="(column, columnId) in board.columns"
      :cards="column.cards"
      :column-id="String(columnId)"
      :board-id="boardId"
      :key="String(columnId)"
      :title="column.title"
      :color="column.color"
    />
  </main>
  <section class="options">
    <button @click="toggleCardsHidden">
      {{ board.cardsHidden ? "Show all cards" : "Hide other cards" }}
    </button>
  </section>
</template>

<style>
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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
