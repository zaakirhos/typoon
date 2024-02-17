import React, { useState, useEffect, useRef } from "react"
import Stat from "../components/Stat"
import Speedometer from "../components/Speedometer"
import {Link} from 'gatsby'
import '../styles/main.scss'


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
    return <span className="content-char" key={index} style={{color: {defaultQuoteColor}}} >{char}</span>
  }

  return (
    <div>
      <div style={{display: "flex", flexDirection: "row", justifyContent:"center", alignItems:"center" width:""}}>
        <div className="container">
          <div
            className="content-display"
            ref={quoteRef}
            style={{ color: "#e5e5e5" }}
          >
            {quoteLetters.map(renderQuoteChar)}
            <span>{` [${quote.text.split("").length}] [${
              quote.text.split(" ").length
            }]`}</span>
          </div>
          <i style={{ color: "#FCA311" }}>
            &mdash;{" "}
            <h2 className="author" style={{ display: "inline" }}>
              {" "}
              {quote.author}
            </h2>
          </i>
          <br />
          <textarea
            className="content-input"
            autofocus
            onChange={handleChange}
          ></textarea>
        </div>
        <Speedometer rotate={50}></Speedometer>
      </div>
      <Stat
        typingContent={quote}
        type="quote"
        incorrect={incorrectLetters}
      ></Stat>
    </div>
  )
}

export default Quote
