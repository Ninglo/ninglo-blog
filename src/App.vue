<template>
  <div id="app">
    <test></test>
	<editor></editor>
    <img alt="Vue logo" src="./assets/logo.png">
    <div>Hello</div>
  </div>
</template>

<script>
import head from './components/head.vue';
import editor from './components/mdEditor.vue';

export default {
  name: 'App',
  components: {
    test,
	editor,
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
