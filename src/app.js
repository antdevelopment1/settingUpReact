class IndesisionApp extends React.Component {
    render() {
        const title = 'Indesision';
        const subtitle = 'Put you life in the hands of a computer';
        const options = ['Things one', 'Thing two', 'Thing three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
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


// Render new p taf for each option (set text, set key)
class Options extends React.Component {
    render() {
        return (
            <div>
              {
                  this.props.options.map( option => {
                   return <Option key={option} optionText={option} />
                  })
              }
            </div>
        );
    }
}


class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
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


