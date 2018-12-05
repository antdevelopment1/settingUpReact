class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indesision</h1>
                <h2>Stop Making Desisions</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What Should I Do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options go here
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
         <div>Added options go here</div>
        );
    }
}
// ?React Component
const jsx = (

    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>

)

ReactDOM.render(jsx, document.getElementById('app'));