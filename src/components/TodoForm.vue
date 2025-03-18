<script setup lang="ts">
const emit = defineEmits<{
  onclose: []
}>()
</script>

<template>
  <div id="case-form-overlay">
    <form id="case-form">
      <h2>Enter the case u need to do before leaving the home</h2>
      <input type="text" placeholder="Enter the case" />
      <button id="sibmit" type="submit">Add Case</button>
      <button id="close" type="button" v-on:click="emit('onclose')">x</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
#case-form-overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  background-color: rgba(128, 128, 128, 0.396);
  z-index: 10;

  #case-form {
    width: 80%;
    max-width: 370px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    background-color: whitesmoke;
    padding: 20px;
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
      width: 80%;
    }
    #sibmit {
      padding: 10px;
      border-radius: 10px;
      background-color: #10b981;
      color: white;
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
