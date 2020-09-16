<template>
    <div class="head">
        <a v-for="item in items" :key="item.id" :href="item.uri">{{ item.id }}</a>
    </div>
</template>

<script>
export default {
  name: 'head',
  props: {
    items: () => [
      { id: 1, uri: 'bing.com' },
      { id: 2, uri: 'baidu.com' },
    ],
  },
};
</script>

<style scoped>
.head {
    height: 50px;
    width: 100%;
    border: solid;
}
</style>
