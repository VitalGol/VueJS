var app = new Vue({
	el: '#app',
	data: {
		counter: 0,
		counter1: 0

	},
	computed: {
		computedResult: function () {
			console.log('computedResult');
			return this.counter > 5 ? 'More than 5' : 'Less than 5';
		}
	},
	methods: {
		addCounter: function() {
			this.counter++;
		},
		subCounter: function () {
			this.counter--;
		},
		result: function() {
			console.log('result');
			return this.counter > 5 ? 'More than 5' : 'Less than 5';
		}
	}
});