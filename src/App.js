import React from 'react'
const App = ()=>{
    return (
        <div>App组件
            <Component numbers={['a','b','c']}/>
        </div>
    )
};


const Component = (props) => {
    return props.numbers.map((n,index)=>{
        return <div>下标{index}，值为{n}</div>
    })
}


export default App;