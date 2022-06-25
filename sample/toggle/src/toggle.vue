<script lang="ts">
import { defineComponent } from 'vue';


export default /*#__PURE__*/defineComponent({
  name: 'Toggle', // vue component name

});
</script>
<template>
  <div class="toggle">
    <h1>Toggle</h1>
  </div>
</template>
<style scoped>
  .toggle {
    display: block;
    width: 400px;
    margin: 25px auto;
    border: 1px solid #ccc;
    background: #eaeaea;
    text-align: center;
    padding: 25px;
  }
  .toggle p {
    margin: 0 0 1em;
  }
</style>
