<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import CustomHeader from './components/CustomHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoForm from './components/TodoForm.vue'
import CustomButton from './components/CustomButton.vue'
import { useLeavingAffairsStore } from './store/leavingAffairsStore'
// import { oneDayInMs } from './consts'

const isFormVisible = ref<boolean>(false)

const affairsStore = useLeavingAffairsStore()

const toggleForm = (): void => {
  isFormVisible.value = !isFormVisible.value
}

// onMounted(() => {
//   if (
//     store.leavingAffairs.length &&
//     (Date.now() - store.leavingAffairs[0].date) / oneDayInMs >= 1
//   ) {
//     store.setAllAffairsUndone()
//   }
// })

onMounted(() => {
  affairsStore.setLeavingAffairsFromLS()
})
</script>

<template>
  <CustomHeader />
  <TodoList />
  <TodoForm v-on:onclose="toggleForm" :isFormVisible="isFormVisible" />
  <CustomButton v-on:click="toggleForm" title="Add" class="custom-button" />
</template>

<style lang="scss" scoped>
@import '@/styles/common.scss';

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
