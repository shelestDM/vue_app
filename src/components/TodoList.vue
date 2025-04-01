<script lang="ts" setup>
import TodoItem from '@/components/TodoItem.vue'
import { useLeavingAffairsStore } from '@/store/leavingAffairsStore'

const leavingAffairsStore = useLeavingAffairsStore()
</script>

<template>
  <ul class="todo-list">
    <li
      v-for="({ title, id, date, done }, index) in leavingAffairsStore.leavingAffairs"
      v-bind:key="id"
    >
      <TodoItem
        v-on:update="leavingAffairsStore.setAffairAsDone"
        :title="title"
        :date="date"
        :id="id"
        :done="done"
        :style="{ animationDelay: 200 * (index + 1) + 'ms' }"
      />
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
