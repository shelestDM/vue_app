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
  bottom: 50px;
  right: 50px;
  background-color: #10b981;
  padding: 20px;
  border-radius: 50%;
  color: white;
}
</style>
