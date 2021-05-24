import React, {useState, useEffect} from 'react'

const Counter1 = (props) => {

    const [count, setCount] = useState(props.c)

    useEffect(() => {
        console.log("Counter1.js")
    }, [count])

    return (
        <div>
             <h2>Counter</h2>
        <h3>{count}</h3>

        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(0)}>reset</button>
        </div>
    )
}

export default Counter1
