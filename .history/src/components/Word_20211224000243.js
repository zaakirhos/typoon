import React, { useState, useEffect, useRef } from "react"
import Stat from "../components/Stat"
import {Link} from 'gatsby'
import '../styles/main.scss'
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
    allWords[Math.floor(Math.random() * allWords.length) + 1].replace(/./, c => c.toUpperCase())
  )
  const wordLetters = word.split("")
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

    if (e.target.value === word) {
      renderNextQuote()
      e.target.value = ""
    }
  }

  let renderNextQuote = () => {
    setWord(
      allWords[Math.floor(Math.random() * allWords.length) + 1].replace(
        /./,
        c => c.toUpperCase()
      )
    )
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
      <span className="content-char" key={index} style={{ color: { defaultQuoteColor } }}>
        {char}
      </span>
    )
  }

  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>
      <div className='container'>
        <div className='content-display' ref={wordRef} style={{ color: "#e5e5e5" }}>
          {wordLetters.map(renderQuoteChar)}
          <span>{`  [${word.split(" ").length}]`}</span>
        </div>
        <br />
        <textarea className="content-input" autofocus onChange={handleChange}></textarea>
      </div>
      <Stat
        typingContent={word}
        type="word"
        incorrect={incorrectLetters}
      ></Stat>
    </div>
  )
}

export default Word

