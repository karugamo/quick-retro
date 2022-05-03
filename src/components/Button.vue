<template>
  <button @click="onClick">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
const { text, onClick } = defineProps<{ text: string; onClick: () => void }>();
</script>

<style>
button {
  width: 200px;
  border: 2px solid rgb(47, 43, 43);
  color: rgb(47, 43, 43);
  border-radius: 6px;
  cursor: pointer;
  padding: 8px 16px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: transparent;
}
</style>
