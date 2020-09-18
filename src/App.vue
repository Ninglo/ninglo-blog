<template>
<div id="app">
    <myhead :links="[
        { id: 1, uri: 'bing.com' },
        { id: 2, uri: 'baidu.com' },
    ]">
    </myhead>
    <router-view></router-view>
</div>
</template>

<script>
import myhead from './components/myhead.vue';

export default {
  name: 'App',
  components: {
    myhead,
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
