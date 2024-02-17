import React, {useState, useEffect} from 'react'

//function to get random words from api with fetch
const getRandomWordsFetch = async () => {
    const response = await fetch("https://random-word-api.herokuapp.com/word?number=10")
    const data = await response.json()
    return data
}


const C = () => {
    const [words, setWords] = useState([])
    const [wordClicker, setWordClicker] = useState(false)
    
    useEffect(() => {
      getRandomWordsFetch()
        .then(result => {
          setWords(result)
        })
        .catch(error => {
          console.log(error)
        })
    }, [])

    return (
      <div>
        !!!!
        <h2>{words[1]}</h2>
        <button onClick={() => setWordClicker(!wordClicker)}>Click me</button>
      </div>
    )
}

export default C
