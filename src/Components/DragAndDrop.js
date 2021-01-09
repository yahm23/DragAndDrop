import React, {useState} from 'react'
import Dropzone from 'react-dropzone'
import { idGenerator } from '../functions'
import FileList from './FileList'

export default function DragAndDrop() {
    const [fileList,setFileList] = useState([])

    //Function used as a callback with the dropzone package, stores the files into state,while also creating a random ID
    const addFileToList = (fileObject) =>{
        let newObj = [...fileList]; // copying the old state
        fileObject.id = idGenerator();
        newObj.push(fileObject)
        setFileList(newObj);
    }

    // Finds specific file in fileList state array, updates just the name with the id.
    const editFileName = (fileID,newName)=>{
        let updatedList = fileList.map(file => 
            {
              if (file.id === fileID){
                return {...file, name: newName}; 
              }
              return file; 
            });
        
            setFileList(updatedList)
    }

    
    // Finds specific file in fileList state array, deletes(filters out) one with that id.
    const deleteSpecificFile = (fileID) => {
        setFileList(fileList.filter(file => file.id !== fileID));
    }



    return (
        <div>
            <h1>Drag and drop</h1>

            <div className='dragZone'>
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
            </div>


            <FileList deleteSpecificFile={deleteSpecificFile} editFileName={editFileName} files={fileList}/>

            <button onClick={()=>{console.log( fileList)}}>Log fileList</button>
            <button onClick={()=>setFileList([])}>Clear Entire Queue</button>
        </div>
    )
}
