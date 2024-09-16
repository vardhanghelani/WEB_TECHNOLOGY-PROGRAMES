import React, { useEffect, useState } from "react";
function UseStateEffectDemo() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            }
            )
    },[]);

    return (
        <>
            <h1>
                Data
            </h1>
            <ul>
                <li>
                    {data.map((d) => (<li>{d.id}</li>))}
                </li>
            </ul>
        </>
    )

}
export default UseStateEffectDemo;