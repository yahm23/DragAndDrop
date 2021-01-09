import React, { useState, useEffect } from 'react'

export default function FileList(props) {
    const [modalShow,setShow]=useState(false)
    const [editID,setID]=useState()
    const [newName,setNewName]=useState('')
    const [files,setAllFiles] = useState(props.files)

    useEffect(() => {
        setAllFiles(props.files)
    }, [props.files])


    // Handlers for different events
    const handleSubmit = (event)=>{
        event.preventDefault();
        setShow(false)
        props.editFileName(editID,newName)
    }

    //Shows the edit modal, this can be done other ways but felt it was the cleanest
    const handleShowEdit = (id)=>{
        setID(id)
        setShow(true)
    }

    const handleFileDelete = (id) => {
        props.deleteSpecificFile(id)
    }

    // Not functioning, as ran out of time. left in as reference to what I was attempting.
    const handleChangeFilePosition =(id,upwards) =>{
         props.moveFile(id,upwards)
    }

    return (
        <div>
            {modalShow?
                // When edit is clicked; the user will be able to edit the selected item or exit returning to the main.
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

            <div className='filesContainer'>
                {files.map((file,index)=>{
                    return (
                        <div className='fileList' key={index}>
                            <h5>{file.name}</h5>
                            
                            {/* Was in the process of changing position in queu functionality. */}
                            {/* <button onClick={()=>{handleChangeFilePosition(file.id,true)}}>+</button> 
                            <button onClick={()=>{handleChangeFilePosition(file.id,false)}}>-</button> */}
                            <button onClick={()=>{handleShowEdit(file.id)}}>Edit File Name</button>
                            <button onClick={()=>{handleFileDelete(file.id)}}>Delete File</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
