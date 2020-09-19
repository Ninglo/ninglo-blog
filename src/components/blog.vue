<template>
    <div id="blog">
        <div v-html="blog"></div>
    </div>
</template>

<script>
import marked from 'marked';
import axios from 'axios';

export default {
  name: 'blog',
  data() {
    return { blog: '' };
  },
  // 实现很丑, 记得改
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get(`/api/blogText/${this.$route.params.index}`)
        .then((res) => {
          this.blog = marked(res.data);
        });
    },
  },
};
</script>
