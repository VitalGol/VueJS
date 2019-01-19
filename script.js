Vue.component('my-counter', {
	template: `
		<div style='border: 1px solid #000; padding: 10px'>
			<h2> counter : {{ counter }}</h2>
		  <button @click='add'>Change</button>
		</div>
		`,
	data: function () {
		return {
			counter: 0
		}
	},
	methods: {
		add: function () {
			this.counter++;
		}
	}
});

new Vue({
	el: '#app'
});