import React, {useState} from 'react'
import Dropzone from 'react-dropzone'
import { array_move, idGenerator } from '../functions'
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
                //   return file
                console.log(file.size);
                return { ...file, name: newName}; 
              }
              return file; 
            });
        
            setFileList(updatedList)
    }

    
    // Finds specific file in fileList state array, deletes(filters out) one with that id.
    const deleteSpecificFile = (fileID) => {
        setFileList(fileList.filter(file => file.id !== fileID));
    }

    // Not functioning, as ran out of time. left in as reference.
    const moveFile = (fileID, upwards)=>{
        var oldIndex = fileList.findIndex(file => file.id ===fileID);
        console.log('old index is '+ oldIndex);
        var newIndex;
        newIndex= oldIndex + upwards? -1:+1
        console.log('new index is '+ newIndex);
        var movedArray = array_move(fileList, oldIndex, newIndex )
        console.log(movedArray);
        setFileList(movedArray)
    }
    

    return (
        <div>
            <div className="centerUpload">

                <div className='dragZone'>
                    <Dropzone onDrop={acceptedFiles => addFileToList(acceptedFiles[0])}>
                        {({getRootProps, getInputProps}) => (
                        <section> 
                            <div className="dropZone" {...getRootProps()}>
                                <p>Drag files here to upload</p>
                                <input {...getInputProps()} />
                                <button>Upload File</button>
                            </div>
                        </section>
                        )}
                    </Dropzone>


                </div>
                <div className='fileListContainer'>
                    <FileList
                        files={fileList}
                        moveFile={moveFile}
                        deleteSpecificFile={deleteSpecificFile}
                        editFileName={editFileName}
                    />
                </div>

            </div>
                <button onClick={()=>setFileList([])}>Clear Entire Queue</button>
        </div>
    )
}
