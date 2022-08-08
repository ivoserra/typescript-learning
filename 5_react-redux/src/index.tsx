import React from 'react';
import ReactDOM from 'react-dom'


interface AppProps {
    // question mark means an option property 
    color?: string;
}


// tp hook example

// const App = (props: AppProps): JSX.Element => {
    
//     return (
//         <div>{props.color}</div>
//     );
// }

// ReactDOM.render(<App color="green"/>, document.querySelector('#root'))

// second argument for constructor
// interface AppState {
//     counter: number;
// }

// class App extends React.Component<AppProps, AppState> 

class App extends React.Component<AppProps> {
    state = { counter: 0 };

    // constructor(props: AppProps){
    //     super(props);
    //     this.state = { counter: 0};
    // }

    onUp = (): void => {
        this.setState({counter: this.state.counter +1 })
    }

    onDown = (): void => {
        this.setState({counter: this.state.counter -1 })
    }

    render() {
        return (
        <div>
            <button onClick= {this.onUp}>+</button>
            {this.state.counter}
            <button onClick={this.onDown}>-</button>
        </div>
        )
    }
}


ReactDOM.render(<App />, document.querySelector('#root'));

