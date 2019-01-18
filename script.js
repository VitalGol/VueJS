var app = new Vue({
	el: '#app',
	data: {
		x: 0,
		y: 0
	},
	watch: {},
	methods: {
		handleMouseMove: function (event) {
			this.x = event.clientX;
			this.y = event.clientY;
		},
		alertValue: function (event) {
			alert(event.target.value);
			// if (event.keyCode === 13) {
      //  alert(event.target.value);
			// }
		}
	}
});