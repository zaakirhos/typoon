import React from 'react'
import '../styles/main.scss'

const Description = ({height, weight}) => {
    return (
        <div style={{height: {height}, weight: {weight}}}>
           {children} 
        </div>
    )
}

export default Description
