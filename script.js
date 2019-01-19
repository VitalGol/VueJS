var app = new Vue({
	data: {
		title: 'Hello!'
		},
		template: '<div><h1>{{ title }}</h1><p>someText</p></div>'
});

app.$mount('#app');
