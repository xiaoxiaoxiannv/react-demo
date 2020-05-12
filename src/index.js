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
            n: 0
        };
    }
    add() {
        this.setState((state)=>{
            return {n:state.n +1}
        })//setState是异步更新ui的过程
    }
    render(){
        return(
            <div className="Son">
                儿子 n: {this.state.n}
                <button onClick={() => this.add()}>+1</button>
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

