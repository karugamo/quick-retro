<template>
  <button>
    {{ text }}
  </button>
</template>

<script setup lang="ts">
const { text } = defineProps<{ text: string }>();
</script>

<style scoped>
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
