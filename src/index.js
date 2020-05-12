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
    const [m, setM] = React.useState(0);
    return (
        <div className="Grandson">
            孙子 n:{n}
            <button onClick={() => setN(n + 1)}>n+1</button>
             m:{m}
            <button onClick={() => setM(m + 1)}>m+1</button>
        </div>
    );
};
//也可以写成
// const Grandson = ()=>{
//     const [state, setState] = React.useState({n:0,m:0});
//     return (
//         <div className="Grandson">
//             孙子 n:{state.n}
//             <button onClick={() => setState({...state,n:state.n + 1})}>n+1</button>
//             m:{state.m}
//             <button onClick={() => setState({...state,m:state.m + 1})}>m+1</button>
//         </div>
//     );
// };

ReactDOM.render(<App />, document.getElementById('root'));

