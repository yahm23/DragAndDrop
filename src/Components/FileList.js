import React from 'react'

export default function FileList(props) {

    const handleEdit = (id)=>{
        props.editFileName(id,'This working?')
    }

    return (
        <div>
            <ul>
                {props.files.map((file,index)=>{
                    return (
                        <li key={index}>
                            <h1>{file.name}</h1>
                            <button onClick={()=>{handleEdit(file.id)}}>Edit Item</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
