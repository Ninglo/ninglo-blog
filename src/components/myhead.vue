<template>
<header class="myhead">
    <router-link :to="{ name: 'user', params: { id: id }}">{{ id }}</router-link>
    <router-link :to="{ name: 'mdEditor' }">Editor</router-link>
</header>
</template>

<script>
export default {
  name: 'myhead',
  props: {
    links: Array,
  },
  data() {
    return {
      id: 111,
    };
  },
};
</script>

<style scoped>
.myhead {
    position: absolute;
    top: 0px;
    left: 1%;
    height: 50px;
    width: 98%;
    border: solid;
}
</style>
