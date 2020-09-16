<template>
	<div id="editor">
		<textarea :value="input" @input="update"></textarea>
		<div v-html="compiledMarkdown"></div>
	</div>
</template>

<script>
import _ from '../moudle/lodash.js';
import marked from '../moudle/marked.js';

export default {
	name: 'editor',
	props: {
		input: () => {
			return "# Editor";
		},
	computed: {
		compliedMarkdown: () => {
			return marked(this.input, { sanitize: true });
			}
		},
	methods: {
		update: _.debounce((e) => {
				this.input = e.target.value;
			}, 300)
		},
	}
}
</script>
