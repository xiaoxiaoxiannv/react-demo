import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.js'
import "./style.css"

function App() {
    return(
        <div className="App">
            爸爸
            <Son />
        </div>
    )
}

class Son extends React.Component{
    constructor() {
        super();
        this.state = {
            n: 0,
            m: 0
        };
    }
    addN() {
        this.setState({n:this.state.n +1});
        //m不会被覆盖为undefined
    }
    addM() {
        this.setState({ m: this.state.m + 1 });
        //n不会被覆盖为undefined
    }
    render(){
        return(
            <div className="Son">
                儿子 n: {this.state.n}
                <button onClick={() => this.addN()}>n+1</button>
                m: {this.state.m}
                <button onClick={() => this.addM()}>m+1</button>
                <Grandson />
            </div>
        );
    }
}

const Grandson = (props)=>{
    const [n, setN] = React.useState(0);
    return (
        <div className="Grandson">
            孙子 n:{n}
            <button onClick={() => setN(n + 1)}>+1</button>
        </div>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));

