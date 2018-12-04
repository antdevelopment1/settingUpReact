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
        return <p>Location: {location}</p>;
    } 
}

var newApp = {
    title: 'Great',
    subtitle: 'Time',
    options: ['One', 'Two', 'Three']
};
var templateThree = (
    <div>
        <h1>{newApp.title}</h1>
        {newApp.subtitle && <p>{newApp.subtitle}</p>}
        <p>{(newApp.options && newApp.options.length > 3) ? 'Here are your options' : 'No options available'}</p>
    </div>
);


var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Annoymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

var appRoot = document.getElementById('app');


ReactDOM.render(templateThree, appRoot);