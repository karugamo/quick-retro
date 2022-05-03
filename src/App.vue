<script setup lang="ts">
import BoardView from "./views/BoardView.vue";

export interface Board {
  cardsHidden: boolean;
  columns: { [columnId: string]: any };
  loading: boolean;
  exists: boolean;
}

const boardId = window.location.pathname.split("/").pop() as string;
</script>

<template>
  <h1>🚀 quick retro 🚀</h1>
  <BoardView :boardId="boardId" v-if="boardId.length > 0" />
</template>

<style>
h1 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
}
</style>
