<script setup lang="ts">
defineProps<{
  text: string;
  color: string;
  onDelete: (cardId: string) => void;
  id: string;
}>();
</script>

<template>
  <li>
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
</style>
