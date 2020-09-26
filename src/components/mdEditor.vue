<template>
    <div id="editor">
      <button @click="submit">Submit</button>
      <div id="editorBody">
        <textarea :value="mdText" @input="mdText = $event.target.value"></textarea>
        <div class="displayHtml" v-html="compliedMarkdown"></div>
      </div>
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
      axios.post('/api/blogText', {
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
#editor {
  margin: 0;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
  display: flex;
  flex-direction: column;
}

#editorBody {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin: 5px;
}

textarea {
  flex-basis: 48%;
  height: 300px;
  border: none;
  border-right: 1px solid #ccc;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}

.displayHtml {
  flex-basis: 48%;
}
</style>
