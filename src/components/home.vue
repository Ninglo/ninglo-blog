<template>
    <div id="home">
        <div v-for="(title, index) in blogs" :key="index">
          {{ title }}
          <button @click="move(index)">Hello</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'home',
  data() {
    return { blogs: [] };
  },
  created() {
    const that = this;
    setTimeout(() => {
      axios.get('http://192.168.1.105:8000/api/blogText/-1')
        .then((res) => {
          that.blogs = res.data;
        });
    }, 1000);
  },
  methods: {
    move(index) {
      this.$router.push(`/blog/${index}`);
    },
  },
};
</script>
