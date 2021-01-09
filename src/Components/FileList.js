import React from 'react'

export default function FileList(props) {
    return (
        <div>
            <ul>
                {props.files.map((file,index)=>{
                    return (
                        <li key={index}>
                            <h1>{file.name}</h1>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
