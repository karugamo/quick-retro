<template>
  <button>✖</button>
</template>

<script setup lang="ts">
const {color} = defineProps<{color?: string}>()
</script>

<style scoped>
button {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  color: v-bind(color || 'white');
  display: none;
}

button:hover {
  transform: scale(1.5);
}
</style>
