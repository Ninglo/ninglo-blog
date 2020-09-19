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
    this.fetchData();
  },
  methods: {
    move(index) {
      this.$router.push(`/blog/${index}`);
    },
    fetchData() {
      axios.get('/api/blogText/-1')
        .then((res) => {
          this.blogs = res.data;
        });
    },
  },
};
</script>
