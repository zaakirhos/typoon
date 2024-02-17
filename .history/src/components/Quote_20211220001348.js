import React, { useState, useEffect, useLayoutEffect, useRef } from "react"
import "../styles/Quote.css"
import styled from "styled-components"

/*
1. Select specific category of quotes
2. Should it be random or ordered and cycled?
*/

const QuoteChar = styled.span`
  font-size: 1.5em;
  color: ${props => props.iscorrect ? "green" : "red"};
`

let cycler = 0;
function Quote({quotes}) {
  console.log("Wrote")
  //Data preprocessing
  let allQuotes = quotes.reduce((acc, curr) => {
    return [...acc, ...curr.node.quotes]
  }, [])

  // States
  const [quote, setQuote] = useState(allQuotes[cycler%allQuotes.length])


  //functions
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

    let renderQuoteChar = (char, index) => {
      return (
        <QuoteChar >{char}</QuoteChar>
        )
    }
  console.log(allQuotes)
  return (
    <div>
      <div>
        <h1>Total available quotes: {allQuotes.length}</h1>
      </div>
      <div className="timer" id="timer"></div>
      <div className="container">
        <div className="quote-display" id="quoteDisplay">{quote.text.split("").map(renderQuoteChar)}</div>
        <i style={{ color: "gray" }}>
          &mdash;{" "}
          <h4 className="author" style={{ display: "inline" }}>
            {" "}
            {quote.author}
          </h4>
        </i>
        <textarea id="quoteInput" className="quote-input" autofocus onChange={handleChange}></textarea>
      </div>
    </div>
  )
}

export default Quote


