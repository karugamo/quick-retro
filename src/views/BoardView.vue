<script setup lang="ts">
import { provide } from "vue";
import Board from "../components/Board.vue";
import Spinner from "../components/Spinner.vue";
import { useBoard } from "../database";
import BoardData from "../types";

const { boardId } = defineProps<{ boardId: string }>()

const board = useBoard(boardId) as BoardData;

provide("boardId", boardId);
provide<BoardData>("board", board);
</script>

<template>
  <main v-if="!board.loading">
    <Board v-if="board.exists" />
    <div v-if="!board.exists">Couldn't find board</div>
  </main>
  <main v-if="board.loading">
    <Spinner />
  </main>
</template>

<style scoped>
main {
  display: flex;
  width: 100%;
  padding: 32px;
  box-sizing: border-box;
}
</style>
