console.log('App.js is running');

// JSX - JavaScript XML

const template = (
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

let count = 0;
const addOne = () => {
    console.log('addOne')
};
const minusOne = () => {
    console.log('minusOne');
};
const reset = () => {
    console.log('Reset');
};
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);
console.log(templateTwo);

const appRoot = document.getElementById('app');


ReactDOM.render(templateTwo, appRoot);