<script setup lang="ts">
defineProps<{ text: string; color: string }>();
</script>

<template>
  <li>
    {{ text }}
  </li>
</template>

<style scoped>
li {
  color: white;
  font-weight: 500;
  border-radius: 4px;
  padding: 24px;
  background-color: v-bind(color);
  text-align: left;
}
</style>
