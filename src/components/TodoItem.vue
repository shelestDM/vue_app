<script lang="ts" setup>
import CustomCheckbox from '@/components/CustomCheckbox.vue'
import type { LeavingAffair } from '@/store/leavingAffairsStore'

withDefaults(defineProps<LeavingAffair>(), {
  title: '',
  done: false,
  id: 0,
  date: 0,
})

const emit = defineEmits<{
  update: [id: number]
}>()

const onUpdateTodo = (id: number): void => {
  emit('update', id)
}
</script>

<template>
  <div class="todo-item" :id="`${id}`" v-on:click="onUpdateTodo(id)">
    <CustomCheckbox :id="id" :done="done" />
    <p :class="{ done: done }">{{ title }}</p>
  </div>
</template>

<style lang="scss" scoped>
.todo-item {
  padding: 15px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  transform: translate(-100%);
  opacity: 0;
  animation: smooth_slide 0.5s cubic-bezier(0.5, 1, 0.6, 1) 0s 1 forwards;

  p {
    max-width: 85%;
    width: fit-content;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &::before {
      display: block;
      content: '';
      width: 100%;
      height: 1.5px;
      background-color: black;
      position: absolute;
      top: 50%;
      transform: translateX(-100%);
      transition: 0.3s linear;
    }
  }
  .done {
    &::before {
      transform: translateX(0%);
    }
  }
}

@keyframes smooth_slide {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
}
</style>
