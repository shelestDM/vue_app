<script lang="ts" setup>
import IconBurger from '@/assets/IconBurger.vue'
import CustomButton from './CustomButton.vue'
</script>

<template>
  <header class="header">
    <p>MyApp</p>
    <CustomButton class="header-button">
      <IconBurger />
    </CustomButton>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  &-button {
    color: black;
  }

  p {
    font-weight: bold;
    font-size: 20px;
  }
}
</style>
