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
                <div className="modalEdit">
                    <form onSubmit={handleSubmit}>
                        <input value={newName} onChange={e => setNewName(e.target.value)} placeholder="New file name"></input>
                        <button type="submit" >Submit</button>
                        <button onClick={()=>setShow(false)}>Close</button>
                    </form>
                </div>
            :
            null
            }

            <div>
                {props.files.map((file,index)=>{
                    return (
                        <div className='fileList' key={index}>
                            <h1>{file.name}</h1>
                            <button onClick={()=>{handleShowEdit(file.id)}}>Edit Item</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
