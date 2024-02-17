// import React from 'react'
// import { useState, useEffect } from 'react'
// 
// const Error = ({word}) => {
// 	 const [definition, setDefinition] = useState('')
// 
//   const fetchData = () => {
//     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`)
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setDefinition(data[0].meanings[0].definitions[0].definition)
//       })
//   }
// 
//   useEffect(() => {
//     fetchData()
//   }, [word])
// 
//   console.log(definition)
// 
// 	return (
// 		<span>{definition}</span>
// 	)
// }
// 
// export default Error