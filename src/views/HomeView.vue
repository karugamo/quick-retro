<template>
  <main>
    <Button text="Create New Board" :on-click="createNewBoard" />
    <section>
      <div v-for="(board, boardId) in boards">Board {{ boardId }}</div>
    </section>
  </main>
</template>

<script setup lang="ts">
import Button from "../components/Button.vue";
import { addNewBoard, useBoards } from "../database";

const { onNewBoard } = defineProps<{ onNewBoard: (boardId: string) => void }>();

const boards = useBoards();

async function createNewBoard() {
  const boardId = await addNewBoard();
  if (boardId) onNewBoard(boardId);
}
</script>

<style scoped>
section {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 32px;
}

div {
  width: 300px;
  height: 200px;
  border: 2px solid rgb(47, 43, 43);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  border-radius: 4px;
}

main {
  padding: 32px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
</style>
