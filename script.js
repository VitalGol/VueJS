var app = new Vue({
	el: '#app',
	data: {
		isActive: false,
		color: ''
	},
	watch: {},
	computed: {
		getCssClasses: function () {
			return {
				'red': this.isActive,
				'blue': !this.isActive
			};
		}
	},
	methods: {

	}
});