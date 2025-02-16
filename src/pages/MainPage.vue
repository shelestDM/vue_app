<script lang="ts" setup>
import { useStore } from '@/store'

const counter = useStore()

// counter.count++
// counter.$patch({ count: counter.count + 1 })
// counter.increment()
</script>

<template>
  <div>
    <div class="text-[30px] text-center font-bold text-blue-500">Wellcome!</div>
    <p @click="() => counter.increment()">Counter value is : {{ counter.count }}</p>
  </div>
</template>
