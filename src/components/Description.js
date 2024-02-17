import React from 'react'
import '../styles/main.scss'

const Description = ({ children, style}) => {
    return (
        <div className="description" style={style}>
           {children} 
        </div>
    )
}

export default Description
