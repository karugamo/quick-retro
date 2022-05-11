<template>
  <button @click="onClick">✖</button>
</template>

<script setup lang="ts">
const {color} = defineProps<{color?: string}>()
const emit = defineEmits(['delete'])

function onClick(e: Event) {
  e.stopPropagation()
  emit('delete')
}
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
