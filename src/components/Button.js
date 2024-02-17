import React from 'react'
import { Link } from 'gatsby'
import '../styles/main.scss'

const Button = ({link, name}) => {
    return (

        <Link to={link} className="button">
          {name}
        </Link>

    )
}

export default Button
