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
var templateThree = (
    <div>
        <h1>{newApp.title}</h1>
        <h2>{newApp.subtitle}</h2>
    </div>
);

var user = {
    name: 'April',
    age: 27,
    location: 'New York'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } 
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
)

var appRoot = document.getElementById('app');


ReactDOM.render(templateTwo, appRoot);