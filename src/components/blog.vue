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
    setTimeout(() => {
      axios.get(`http://192.168.1.105:8000/api/blogText/${this.$route.params.index}`)
        .then((res) => {
          this.blog = marked(res.data);
        });
    }, 1000);
  },
};
</script>
