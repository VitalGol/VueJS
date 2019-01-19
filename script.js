var app = new Vue({
	el: '#app',
	data: {
		title: 'Hello'
	},
	methods: {
		alertFast: () => {
     alert('I am from APP');
		}
	}
});

app.newField = 'someText';
// console.log(app);

var app1 = new Vue({
	el: '#app1',
	data: {
		title: 'Hello Vitaly'
	},
	methods: {
		updateTitle: () => {
      app.title = 'updated from second app';
			app.newField = 'New field';
			setTimeout(() => {
				app.alertFast();
			}, 3000);
		}
	}
});