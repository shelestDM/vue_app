<script lang="ts" setup>
import CheckIcon from '@/assets/CheckIcon.svg'

defineProps({
  done: Boolean,
  id: Number,
})
</script>

<template>
  <div :id="`checkbox-${id}`" class="custom-checkbox" :class="{ done: done }">
    <Transition name="smooth">
      <CheckIcon class="icon" />
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.custom-checkbox {
  width: 20px;
  height: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  transition: 0.5s ease;

  &.done {
    border-color: #10b981;
    background-color: #10b981;
  }
}

.smooth-enter-active,
.smooth-leave-active {
  transition: opacity 0.5s ease;
}

.smooth-enter-from,
.smooth-leave-to {
  opacity: 0;
}
</style>
