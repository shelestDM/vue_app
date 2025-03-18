<script lang="ts" setup>
import CheckIcon from '@/assets/CheckIcon.svg'

defineProps({
  done: Boolean,
})

defineEmits<{
  update: [id: number]
}>()
</script>

<template>
  <label for="test" class="checkbox-label">
    <input :checked="done" id="test" type="checkbox" class="custom-checkbox" />
    <Transition name="smooth">
      <CheckIcon v-if="done" />
    </Transition>
  </label>
</template>

<style lang="scss" scoped>
.checkbox-label {
  width: 20px;
  height: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  transition: 0.5s ease;
  &:has(input:checked) {
    background-color: #10b981;
    border: 1px solid #10b981;
  }
  .custom-checkbox {
    width: 0px;
    height: 0px;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .smooth-enter-active,
  .smooth-leave-active {
    transition: opacity 0.5s ease;
  }

  .smooth-enter-from,
  .smooth-leave-to {
    opacity: 0;
  }
}
</style>
