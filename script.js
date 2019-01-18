var app = new Vue({
	el: '#app',
	data: {
		message: 'Привет, Vue!',
		name: 'Vitaly',
		isOK: true,
		string: 'ylatiV si eman yM'
	},
	watch: {

	},
	methods: {
		sayHi: function () {
			return 'I have a good day';
		}
	}
});