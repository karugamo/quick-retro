<template>
  <div class="card"
    v-if="!state.isEditing"
    draggable="true"
    @dragstart="onDragStart"
    @dragend="onDragEnd"
    @dragover="onDragOver"
    @click="setIsEditing"
    @drop="onDrop"
    :style="{ visibility: state.isDragged ? 'hidden' : 'visible' }"
    :class="{ hidden: !isCurrentUser && board?.cardsHidden }"
  >
    <DeleteButton @delete="onDelete(String(id))">✖</DeleteButton>
    {{ props.text }}
  </div>
  <CardInput
    v-else
    :initial-value="props.text"
    placeholder="Edit card"
    :color="color"
    autofocus
    save-on-blur
    @save="onSave"
  />
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { inject, reactive } from "@vue/runtime-dom";
import { removeCard, updateCard } from "../database";
import BoardData from "../types";
import CardInput from "./CardInput.vue";
import DeleteButton from "./DeleteButton.vue";

const props = defineProps<{
  text: string;
  color: string;
  author: string;
  onDelete: (cardId: string) => void;
  id: string | number;
  boardId: string;
  columnId: string;
}>();
const { author, color, boardId, columnId, id } = props;

const state = reactive({
  isEditing: false,
  isDragged: false,
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

function onDragStart(e: DragEvent) {
  e.dataTransfer?.setData(
    "application/json",
    JSON.stringify({
      boardId,
      columnId,
      cardId: id,
      text: props.text,
    })
  );
  setTimeout(() => (state.isDragged = true));
}

function onDragEnd(e: DragEvent) {
  state.isDragged = false;
}

function onDragOver(e: DragEvent) {
  console.log("drag over card");
  e.preventDefault();
}

function onDrop(e: DragEvent) {
  const data = JSON.parse(e.dataTransfer?.getData("application/json") ?? "{}");

  if (data.cardId === id) return;

  updateCard(boardId, columnId, String(id), {
    text: props.text + "\n\n--------\n\n" + data.text,
  });
  removeCard(data.boardId, data.columnId, data.cardId);
}

const cursor = computed(() => (isCurrentUser ? "text" : "default"));
</script>

<style scoped>
.card:hover button {
  display: block;
}

.card {
  position: relative;
  color: white;
  font-weight: 500;
  border-radius: 4px;
  padding: 24px;
  line-height: 24px;
  background-color: v-bind(color);
  text-align: left;
  cursor: v-bind(cursor);
  white-space: pre-line;
}

.hidden {
  color: transparent;
  text-shadow: 0 0 8px #fff;
}
</style>
