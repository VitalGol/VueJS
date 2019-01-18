var app = new Vue({
	el: '#app',
	data: {
		people: [{
				name: 'Bob',
				age: 22,
				color: 'brown'
			},
			{
				name: 'Helen',
				age: 62,
				color: 'brown'
			},
			{
				name: 'Max',
				age: 52,
				color: 'brown'
			},
			{
				name: 'Glasha',
				age: 122,
				color: 'brown'
			}
		],
		person: {
			name: 'John',
			age: 55,
			job: 'FE dev'
		}

	}
});