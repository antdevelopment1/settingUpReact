console.log('App.js is running');

// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Going to go make a desision',
    options: []
};

const onFormSubmit = (e) => {

    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderSubmitOption();
    }

}

const onRemoveAll = () => {

    app.options = [];
    renderSubmitOption();
}

// Create remove all button abouve list
// On click wipe the array an re render

const appRoot = document.getElementById('app');

const renderSubmitOption = () => {

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options available'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                app.options.map( option => {
                    return <li key={option}>{option}</li>
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderSubmitOption();




