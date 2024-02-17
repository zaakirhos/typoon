import React from 'react'

//function to get random words from api with fetch
const getRandomWordsFetch = async () => {
    const response = await fetch("https://random-word-api.herokuapp.com/word?number=10")
    const data = await response.json()
    return data
}


const C = () => {
    return (
        <div>
            
        </div>
    )
}

export default C
