<script setup lang="ts">
import { inject } from "@vue/runtime-dom";
import BoardData from "../types";
import DeleteButton from "./DeleteButton.vue";

const { author } = defineProps<{
  text: string;
  color: string;
  author: string;
  onDelete: (cardId: string) => void;
  id: string;
}>();

const user = inject("user") as { uid: string };

const isCurrentUser = user.uid === author;

const board = inject("board") as BoardData;
</script>

<template>
  <li :class="{ hidden: !isCurrentUser && board?.cardsHidden }">
    <DeleteButton @click="onDelete(id)">✖</DeleteButton>
    {{ text }}
  </li>
</template>

<style scoped>
li:hover button {
  display: block;
}

li {
  position: relative;
  color: white;
  font-weight: 500;
  border-radius: 4px;
  padding: 24px;
  background-color: v-bind(color);
  text-align: left;
}

.hidden {
  color: transparent;
  text-shadow: 0 0 8px #fff;
}
</style>
