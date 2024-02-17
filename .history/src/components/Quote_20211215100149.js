import React, {useState, useEffect, useLayout} from "react"
import "../styles/Quote.css"

const getQuotes = async () => {
  const response = await fetch("https://type.fit/api/quotes")
  const data = await response.json()
  return data
}

function Quote() {

       const [quotes, setQuotes] = useState([])
       const [wordClicker, setWordClicker] = useState(false)
       const [isExhausted, setIsExhausted] = useState(false)

       useEffect(() => {
         getQuotes()
           .then(result => {
             setQuotes(result)
           })
           .catch(error => {
             console.log(error)
           })
       }, [])

  return (
    <div>
      <div class="timer" id="timer"></div>
      <div class="container">
        <div class="quote-display" id="quoteDisplay"></div>
        <i style={{ color: "gray" }}>
          &mdash; <h4 class="author" style={{ display: "inline" }}>  {quotes.length}</h4>
        </i>
        <textarea id="quoteInput" class="quote-input" autofocus></textarea>
      </div>
    </div>
  )
}

export default Quote
