<template>
  <BoardView :boardId="boardId" v-if="boardId && boardId.length > 0" />
  <HomeView v-else :navigate-to-board="navigateToBoard" />
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import { useUser } from "./database";
import BoardView from "./views/BoardView.vue";
import HomeView from "./views/HomeView.vue";

const boardId = ref(window.location.hash.slice(1));

function navigateToBoard(newBoardId: string) {
  console.log("navigating to board", newBoardId);
  history.pushState({}, "", `#${newBoardId}`);
  boardId.value = newBoardId;
}

addEventListener("popstate", () => {
  console.log(window.location.hash.slice(1));
  boardId.value = window.location.hash.slice(1);
});

const user = useUser() as { uid: string };

provide("user", user);
</script>
