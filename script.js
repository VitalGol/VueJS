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
	watch: {
		counter: function(value) {
			console.log('this.counter = ' + value);
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