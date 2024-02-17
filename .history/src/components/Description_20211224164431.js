import React from 'react'
import '../styles/main.scss'

const Description = ({ children}) => {
    return (
        <div className="description">
           {children} 
        </div>
    )
}

export default Description
