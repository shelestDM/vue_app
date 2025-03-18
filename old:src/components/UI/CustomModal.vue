<template>
  <div
    class="w-screen z-[100] h-screen backdrop-blur-sm fixed top-0 left-0 flex items-center justify-center"
    @click="onCloseModal"
    v-if="show"
  >
    <div @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import toggleMixin from '@/mixins/toggleMixin'

export default {
  name: 'custom-modal',
  mixins: [toggleMixin],
  // props: {
  //   show: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  // methods: {
  //   onCloseModal() {
  //     this.$emit('update:show', false)
  //   },
  // },
}
</script>
