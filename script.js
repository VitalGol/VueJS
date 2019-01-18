var app = new Vue({
	el: '#app',
	data: {
		title: 'counter',
		str: '',
		counter: 0,
		green: '#0f0',
		blue: '#00f'

	},
	watch: {

	},
	methods: {
		addCounter: function (num, str, event) {
			this.counter += num;
			this.title = str;
			if (num === 5) {
				event.target.style.color = this.green;
			} else if (num === 10) {
				event.target.style.color = this.blue;
			}
		}

	}
});