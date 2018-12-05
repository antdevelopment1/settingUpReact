class IndesisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}


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
                Options Component Here
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                Option Component Here
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
         <div>Added options go here</div>
        );
    }
}


ReactDOM.render(<IndesisionApp />, document.getElementById('app'));