<template>
    <header class="myhead">
        <a v-for="item in items" :key="item.id" :href="item.uri">{{ item.id }}</a>
    </header>
</template>

<script>
export default {
  name: 'myhead',
  props: {
    items: Array,
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
