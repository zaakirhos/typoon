import React from 'react'
import '../styles/main.scss'

const Description = ({height, weight, bgColor,  children}) => {
    return (
        <div className="description" style={{height: {height}, weight: {weight}, background:{bgColor}}}>
           {children} 
        </div>
    )
}

export default Description
