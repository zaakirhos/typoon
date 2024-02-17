import React, { useState, useEffect, useLayoutEffect, useRef } from "react"
import "../styles/Quote.css"
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
  console.log("Wrote")
  //Data preprocessing
  let allQuotes = quotes.reduce((acc, curr) => {
    return [...acc, ...curr.node.quotes]
  }, [])


  // hooks
  const [quote, setQuote] = useState(allQuotes[cycler % allQuotes.length])
  const quoteLetters  = quote.text.split("")
  const [isCorrect, setIsCorrect] = useState(99)
  const [defaultQuoteColor, setDefaultQuoteColor] = useState("black")
  const [currentTypedQuoteNumber, setCurrentTypedQuoteNumber] = useState(0)
  const quoteRef = useRef(null)

  //functions
  let handleChange = e => {
    e.preventDefault()
    console.log("changed")

    if (e.target.value !== "") {
      e.target.value.split("").forEach((letter, index) => {
        if (letter === quoteLetters[index]) {
          quoteRef.current.children[index].style.color = "green"
        }
        if (letter !== quoteLetters[index]) {
          quoteRef.current.children[index].style.color = "red"
        } 
      })
      
    }
    let unTypedLength = e.target.value !==""? e.target.value.split("").length : 0;
    for (let index = unTypedLength; index < quoteLetters.length; index++) {
      quoteRef.current.children[index].style.color = defaultQuoteColor
    }

    if (e.target.value === quote.text) {
      cycler++
      setQuote(allQuotes[cycler % allQuotes.length])
      if (cycler === allQuotes.length) {
        cycler = 0
      }
      e.target.value = ""
    }
  }

  let renderNextQuote = () => {
    setQuote(allQuotes[Math.floor(Math.random() * allQuotes.length) + 1])
    setCu
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
      <div className="timer" id="timer"></div>
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

        <h3>{}</h3>
      </div>

    </div>
  )
}

export default Quote
