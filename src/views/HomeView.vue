<template>
  <Button text="Create New Board" :on-click="createNewBoard" />
</template>

<script setup lang="ts">
import Button from "../components/Button.vue";
import { addNewBoard } from "../database";

const { onNewBoard } = defineProps<{ onNewBoard: (boardId: string) => void }>();

async function createNewBoard() {
  const boardId = await addNewBoard();
  if (boardId) onNewBoard(boardId);
}
</script>
