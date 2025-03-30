<script lang="ts" setup>
import { ref } from 'vue'
import CustomHeader from './components/CustomHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoForm from './components/TodoForm.vue'
import CustomButton from './components/CustomButton.vue'

const isFormVisible = ref<boolean>(false)

const toggleForm = (): void => {
  isFormVisible.value = !isFormVisible.value
}
</script>

<template>
  <CustomHeader />
  <TodoList />
  <TodoForm v-on:onclose="toggleForm" :isFormVisible="isFormVisible" />
  <CustomButton v-on:click="toggleForm" title="Add" class-name="custom-button" />
</template>

<style lang="scss" scoped>
.custom-button {
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: var(--accent_color);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: white;
}
</style>
