import React, { useState } from "react";

function UseStateDemo() {
    const [count, setcount] = useState(0);
    function Increment() {
        setcount(count + 1);
    }
    function Decrement() {
        setcount(count - 1);
    }
    return (
        <>
            <h1>{count}</h1>
        <button onClick={Decrement}>Decrement</button>
            <button onClick={Increment}>Increment</button>
        </>
    );
}
export default UseStateDemo;