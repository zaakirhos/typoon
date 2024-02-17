import React, { useState, useEffect, useLayoutEffect, useRef } from "react"
// import "../styles/Quote.css"
import Stat from "../components/Stat"
import styled from "styled-components"

/*
1. Select specific category of quotes
2. Should it be random or ordered and cycled?
*/

function Word({ words }) {
  //Data preprocessing
  let allWords = words.reduce((acc, curr) => {
    return [...acc, ...curr.node.wordSet]
  }, [])

  // hooks
  const [word, setWord] = useState(
    allWords[Math.floor(Math.random() * allWords.length) + 1]
  )
  const wordLetters = word.text.split("")
  const [defaultQuoteColor, setDefaultQuoteColor] = useState("#e5e5e5")
  const wordRef = useRef(null)
  const [incorrectLetters, setIncorrectLetters] = useState({})

  //functions
  let handleChange = e => {
    e.preventDefault()
    if (e.target.value !== "") {
      e.target.value.split("").forEach((letter, index) => {
        if (letter === wordLetters[index]) {
          wordRef.current.children[index].style.color = "#0EAD69"
        }
        if (letter !== wordLetters[index] && index < wordLetters.length) {
          // console.log(e.target.value.length)
          // console.log(e.target.value.split(""))
          wordRef.current.children[index].style.color = "red"
          // console.log("incorrect letter; you typed ", letter, " and the correct letter is ", quoteLetters[index])
          if (!incorrectLetters.hasOwnProperty(index)) {
            // console.log(e.target.value.length)
            // console.log(e.target.value.split(""))
            setIncorrectLetters({
              ...incorrectLetters,
              [index]: [wordLetters[index], 1, letter],
            })
          }
          if (
            e.target.value.length - 1 === index &&
            incorrectLetters.hasOwnProperty(index) &&
            e.target.value[index] !== incorrectLetters[index][2]
          ) {
            // console.log(e.target.value.length)
            // console.log(e.target.value.split(""))
            incorrectLetters[index][1] += 1
            incorrectLetters[index][2] = e.target.value[index]
            setIncorrectLetters({ ...incorrectLetters })
          }
          // console.log("incorrect letters: ", incorrectLetters)
        }
      })
    }
    let unTypedLength =
      e.target.value !== "" ? e.target.value.split("").length : 0
    for (let index = unTypedLength; index < wordLetters.length; index++) {
      wordRef.current.children[index].style.color = defaultQuoteColor
    }

    if (e.target.value === word.text) {
      renderNextQuote()
      e.target.value = ""
    }
  }

  let renderNextQuote = () => {
    setWord(allWords[Math.floor(Math.random() * allWords.length) + 1])
  }

  useEffect(() => {
    for (let index = 0; index < wordRef.current.children.length; index++) {
      wordRef.current.children[index].style.color = defaultQuoteColor
    }
    // console.log("incorrectLetters: ", incorrectLetters)
    setIncorrectLetters(0)
  }, [word])

  let renderQuoteChar = (char, index) => {
    return (
      <QuoteChar key={index} style={{ color: { defaultQuoteColor } }}>
        {char}
      </QuoteChar>
    )
  }

  return (
    <div>
      <QuoteContainer>
        <QuoteDisplay ref={wordRef} style={{ color: "#e5e5e5" }}>
          {wordLetters.map(renderQuoteChar)}
          <span>{`  [${word.text.split(" ").length}]`}</span>
        </QuoteDisplay>
        <i style={{ color: "#FCA311" }}>
          &mdash;{" "}
          <h2 className="author" style={{ display: "inline" }}>
            {" "}
            {word.author}
          </h2>
        </i>
        <br />
        <QuoteInput autofocus onChange={handleChange}></QuoteInput>
      </QuoteContainer>
      <Stat quote={word} incorrect={incorrectLetters}></Stat>
    </div>
  )
}

export default Word

const QuoteChar = styled.span`
  font-size: 2.5em;
  color: #e5e5e5;
`

const QuoteContainer = styled.div`
  background-color: #14213d;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 60vw;
  height: 50vh;
  max-width: 90%;
`
const QuoteDisplay = styled.div`
  margin-bottom: 1rem;
  margin-left: calc(0.4rem + 2px);
  margin-right: calc(0.4rem + px);
`

const QuoteInput = styled.textarea`
  background-color: transparent;
  border: 3px solid #eead78;
  outline: none;
  width: 100%;
  height: 10rem;
  resize: none;
  padding: 0.4rem 0.4rem;
  font-size: 2rem;
  border-radius: 0.5rem;
  color: #e5e5e5;
  font-family: Arial, Helvetica, sans-serif;
`