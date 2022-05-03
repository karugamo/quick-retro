<script setup lang="ts">
import Column from "./components/Column.vue";
</script>

<template>
  <h1>🚀 quick retro 🚀</h1>
  <main>
    <Column color="#E82C64" title="Mad" />
    <Column color="#2C4AC9" title="Sad" />
    <Column color="#009986" title="Glad" />
  </main>
</template>

<style>
h1 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
}

main {
  display: flex;
  width: 100%;
  gap: 32px;
  justify-content: center;
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
