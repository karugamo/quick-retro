<template>
  <div class="board" :class="{template: isTemplate}">
    <h3>{{ board.title || "Untitled Retro" }}</h3>
    <div class="columns">
      <div
        class="column"
        v-for="column in board.columns"
        v-bind:style="{ backgroundColor: column.color }"
      >
        {{ column.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Template } from "../templates";
import BoardData from "../types";

const { board, isTemplate } = defineProps<{
  board: BoardData | Template;
  isTemplate: boolean;
}>();
</script>

<style scoped>
.board {
  width: 300px;
  height: 200px;
  border: 2px solid rgba(105, 98, 98, 0.127);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 16px;
  padding: 16px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  background-color: #FFF7F6;
}

.board:hover {
  box-shadow: 0 0 8px rgba(47, 43, 43, 0.115);
  transform: scale(1.05);
}

.columns {
  display: flex;
  flex-direction: row;
  gap: 4px;
  flex: 1;
  width: 100%;
}

.column {
  background-color: red;
  border-radius: 4px;
  color: white;
  flex: 1;
  padding: 8px;
  min-width: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.template {
  border-style: dashed;
}
</style>
