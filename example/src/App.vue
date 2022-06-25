<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

import Toggle from "toggle";
import { SpecialUploader } from "i-viewer-vue";
</script>

<template>
  <header>
  </header>

  <main>
    <h1>Hello</h1>
      <HelloWorld msg="You did it!" />
      <h1>World</h1>
      <Toggle></Toggle>
      <h1>Peeps</h1>
  y<SpecialUploader></SpecialUploader>y

  </main>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

</style>
