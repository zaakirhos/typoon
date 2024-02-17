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
  const [quote, setQuote] = useState(
    allQuotes[Math.floor(Math.random() * allQuotes.length) + 1]
  )
  const quoteLetters  = quote.text.split("")
  const [defaultQuoteColor, setDefaultQuoteColor] = useState("black")
  const [finished, setFinished] = useState(false)
  const quoteRef = useRef(null)
  const [incorrectLetters, setIncorrectLetters] = useState({});

  //functions
  let handleChange = e => {
    e.preventDefault()
    if (e.target.value !== "") {
      e.target.value.split("").forEach((letter, index) => {
        if (letter === quoteLetters[index]) {
          quoteRef.current.children[index].style.color = "green"
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
    return <QuoteChar key={index} style={{color: {defaultQuoteColor}}} >{char}</QuoteChar>
  }

  let renderStat = () =>{
    if (finished) {
      <Stat quote={quote} incorrect={incorrectLetters}></Stat>
    }
  }
  

  return (
    <div>
      <div>
        <h1>Total available quotes: {allQuotes.length}</h1>
      </div>
      <div className="container" style={{ display: "center" }}>
        <div className="quote-display" id="quoteDisplay" ref={quoteRef}>
          {quoteLetters.map(renderQuoteChar)}
          <span>{`  [${quote.text.split(" ").length}]`}</span>
        </div>
        <i style={{ color: "gray" }}>
          &mdash;{" "}
          <h4 className="author" style={{ display: "inline" }}>
            {" "}
            {quote.author}
          </h4>
        </i>
        <br />
        <textarea
          id="quoteInput"
          className="quote-input"
          autofocus
          onChange={handleChange}
          style={{ width: "500px", height: "200px" }}
        ></textarea>
      </div>
      <button onClick={() => setFinished(!finished)}>
        <h3>{finished ? "Start" : "Stop"}</h3>
      </button>
      
    </div>
  )
}

export default Quote


