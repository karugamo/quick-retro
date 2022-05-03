<script setup lang="ts">
import Column from "./components/Column.vue";
</script>

<template>
  <h1>🚀 quick retro 🚀</h1>
  <main>
    <Column title="Mad" />
    <Column title="Sad" />
    <Column title="Glad" />
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
  justify-content: space-around;
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
