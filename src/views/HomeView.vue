<template>
  <main>
    <h1>🚀 quick retro 🚀</h1>
    <Button text="Create New Board" :on-click="createNewBoard" />
    <section>
      <div class="board" @click="navigateToBoard(boardId as unknown as string)" v-for="(board, boardId) in ownBoards">
        <h2>{{ board.title || "Untitled Retro" }}</h2>
        <div class="columns">
          <div class="column" v-for="column in board.columns" v-bind:style="{ backgroundColor: column.color }">
            {{ column.title }}
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import { Board } from "../App.vue";
import Button from "../components/Button.vue";
import { addNewBoard, useBoards } from "../database";

const { navigateToBoard } = defineProps<{
  navigateToBoard: (boardId: string) => void;
}>();

const boards = useBoards() as { [boardId: string]: Board };
const user = inject('user') as { uid: string };
const ownBoards = computed(() => Object.fromEntries(Object.entries(boards).filter(([_, board]) => board.author === user?.uid)));

async function createNewBoard() {
  if (!user?.uid) return;
  const boardId = await addNewBoard(user.uid);
  if (boardId) navigateToBoard(boardId);
}
</script>

<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 32px;
  justify-content: center;
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
  gap: 8px;
  padding: 16px;
  font-weight: bold;
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

h2 {
  font-size: 20px;
}
</style>
