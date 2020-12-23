import { motion } from 'framer-motion'
import React from 'react'
import useFirestore from '../hooks/useFirestore'

function ImageGrid({setSelectedImg}) {

    const docs = useFirestore("images")
    return (
        <div className="img-grid">
            {
                docs && docs.map(doc=>(
                    <motion.div key={doc.id} className="img-wrap" onClick={()=>setSelectedImg(doc.url)}
                        layout
                        whileHover={{opacity:1}}
                    >
                       <motion.img src={doc.url} alt="pic from firestore"
                           initial={{opacity:0}}
                           animate={{opacity:1}}
                           transition={{delay:1 , duration:1.5}}
                       />
                    </motion.div>
                ))
            }
        </div>
    )
}

export default ImageGrid
