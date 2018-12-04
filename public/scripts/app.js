'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is a lot of fun'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'List item 1'
        ),
        React.createElement(
            'li',
            null,
            'List item 2'
        ),
        React.createElement(
            'li',
            null,
            'List item 3'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'April Copes'
    ),
    React.createElement(
        'p',
        null,
        'Age: 26'
    ),
    React.createElement(
        'p',
        null,
        'Location: New York'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
