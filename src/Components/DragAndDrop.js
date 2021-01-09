import React, {useState} from 'react'
import Dropzone from 'react-dropzone'
import FileList from './FileList'

export default function DragAndDrop() {
    const [fileList,setFileList] = useState([])


    const addFileToList = (fileObject) =>{
        let newObj = [...fileList]; // copying the old state
        newObj.push(fileObject)
        setFileList(newObj);

    }


    return (
        <div>
            <h1>Drag and drop</h1>

            <Dropzone onDrop={acceptedFiles => addFileToList(acceptedFiles[0])}>
                {({getRootProps, getInputProps}) => (
                <section>
                    <div {...getRootProps()}>
                        <p>Drag files here to upload</p>
                        <input {...getInputProps()} />
                        <button>Upload File</button>
                    </div>
                </section>
                )}
            </Dropzone>

            <FileList files={fileList}/>

            <button onClick={()=>{console.log(fileList)}}>Log fileList</button>
        </div>
    )
}
