<script setup lang="ts">
import { inject } from "@vue/runtime-dom";
import { Board } from "../App.vue";

const { author } = defineProps<{
  text: string;
  color: string;
  author: string;
  onDelete: (cardId: string) => void;
  id: string;
}>();

const user = inject("user") as { uid: string };

const isCurrentUser = user.uid === author;

const board = inject("board") as Board;
</script>

<template>
  <li :class="{ hidden: !isCurrentUser && board?.cardsHidden }">
    <button @click="onDelete(id)">✖</button>
    {{ text }}
  </li>
</template>

<style scoped>
button {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  color: white;
  display: none;
}

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
