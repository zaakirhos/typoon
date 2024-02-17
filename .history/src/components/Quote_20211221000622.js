import React, { useState, useEffect, useLayoutEffect, useRef } from "react"
import "../styles/Quote.css"
import Stat from "../components/Stat"
import styled from "styled-components"

/*
1. Select specific category of quotes
2. Should it be random or ordered and cycled?
*/

const QuoteChar = styled.span`
  font-size: 1.5em;
  /* color: black; */
`
function Quote({ quotes }) {
  //Data preprocessing
  let allQuotes = quotes.reduce((acc, curr) => {
    return [...acc, ...curr.node.quotes]
  }, [])


  // hooks
  const [quote, setQuote] = useState(allQuotes[Math.floor(Math.random() * allQuotes.length) + 1])
  const [quoteLetters, setQuoteLetters] = useState(quote.text.split(""))
  
  const [defaultQuoteColor, setDefaultQuoteColor] = useState("black")
  const quoteRef = useRef(null)

  //functions
  let handleChange = e => {
    e.preventDefault()
    if (e.target.value !== "") {
      e.target.value.split("").forEach((letter, index) => {
        if (letter === quoteLetters[index]) {
          quoteRef.current.children[index].style.color = "green"
        }
        if (letter !== quoteLetters[index] && index < quoteLetters.length) {
          quoteRef.current.children[index].style.color = "red"
        } 
      })
      
    }
    let unTypedLength = e.target.value !==""? e.target.value.split("").length : 0;
    for (let index = unTypedLength; index < quoteLetters.length; index++) {
      quoteRef.current.children[index].style.color = defaultQuoteColor
    }

    if (e.target.value === quote.text) {
      renderNextQuote();
      e.target.value = ""
    }
  }

  let renderNextQuote = () => {
    setQuote(allQuotes[Math.floor(Math.random() * allQuotes.length) + 1])
  }

  useEffect(() => {
    for (let index = 0; index < quoteRef.current.children.length; index++) {
      quoteRef.current.children[index].style.color = defaultQuoteColor;
    }
  }, [quote])
  
  let renderQuoteChar = (char, index) => {
    return <QuoteChar key={index} style={{color: {defaultQuoteColor}}} >{char}</QuoteChar>
  }

  

  return (
    <div>
      <div>
        <h1>Total available quotes: {allQuotes.length}</h1>
      </div>
      <div className="container">
        <div className="quote-display" id="quoteDisplay" ref={quoteRef}>
          {quoteLetters.map(renderQuoteChar)}
        </div>
        <i style={{ color: "gray" }}>
          &mdash;{" "}
          <h4 className="author" style={{ display: "inline" }}>
            {" "}
            {quote.author}
          </h4>
        </i>
        <textarea
          id="quoteInput"
          className="quote-input"
          autofocus
          onChange={handleChange}
        ></textarea>
      </div>
        <Stat  quote={quote}></Stat>
    </div>
  )
}

export default Quote
