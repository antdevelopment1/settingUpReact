console.log('App.js is running');

// JSX - JavaScript XML

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is a lot of fun</p>
        <ol>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>April Copes</h1>
        <p>Age: 26</p>
        <p>Location: New York</p>
    </div>
)

var appRoot = document.getElementById('app');


ReactDOM.render(templateTwo, appRoot);