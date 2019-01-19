var app = new Vue({
	el: '#app',
	data: {
		title: 'Hello!'
		},
		beforeCreate() {
			console.log('before Create');
		},
		created() {
			console.log('Create');
		},
		beforeMount() {
				console.log('before Mount');
		},
		mounted() {
			console.log('mounted');
		},
		beforeUpdate() {
			console.log('before Update');
		},
		updated() {
			console.log('Update');
		},
		beforeDestroy() {
			console.log('before Destroy');
		},
		destroyed() {
			console.log('Destroy');
		},
		methods: {
			doDestroy() {
				this.$destroy();
			}
		},
});