import React, { useState, useEffect, useLayoutEffect } from "react"
import "../styles/Quote.css"

// const getQuotes = async () => {
//   const response = await fetch("https://type.fit/api/quotes")
//   const data = await response.json()
//   return data
// }

function Quote({quotes}) {

  let allQuotes = quotes.reduce((acc, curr) => {
    return [...acc, ...curr.node.quotes]
  }, [])

    const [quote, setQuote] = useState(allQuotes[0])

  console.log(allQuotes)
  return (
    <div>
      <div>
        <h1>Total available quotes: {allQuotes.length}</h1>
      </div>
      <div class="timer" id="timer"></div>
      <div class="container">
        <div class="quote-display" id="quoteDisplay"></div>
        <i style={{ color: "gray" }}>
          &mdash;{" "}
          <h4 class="author" style={{ display: "inline" }}>
            {" "}
            {}
          </h4>
        </i>
        <textarea id="quoteInput" class="quote-input" autofocus></textarea>
      </div>
    </div>
  )
}

export default Quote
