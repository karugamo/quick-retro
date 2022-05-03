<script setup lang="ts">
import Column from "./components/Column.vue";
</script>

<template>
  <main>
    <Column />
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
