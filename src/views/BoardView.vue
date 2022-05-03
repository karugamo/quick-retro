<script setup lang="ts">
import { provide } from "vue";
import Board from "../components/Board.vue";
import Spinner from "../components/Spinner.vue";
import { useBoard, useUser } from "../database";

interface BoardType {
  cardsHidden: boolean;
  columns: { [columnId: string]: any };
  loading: boolean;
  exists: boolean;
}

const {boardId} = defineProps<{boardId: string}>()

const board = useBoard(boardId) as BoardType;
const user = useUser() as { uid: string };

provide("user", user);

provide("boardId", boardId);
provide<BoardType>("board", board);
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

<style>
main {
  display: flex;
  width: 100%;
  gap: 32px;
  justify-content: center;
}
</style>
