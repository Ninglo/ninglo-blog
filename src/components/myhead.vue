<template>
<header class="myhead">
    <router-link :to="{ name: 'main'}" tag="button">main</router-link>
    <router-link :to="{ name: 'user', params: { id: id }}" tag="button">{{ id }}</router-link>
    <router-link :to="{ name: 'mdEditor' }" tag="button">Editor</router-link>
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
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
}
</style>
