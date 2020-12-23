import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

export default function UploadForm() {

    const [file,setFile] = useState(null)
    const [error, setError] = useState(null)
    const types = ["image/png","image/jpeg"]

    const handleChange = ({target}) =>{
        const selectedfile = target.files[0]
        if (selectedfile && types.includes(selectedfile.type)) {
            setFile(selectedfile)
            setError('')
        } else{
            setFile(null)
            setError("Please select an image of type png or jpeg !")
        }
    }
         
        const showError = ()=>  (
            error && (
                <span>{error}</span>
            ))
           
       

        const showFile = (file)=>
        {
            return(
                file && (
                    <div>
                        <span>{file.name}</span>
                        <ProgressBar file={file} setFile={setFile}/>
                    </div>
                )
            )
        }
    
    return (
        <form>
            <label>
                <input type="file" onChange={handleChange}/>
                <span className="add">+</span>
            </label>
            <div className="output">
                {showError()}
                {showFile(file)}
            </div>
        </form>
    )
}
