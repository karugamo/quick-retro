<script setup lang="ts">
const title = 'Items';
const items = [
  {
    text: 'Item 1',
  },
  {
    text: 'Item 2',
  },
  {
    text: 'Item 3',

  },
]
</script>

<template>
  <h2>{{ title }}</h2>
  <ul>
    <li v-for="item in items">
      {{ item.text }}
    </li>
  </ul>
</template>

<style scoped>
li {
  list-style: none;
}
</style>
