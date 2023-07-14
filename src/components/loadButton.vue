<template>
  <a download="avatar.png" class="button" :href="href">
    <slot></slot>
  </a>
</template>

<script>
import { defineComponent, } from 'vue'
export default defineComponent({
  setup(props) {
    const href = props.href
    return {
      href
    }
  }
}) 
</script>

<style>
.button {
  padding: 15px 30px;
  background: gray;
  color: wheat;
  border-radius: 10px;
  border: transparent;
  cursor: pointer;
}
</style>