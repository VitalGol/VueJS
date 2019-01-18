var app = new Vue({
	el: '#app',
	data: {
		counter: 0,
		counter1: 10,
		green: '#0f0',
		blue: '#00f'
	},
	watch: {

	},
	methods: {
		addCounter: function () {
			this.counter++;
		},
		onHover: function (event) {
			event.target.style.color = this.green;
		},
		onHover1: function (event) {
			event.target.style.color = this.blue;
		}
	}
});