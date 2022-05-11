<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { inject, reactive } from "@vue/runtime-dom";
import { updateCard } from "../database";
import BoardData from "../types";
import CardInput from "./CardInput.vue";
import DeleteButton from "./DeleteButton.vue";

const { author, color, boardId, columnId, id } = defineProps<{
  text: string;
  color: string;
  author: string;
  onDelete: (cardId: string) => void;
  id: string | number;
  boardId: string;
  columnId: string;
}>();

const state = reactive({
  isEditing: false,
});

const user = inject("user") as { uid: string };

const isCurrentUser = user.uid === author;

const board = inject("board") as BoardData;

function setIsEditing() {
  if (!isCurrentUser) return;
  state.isEditing = true;
}

function onSave(newText: string) {
  if (!user?.uid) return;

  state.isEditing = false;

  updateCard(boardId, columnId, String(id), {
    text: newText,
  });
}

const cursor = computed(() => (isCurrentUser ? "text" : "default"));
</script>

<template>
  <li
    v-if="!state.isEditing"
    @click="setIsEditing"
    :class="{ hidden: !isCurrentUser && board?.cardsHidden }"
  >
    <DeleteButton @click="onDelete(String(id))">✖</DeleteButton>
    {{ text }}
  </li>
  <CardInput
    v-else
    :initial-value="text"
    placeholder="Edit card"
    :color="color"
    autofocus
    @save="onSave"
  />
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
  cursor: v-bind(cursor);
}

.hidden {
  color: transparent;
  text-shadow: 0 0 8px #fff;
}
</style>
