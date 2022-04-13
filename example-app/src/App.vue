<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import Tweet from "vue-tweet";
import MyComponent from "my-lib";
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
    <div>
      <MyComponent></MyComponent>
    </div>
    <div>
      <Tweet tweet-id="1370027087818461184" />

    </div>

  </header>

</template>

<style>
@import './assets/base.css';

#app {
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}



a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}
</style>
