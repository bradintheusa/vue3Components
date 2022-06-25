<script lang="ts">
import { defineComponent } from 'vue';
import Toggle from '@/toggle.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    Toggle
  }
});
</script>

<template>
  <div id="app">
    <toggle />
  </div>
</template>
