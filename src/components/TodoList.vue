<script lang="ts" setup>
import TodoItem from '@/components/TodoItem.vue'
import { useLeavingAffairsStore } from '@/store/leavingAffairsStore'

const { leavingAffairs, setAffairAsDone } = useLeavingAffairsStore()
</script>

<template>
  <ul class="todo-list">
    <li v-for="{ title, id, date, done } in leavingAffairs" v-bind:key="id">
      <TodoItem v-on:update="setAffairAsDone" :title="title" :date="date" :id="id" :done="done" />
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
