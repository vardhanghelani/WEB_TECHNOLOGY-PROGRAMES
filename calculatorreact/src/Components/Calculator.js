import React, { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState("");

    const insert = (value) => {
        setInput((preValue) => preValue + value);
    };

    const clearDis = () => {
        setInput("");
    };

    const Delete = () => {
        setInput((preValue) => preValue.slice(0, -1));
    };

    const calculate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput("error");
        }
    };

    return (
        <div>
            <h1>Calculator</h1>
            <div className='row ms-3'>
                <div className='col-md-4'>
                    <input type="text" value={input} readOnly />
                </div>
            </div>
            <div className='row ms-3'>
                <div className='col'>
                    <button onClick={clearDis}>C</button>
                    <button onClick={Delete}>DEL</button>
                    <button onClick={() => insert("/")}>/</button>
                    <button onClick={() => insert("*")}>*</button>
                </div>
            </div>
            <div className='row ms-3'>
                <div className='col'>
                    <button onClick={() => insert("7")}>7</button>
                    <button onClick={() => insert("8")}>8</button>
                    <button onClick={() => insert("9")}>9</button>
                    <button onClick={() => insert("-")}>-</button>
                </div>
            </div>
            <div className='row ms-3'>
                <div className='col'>
                    <button onClick={() => insert("4")}>4</button>
                    <button onClick={() => insert("5")}>5</button>
                    <button onClick={() => insert("6")}>6</button>
                    <button onClick={() => insert("+")}>+</button>
                </div>
            </div>
            <div className='row ms-3'>
                <div className='col'>
                    <button onClick={() => insert("1")}>1</button>
                    <button onClick={() => insert("2")}>2</button>
                    <button onClick={() => insert("3")}>3</button>
                    <button onClick={calculate}><strong>=</strong></button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
