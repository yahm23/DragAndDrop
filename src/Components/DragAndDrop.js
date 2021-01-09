import React, {useState} from 'react'
import Dropzone from 'react-dropzone'
import { idGenerator } from '../functions'
import FileList from './FileList'

export default function DragAndDrop() {
    const [fileList,setFileList] = useState([])

    //Function used as a callback with the dropzone package, stores the files into state,while creating a random ID
    const addFileToList = (fileObject) =>{
        let newObj = [...fileList]; // copying the old state
        fileObject.id = idGenerator();
        newObj.push(fileObject)
        setFileList(newObj);
    }

    const editFileName = (fileID,newName)=>{
        let updatedList = fileList.map(file => 
            {
              if (file.id === fileID){
                return {...file, name: newName}; //gets everything that was already in file, and updates name
              }
              return file; // else return unmodified item 
            });
        
            setFileList(updatedList)
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

            <FileList editFileName={editFileName} files={fileList}/>

            <button onClick={()=>{console.log( fileList)}}>Log fileList</button>
        </div>
    )
}
