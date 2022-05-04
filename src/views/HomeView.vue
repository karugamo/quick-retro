<template>
  <div class="container">
    <main>
      <h1>🚀 quick retro 🚀</h1>
      <h2>start a new board</h2>
      <section>
        <div
          class="board template"
          v-for="template in templates"
          @click="createNewBoard(template)"
        >
          <h3>{{ template.title }}</h3>
          <div class="columns">
            <div
              class="column"
              v-for="column in template.columns"
              v-bind:style="{ backgroundColor: column.color }"
              :title="column.title"
            >
              {{ column.title }}
            </div>
          </div>
        </div>
      </section>
      <h2>your boards</h2>
      <section>
        <div
          class="board"
          @click="navigateToBoard(boardId as unknown as string)"
          v-for="(board, boardId) in ownBoards"
        >
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
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { addNewBoard, useBoards } from "../database";
import { Template, templates } from "../templates";
import BoardData from "../types";

const { navigateToBoard } = defineProps<{
  navigateToBoard: (boardId: string) => void;
}>();

const boards = useBoards() as { [boardId: string]: BoardData };
const user = inject("user") as { uid: string };
const ownBoards = computed(() =>
  Object.fromEntries(
    Object.entries(boards).filter(([_, board]) => board.author === user?.uid)
  )
);

async function createNewBoard(template: Template) {
  if (!user?.uid) return;
  const boardId = await addNewBoard(user.uid, template);
  if (boardId) navigateToBoard(boardId);
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

main {
  max-width: 1200px;
}

section {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 32px;
}

.board {
  width: 300px;
  height: 200px;
  border: 2px solid rgba(47, 43, 43, 0.309);
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

main {
  padding: 32px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

h1 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
}

h3 {
  font-size: 20px;
}

h2 {
  font-size: 28px;
  font-weight: bold;
  margin-top: 32px;
}

.template {
  border-style: dashed;
}
</style>
