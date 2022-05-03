<script setup lang="ts">
import { ref } from "vue";
import BoardView from "./views/BoardView.vue";
import HomeView from "./views/HomeView.vue";

export interface Board {
  cardsHidden: boolean;
  columns: { [columnId: string]: any };
  loading: boolean;
  exists: boolean;
}

const boardId = ref(window.location.pathname.split("/").pop());

function navigateToNewBoard(newBoardId: string) {
  history.pushState({}, "", `/quick-retro/${newBoardId}`);
  boardId.value = newBoardId;
}
</script>

<template>
  <h1>🚀 quick retro 🚀</h1>
  <BoardView :boardId="boardId" v-if="boardId && boardId.length > 0" />
  <HomeView v-else :on-new-board="navigateToNewBoard" />
</template>

<style>
h1 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
}
</style>
