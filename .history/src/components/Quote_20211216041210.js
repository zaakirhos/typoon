import React, { useState, useEffect, useLayoutEffect, useRef } from "react"
import "../styles/Quote.css"

/*
1. Select specific category of quotes
2. Should it be random or ordered and cycled?
*/

let cycler = 0;
function Quote({quotes}) {

  let allQuotes = quotes.reduce((acc, curr) => {
    return [...acc, ...curr.node.quotes]
  }, [])

  const [quote, setQuote] = useState(allQuotes[cycler%allQuotes.length])

  let handleChange = (e) => {
    e.preventDefault()
    if(e.target.value ===  quote.text){
      cycler++
      setQuote(allQuotes[cycler%allQuotes.length])
      if (cycler === allQuotes.length){
        cycler = 0
      }
      e.target.value = ""
    }
  }
  console.log(allQuotes)
  return (
    <div>
      <div>
        <h1>Total available quotes: {allQuotes.length}</h1>
      </div>
      <div class="timer" id="timer"></div>
      <div class="container">
        <div class="quote-display" id="quoteDisplay">{quote.text}</div>
        <i style={{ color: "gray" }}>
          &mdash;{" "}
          <h4 class="author" style={{ display: "inline" }}>
            {" "}
            {quote.author}
          </h4>
        </i>
        <textarea id="quoteInput" class="quote-input" autofocus onChange={handleChange}></textarea>
      </div>
    </div>
  )
}

export default Quote
