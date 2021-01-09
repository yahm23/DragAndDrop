import React, { useState } from 'react'

export default function FileList(props) {
    const [modalShow,setShow]=useState(false)
    const [editID,setID]=useState()
    const [newName,setNewName]=useState('')

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(event);
        setShow(false)
        props.editFileName(editID,newName)
    }

    const handleShowEdit = (id)=>{
        setID(id)
        setShow(true)
    }

    return (
        <div>
            {modalShow?
            <form onSubmit={handleSubmit}>
                <input value={newName} onChange={e => setNewName(e.target.value)} placeholder="New file name"></input>
                <button type="submit" >Submit</button>
            </form>
            :
            null
            }

            <ul>
                {props.files.map((file,index)=>{
                    return (
                        <li key={index}>
                            <h1>{file.name}</h1>
                            <button onClick={()=>{handleShowEdit(file.id)}}>Edit Item</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
