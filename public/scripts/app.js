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

var newApp = {
    title: 'Great',
    subtitle: 'Time'
};
var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        newApp.title
    ),
    React.createElement(
        'h2',
        null,
        newApp.subtitle
    )
);

var user = {
    name: 'April',
    age: 27,
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

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
