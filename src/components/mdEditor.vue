<template>
    <div id="editor">
        <textarea :value="mdText" @input="mdText = $event.target.value"></textarea>
        <div v-html="compliedMarkdown" ref="mdHTML"></div>
        <button @click="submit">Submit</button>
    </div>
</template>

<script>
import marked from 'marked'
import axios from 'axios'

export default {
  name: 'editor',
  data() {
    return {
      mdText: '# 123'
    }
  },
  computed: {
    compliedMarkdown: function () {
      return marked(this.mdText)
    },
  },
  methods: {
    submit: function () {
      axios.post(`/blogText`, {
        mdText: this.mdText,
        title: this.mdText.split('\n')[0],
      }).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
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