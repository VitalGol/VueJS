var component = {
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
};

new Vue({
	el: '#app',
	components: {
		'my-counter': component
	}
});
new Vue({
	el: '#app1',
	components: {
		myCounter: component
	}
});