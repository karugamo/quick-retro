<template>
  <div class="board" :class="{ template: isTemplate }">
    <DeleteButton v-if="!isTemplate" color="black" @click="onDelete"
      >✖</DeleteButton
    >
    <h3>{{ board.title || "Untitled Retro" }}</h3>
    <div class="columns">
      <div
        class="column"
        v-for="column in board.columns"
        v-bind:style="{ backgroundColor: column.color }"
        :style="{
          height: getColumnHeight(column),
        }"
      >
        {{ column.title }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Template } from "../templates";
import BoardData from "../types";
import DeleteButton from "./DeleteButton.vue";

const { board, isTemplate } = defineProps<{
  board: BoardData | Template;
  isTemplate: boolean;
}>();

const emit = defineEmits(["delete"]);

function onDelete(e: Event) {
  e.stopPropagation();
  emit("delete");
}

const largestColumn = computed(() => {
  let largestValue = 0;
  for (const columns of Object.values(board.columns)) {
    console.log(columns);
    const numberOfCards = Object.keys(columns.cards ?? {}).length;
    if (numberOfCards > largestValue) {
      largestValue = numberOfCards;
    }
  }
  return largestValue;
});

function getColumnHeight(column: any) {
  const minHeight = 20;

  if (isTemplate) return "100%";
  if (largestColumn.value === 0) return `${minHeight}%`;

  const numberOfCardsInColumn = Object.keys(column?.cards ?? {}).length;

  return `${
    (numberOfCardsInColumn / largestColumn.value) * (100 - minHeight) +
    minHeight
  }%`;
}
</script>

<style scoped>
.board:hover button {
  display: block;
}

.board {
  position: relative;
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
  background-color: #fff7f6;
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
  box-sizing: border-box;
}

.template {
  border-style: dashed;
}
</style>
