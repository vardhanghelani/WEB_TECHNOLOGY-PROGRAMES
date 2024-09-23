import react from 'react';
import { useState } from 'react';
function Crud() {
    const [arr, setArr] = useState(["vardhan", 'tanish', 'abbas']);
    const [name, setName] = useState("");
    const addIntoArr = () => {
        if (name !== "") {
            let newArr = [...arr, name];
            setArr(newArr);
            setName("");
        }


    }

    const deleteIntoArr = (index) => {
        let newArr = [...arr];
        newArr.splice(index, 1);
        setArr(newArr);
    }
        const editIntoArr=(index)=>{
            const newArr=[...arr];
            const newname=prompt("Enter new name",newArr[index])
            if(newname && newname!==""){
                
                newArr[index]=newname;
                setArr(newArr);
            }

        }
    return (
        <div className='m-3'>
            <h1>CRUD Operation</h1>
            <input type='text' className='border-primary'
            value={name}
                onChange={
                    (e) => setName(e.target.value)
                }
            />
            <button onClick={addIntoArr}>add</button>
            <ul>
                {
                    arr.map((item, index) => {
                        return (
                            <li>{item}
                                <button className='m-2 btn btn-danger' onClick={() => {
                                    deleteIntoArr(index)
                                }}>Delete</button>
                                 <button className='m-2 btn btn-warning' onClick={() => {
                                    editIntoArr(index)
                                }}>Edit</button>
                            </li>
                        )

                    })

                }
            </ul>

        </div>
    )
}
export default Crud