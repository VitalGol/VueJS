var app = new Vue({
	el: '#app',
	data: {
		title: 'Hello'
	},
	methods: {
		updateTitle() {
			this.title = 'it is NEW title';
			this.$refs.reference.style.color = '#0f0';
			//  console.log(this.$refs);
			//  console.log(this.$refs.reference);
			//  console.log(this.$refs.horizLine);
			console.log(document.querySelector('hr'));
			this.$refs.horizLine.style.height = '5px';
			this.$refs.horizLine.style.backgroundColor = '#00f';
		}
	}
});