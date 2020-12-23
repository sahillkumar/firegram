import { useState, useEffect } from 'react';
import { storage,firestore, timestamp } from '../firebase/config'

export default function useStorage(file) {
    
    const [url, setUrl] = useState(null)
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)

    useEffect(()=>{
        
        // reference
        const storageRef = storage.ref(file.name)   
        const collectionRef = firestore.collection('images')                        //creating reference

        storageRef.put(file).on('state_changed',(snap)=>{                           //uploading file and getting uploaded percent
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage)
        },err=>{                                                                    // getting Error
            setError(err)
        }, async ()=>{
            const url = await storageRef.getDownloadURL()                           // getting back url of the uploaded file
            setUrl(url)
            const createdAt = timestamp()
            collectionRef.add({
                url,createdAt
            })
            
        })

    },[file])

    return { progress, url, error}
}
