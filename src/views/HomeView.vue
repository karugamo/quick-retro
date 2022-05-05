<template>
  <div class="container">
    <main>
      <h1>🚀 quick retro {{ isTesting ? "(emulated)" : "" }}🚀</h1>
      <h2>start a new board</h2>
      <section>
        <BoardCard
          v-for="template in templates"
          @click="createNewBoard(template)"
          :board="template"
          :is-template="true"
        />
      </section>
      <h2>your boards</h2>
      <section>
        <BoardCard
          v-for="(board, boardId) in ownBoards"
          @click="navigateToBoard(boardId as unknown as string)"
          @delete="onDeleteBoard(boardId as unknown as string)"
          :board="board"
          :is-template="false"
        />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import BoardCard from "../components/BoardCard.vue";
import { addNewBoard, useBoards, leaveBoard } from "../database";
import { Template, templates } from "../templates";
import BoardData from "../types";

const isTesting = import.meta.env.MODE === "test";

const { navigateToBoard } = defineProps<{
  navigateToBoard: (boardId: string) => void;
}>();

const user = inject("user") as { uid: string };

const ownBoards = computed(
  () => useBoards(user.uid) as { [boardId: string]: BoardData }
);

function onDeleteBoard(boardId: string) {
  leaveBoard(user.uid, boardId)
}

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
</style>
