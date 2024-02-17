import React from 'react'
import '../styles/main.scss'

const Description = ({ children, style}) => {
    return (
        <div className="description">
           {children} 
        </div>
    )
}

export default Description
