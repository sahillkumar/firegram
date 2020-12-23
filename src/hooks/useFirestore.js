import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase/config';

const useFirestore = (collection) => {
    
    const [ docs, setDocs ] = useState([])

    useEffect(() => {
        
        const unsub = firestore.collection(collection)
            .orderBy('createdAt','desc')
            .onSnapshot((snap)=>{
                let documents = []
                snap.forEach(doc=>{
                    documents.push({
                        ...doc.data(),
                        id:doc.id
                    })
                })
                setDocs(documents)
            })
            
        return ()=> unsub()

    },[collection])

    return docs
}
 
export default useFirestore;