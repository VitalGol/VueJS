var app = new Vue({
	el: '#app',
	data: {
		isActive: false,
		height: 100,
		color: 'blue'
	},
	watch: {},
	computed: {
		circleClasses: function () {
			return {
				"background": this.color,
				"height": this.height + "px"
			};
		}
	},
	methods: {

	}
});