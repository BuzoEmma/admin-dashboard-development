import React, { useCallback, useState } from 'react'
import uploadIcon from '../../asserts/upload-icon.svg'
import {useDropzone} from 'react-dropzone'

const DropzoneArea = ({ className, setImgFiles }) => {
  const onDrop = useCallback(acceptedFiles => {

  if(acceptedFiles.length) {
    setImgFiles(previousFiles => [
      ...previousFiles,
      ...acceptedFiles.map(file => 
        Object.assign(file, { preview: URL.createObjectURL(file)})
      )
    ])
  }
}, [])


  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop, 
    accept: {
      'image/*' : []
    }
  })

  return (
    <>
      <div {...getRootProps({
        className: className
      })}>
        <input {...getInputProps()} />
        {
          isDragActive ? (
            <p>Drop the image here ...</p>
          )
            : (
              <p>Drag and drop some files here, or click to select files</p>
            )
        }
      </div>

      {/* preview section */}
      <ul>
        {/* {
            <li key={files[files?.length - 1].name}>{files[files?.length - 1].name}</li>
 
        } */}
      </ul>
    </>
  )
}

export default DropzoneArea
