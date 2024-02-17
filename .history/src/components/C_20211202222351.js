import React from 'react'

//function to get random words from api with fetch
const getRandomWordsFetch = async () => {
    const response = await fetch("https://random-word-api.herokuapp.com/word?number=10")
    const data = await response.json()
    return data
}


const C = () => {
    let words = []
    getRandomWordsFetch()
      .then(result => {
        words = [...result]
        console.log(words)
      })
      .catch(error => {
        console.log(error)
      })
      
    return (
      <div>
        DONNNNNNNNN!!!!
        <h2>{words[0]}</h2>
      </div>
    )
}

export default C
