<script lang="ts" setup>
import TodoItem from '@/components/TodoItem.vue'
import { reactive } from 'vue'

export type ToDoItem = {
  id: number
  title: string
  done: boolean
  date: number
}

const todoList: ToDoItem[] = reactive([
  {
    title: 'Выключить двойную розетку',
    id: 1,
    done: false,
    date: Date.now(),
  },
  {
    title: 'Закрыть окно в комнате',
    id: 2,
    done: false,
    date: Date.now() + 1,
  },
  {
    title: 'Выключить розетку у компьютера',
    id: 3,
    done: true,
    date: Date.now() + 2,
  },
])

const onUpdateTodo = (ID: number): void => {
  todoList.forEach((todo) => todo.id === ID && (todo.done = !todo.done))
}
</script>

<template>
  <ul class="todo-list">
    <li v-for="{ title, id, date, done } in todoList" v-bind:key="id">
      <TodoItem v-on:update="onUpdateTodo" :title="title" :date="date" :id="id" :done="done" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.todo-list {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  width: 100%;
  li {
    width: 100%;
  }
}
</style>
