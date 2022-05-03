<script setup lang="ts">
import Column from "./components/Column.vue";
import { useBoard } from "./database";

const boardId = "1";

const board = useBoard(boardId);
</script>

<template>
  <h1>🚀 quick retro 🚀</h1>
  <main>
    <Column
      v-for="column in board.columns"
      :cards="column.cards"
      :column-id="column.id"
      :board-id="boardId"
      :key="column.id"
      :title="column.title"
      :color="column.color"
    />
  </main>
</template>

<style>
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
