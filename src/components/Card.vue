<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <li>
    {{ text }}
  </li>
</template>

<style scoped>
li {
  list-style: none;
}
</style>
