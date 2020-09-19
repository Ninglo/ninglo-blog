<template>
    <div id="editor">
      <div style="width: 100%; height: 3%"><button @click="submit">Submit</button></div>
      <textarea :value="mdText" @input="mdText = $event.target.value"></textarea>
      <div class="left" v-html="compliedMarkdown"></div>
    </div>
</template>

<script>
import marked from 'marked';
import axios from 'axios';

export default {
  name: 'editor',
  data() {
    return {
      mdText: '# HelloWorld',
    };
  },
  computed: {
    compliedMarkdown() {
      return marked(this.mdText);
    },
  },
  methods: {
    submit() {
      axios.post('http://192.168.1.105:8000/api/blogText', {
        mdText: this.mdText,
      }).then(() => {
        this.$router.push('/');
      });
    },
  },
};
</script>

<style scoped>
/* markdown 编译后html没有居左 */
html,
body,
#editor {
  margin: 0;
  height: 1000px;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}

textarea,
#editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
