<template>
  <BoardView :boardId="boardId" v-if="boardId && boardId.length > 0" />
  <HomeView v-else :navigate-to-board="navigateToBoard" />
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import { useUser } from "./database";
import BoardView from "./views/BoardView.vue";
import HomeView from "./views/HomeView.vue";

export interface Board {
  author: string;
  title: string;
  cardsHidden: boolean;
  columns: { [columnId: string]: any };
  loading: boolean;
  exists: boolean;
}

const boardId = ref(window.location.hash.slice(1));
console.log(window.location.hash);

function navigateToBoard(newBoardId: string) {
  history.pushState({}, "", `#${newBoardId}`);
  boardId.value = newBoardId;
}

addEventListener("popstate", () => {
  boardId.value = window.location.hash.slice(1);
});

const user = useUser() as { uid: string };

provide("user", user);
</script>
