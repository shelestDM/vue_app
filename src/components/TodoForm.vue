<script setup lang="ts">
import { useLeavingAffairsStore } from '@/store/leavingAffairsStore'
import { reactive, watch } from 'vue'

const emit = defineEmits<{
  onclose: []
}>()

const props = defineProps({
  isFormVisible: Boolean,
})

const formData = reactive({
  id: 0,
  title: '',
  done: false,
  date: 0,
})
const leavingAffairsStore = useLeavingAffairsStore()

const onSubmit = () => {
  if (formData.title) {
    leavingAffairsStore.addAffair({ ...formData })
    emit('onclose')
  }
}

watch(
  () => props.isFormVisible,
  () => {
    if (!props.isFormVisible) {
      formData.title = ''
    } else {
      formData.date = Date.now()
      formData.id = Date.now()
    }
  },
)
</script>

<template>
  <Transition name="smooth">
    <div v-if="isFormVisible" id="case-form-overlay">
      <form id="case-form" @submit.prevent="onSubmit">
        <h2>Enter the case u need to do before leaving the home</h2>
        <input v-focus v-model="formData.title" type="text" placeholder="Enter the case" />
        <button id="sibmit" type="submit">Add Case</button>
        <button id="close" type="button" v-on:click="emit('onclose')">x</button>
      </form>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
#case-form-overlay {
  width: fit-content;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 20%;

  #case-form {
    width: 100%;
    max-width: 400px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    background-color: whitesmoke;
    padding: 30px;
    border-radius: 15px;
    position: relative;

    h2 {
      text-align: center;
      font-size: 17px;
      font-weight: 500;
      padding-inline: 35px;
    }
    input {
      outline: none;
      border: none;
      box-shadow: 0px 0px 10px gray;
      border-radius: 10px;
      padding: 10px;
      width: 100%;
    }
    #sibmit {
      padding: 10px;
      border-radius: 10px;
      background-color: var(--accent_color);
      color: white;
      align-self: end;
    }
    #close {
      position: absolute;
      top: 10px;
      right: 20px;
      color: black;
      font-size: 20px;
    }
  }
}
</style>
