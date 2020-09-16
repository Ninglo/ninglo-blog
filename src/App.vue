<template>
  <div id="app">
    <test></test>
    <img alt="Vue logo" src="./assets/logo.png">
    <div>Hello</div>
  </div>
</template>

<script>
import test from './components/test.vue';

export default {
  name: 'App',
  components: {
    test,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
