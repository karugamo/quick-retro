<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <li>
    {{ text }}
  </li>
</template>

<style scoped>
li {
  color: white;
  border-radius: 4px;
  padding: 8px;
  background-color: #009986;
}
</style>
