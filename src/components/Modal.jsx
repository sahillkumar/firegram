import { motion } from 'framer-motion'
import React from 'react'

function Modal({selectedImg,setSelectedImg}) {

    const handleClick = ({target:{classList}}) =>{
        if(classList.contains('backdrop')){
            setSelectedImg(null)
        }
    }
    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{opacity:0}}
            animate={{opacity:1}}
        >
            <motion.img src={selectedImg} alt="selected image"
                initial={{y:"-100vh"}}
                animate={{y:0}}
            />
        </motion.div>
    )
}

export default Modal
