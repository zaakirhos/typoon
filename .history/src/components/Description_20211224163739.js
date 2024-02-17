import React from 'react'
import '../styles/main.scss'

const Description = ({height, weight, children}) => {
    return (
        <div className="description" style={{height: {height}, weight: {weight}}}>
           {children} 
        </div>
    )
}

export default Description
