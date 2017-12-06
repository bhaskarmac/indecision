'use strict';

console.log('app.js is running');
var app = {
	title: 'Decision App',
	subTitle: 'This is deicision app.'
};
var template = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		'Decision App'
	),
	React.createElement(
		'p',
		null,
		'This is some info'
	)
);

var userData = {
	name: 'Bhaskar',
	age: 25,
	location: 'Pune, India'
};

function getLocation(location) {
	if (location) {
		return React.createElement(
			'p',
			null,
			'Location - ',
			location
		);
	}
}

var anotherTemplate = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		userData.name ? userData.name : 'Anonymous'
	),
	userData.age && userData.age >= 18 && React.createElement(
		'p',
		null,
		' Age - ',
		userData.age
	),
	getLocation(userData.location)
);

var appTemplate = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		app.title
	),
	React.createElement(
		'p',
		null,
		app.subTitle
	)
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(anotherTemplate, appRoot);
// ReactDOM.render(appTemplate, appRoot);
