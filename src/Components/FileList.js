import React, { useState, useEffect } from 'react'

export default function FileList(props) {
    const [modalShow,setShow]=useState(false)
    const [editID,setID]=useState()
    const [newName,setNewName]=useState('')

    useEffect(() => {
    }, [props.files])
    // Handlers for different events
    const handleSubmit = (event)=>{
        event.preventDefault();
        setShow(false)
        props.editFileName(editID,newName)
    }

    const handleShowEdit = (id)=>{
        setID(id)
        setShow(true)
    }

    const handleFileDelete = (id) => {
        props.deleteSpecificFile(id)
    }

    // Not functioning, as ran out of time. left in as reference.
    // const handleChangeFilePosition =(id,upwards) =>{
    //      props.moveFile(id,upwards)
    // }

    return (
        <div>
            {modalShow?
                <div className="modalEdit">
                    <form className="editForm" onSubmit={handleSubmit}>
                        <input value={newName} onChange={e => setNewName(e.target.value)} placeholder="New file name"></input>
                        <br></br>
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
                            
                            {/* <button onClick={()=>{handleChangeFilePosition(file.id,true)}}>+</button> Was in the process of changing position in queu functionality.
                            <button onClick={()=>{handleChangeFilePosition(file.id,false)}}>-</button> */}
                            <button onClick={()=>{handleShowEdit(file.id)}}>Edit File</button>
                            <button onClick={()=>{handleFileDelete(file.id)}}>Delete File</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
