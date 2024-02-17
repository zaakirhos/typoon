import React, { useState, useEffect, useLayoutEffect, useRef } from "react"
// import "../styles/Quote.css"
import Stat from "../components/Stat"
import {Link} from 'gatsby'
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import '../styles/quote.scss'

/*
1. Select specific category of quotes
2. Should it be random or ordered and cycled?
*/


const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  background-color: #264653;
  font-family: Arial, Helvetica, sans-serif;

}
`

function Quote({ quotes }) {
  //Data preprocessing
  let allQuotes = quotes.reduce((acc, curr) => {
    return [...acc, ...curr.node.quotes]
  }, [])


  // hooks
  const [quote, setQuote] = useState(
    allQuotes[Math.floor(Math.random() * allQuotes.length) + 1]
  )
  const quoteLetters  = quote.text.split("")
  const [defaultQuoteColor, setDefaultQuoteColor] = useState("#e5e5e5")
  const quoteRef = useRef(null)
  const [incorrectLetters, setIncorrectLetters] = useState({});

  //functions
  let handleChange = e => {
    e.preventDefault()
    if (e.target.value !== "") {
      e.target.value.split("").forEach((letter, index) => {
        if (letter === quoteLetters[index]) {
          quoteRef.current.children[index].style.color = "#0EAD69"
        }
        if (letter !== quoteLetters[index] && index < quoteLetters.length) {
          // console.log(e.target.value.length)
          // console.log(e.target.value.split(""))
          quoteRef.current.children[index].style.color = "red"
          // console.log("incorrect letter; you typed ", letter, " and the correct letter is ", quoteLetters[index])
          if(!incorrectLetters.hasOwnProperty(index)){
            // console.log(e.target.value.length)
            // console.log(e.target.value.split(""))
            setIncorrectLetters({ ...incorrectLetters, [index]: [quoteLetters[index], 1, letter] })
          }
          if (
            e.target.value.length-1 === index &&
            incorrectLetters.hasOwnProperty(index) && e.target.value[index] !== incorrectLetters[index][2]
          ) {
            // console.log(e.target.value.length)
            // console.log(e.target.value.split(""))
            incorrectLetters[index][1] += 1
            incorrectLetters[index][2] = e.target.value[index];
            setIncorrectLetters({ ...incorrectLetters })
          }
          // console.log("incorrect letters: ", incorrectLetters)
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
    // console.log("incorrectLetters: ", incorrectLetters)
    setIncorrectLetters(0);
  }, [quote])

  let renderQuoteChar = (char, index) => {
    return <span className="quote-char" key={index} style={{color: {defaultQuoteColor}}} >{char}</span>
  }



  return (
    <div>
      <Link to='/'>
      <button>Back</button>
      </Link>
      <div className="container">
        <div className='quote-display' ref={quoteRef} style={{ color: "#e5e5e5" }}>
          {quoteLetters.map(renderQuoteChar)}
          <span>{`  [${quote.text.split(" ").length}]`}</span>
        </div>
        <i style={{ color: "#FCA311" }}>
          &mdash;{" "}
          <h2 className="author" style={{ display: "inline" }}>
            {" "}
            {quote.author}
          </h2>
        </i>
        <br />
        <textarea className='quote-input' autofocus onChange={handleChange}></textarea>
      </div>
      <Stat typingContent={quote} type='quote' incorrect={incorrectLetters}></Stat>
    </div>
  )
}

export default Quote
