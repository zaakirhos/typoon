import React from 'react'
import { useState, useEffect } from 'react'

const Error = () => {
	 const [definition, setDefinition] = useState('')

  const fetchData = () => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/unpremeditated")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setDefinition(data[0].meanings[0].definitions[0].definition)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(definition)

	return (
		<div>
		<h1>{definition}</h1>
    </div>
	)
}

export default Error