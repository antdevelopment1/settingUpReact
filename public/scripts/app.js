'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

// var template = (
//     <div>
//         <h1>Indecision App</h1>
//         <p>This is a lot of fun</p>
//         <ol>
//             <li>List item 1</li>
//             <li>List item 2</li>
//             <li>List item 3</li>
//         </ol>
//     </div>
// );
var user = {
    name: 'April',
    age: 21,
    location: 'New York'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var newApp = {
    title: 'Great',
    subtitle: 'Time',
    options: ['One', 'Two', 'Three']
};
var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        newApp.title
    ),
    newApp.subtitle && React.createElement(
        'p',
        null,
        newApp.subtitle
    ),
    React.createElement(
        'p',
        null,
        newApp.options && newApp.options.length > 3 ? 'Here are your options' : 'No options available'
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Annoymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);
