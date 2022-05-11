<template>
  <div class="input-container">
    <Input
      class="input"
      ref="inputRef"
      v-model:value="state.inputText"
      type="textarea"
      autosize
      :placeholder="placeholder"
      @keydown="onInputKeyUp"
    />
    <button class="save-button" @click="onSave">save</button>
  </div>
</template>

<script setup lang="ts">
import { NInput as Input } from "naive-ui";
import { onMounted, reactive, ref } from "vue";

const emit = defineEmits(["save"]);

const inputRef = ref();

const {
  color,
  placeholder,
  initialValue = "",
  autofocus = false,
} = defineProps<{
  color: string;
  placeholder: string;
  initialValue?: string;
  autofocus?: boolean;
}>();

const state = reactive({
  inputText: initialValue,
});

function onSave() {
  emit("save", state.inputText);
  state.inputText = "";
}

function onInputKeyUp(e: KeyboardEvent) {
  if (e.metaKey && e.key === "Enter") {
    e.preventDefault();
    onSave();
  }
}

if (autofocus) {
  onMounted(() => {
    inputRef.value.focus?.();
  });
}
</script>

<style>
.input {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
}

.input-container {
  position: relative;
}

.save-button {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: v-bind(color);
  color: white;
  border: 0;
  font-weight: 500;
  border-radius: 4px;
  margin: 4px;
  cursor: pointer;
  padding: 2px 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
