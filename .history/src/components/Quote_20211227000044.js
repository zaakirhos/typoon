import React, { useState, useEffect, useRef } from "react"
import Stat from "../components/Stat"
import Speedometer from "../components/Speedometer"
import styled from 'styled-components'
import { BsFillPlayFill } from "react-icons/bs"
import { AiOutlinePause } from "react-icons/ai"
import { Link } from "gatsby"
import "../styles/main.scss"

function Quote({ quotes }) {
  //Data preprocessing
  let allQuotes = quotes.reduce((acc, curr) => {
    return [...acc, ...curr.node.quotes]
  }, [])

  // hooks
  const [quote, setQuote] = useState(
    allQuotes[Math.floor(Math.random() * allQuotes.length) + 1]
  )
  const quoteLetters = quote.text.split("")
  const [defaultQuoteColor, setDefaultQuoteColor] = useState("#e5e5e5")
  const quoteRef = useRef(null)
  const [incorrectLetters, setIncorrectLetters] = useState({})
  const [seconds, setSeconds] = useState(1);
  const [start, setStart] = useState(false)
  const [startHistory, ]
  // const [rotate, setRotate] = useState(0);

  //functions
  let handleChange = e => {
    e.preventDefault()
    let interval;
    if (e.target.value !== "") {
      if (e.target.value.length >= 1 && !start) {
        setStart(true)
      }
        // interval = setInterval(() => {
        //    setSeconds(seconds => seconds + 1)
        //  }, 1000)

      let currentLength = e.target.value.split(" ").length;
      console.log(seconds)
      // setRotate(Math.floor(currentLength / (seconds / 60)));
      e.target.value.split("").forEach((letter, index) => {
        if (letter === quoteLetters[index]) {
          quoteRef.current.children[index].style.color = "#0EAD69"
        }
        if (letter !== quoteLetters[index] && index < quoteLetters.length) {
          // console.log(e.target.value.length)
          // console.log(e.target.value.split(""))
          quoteRef.current.children[index].style.color = "red"
          // console.log("incorrect letter; you typed ", letter, " and the correct letter is ", quoteLetters[index])
          if (!incorrectLetters.hasOwnProperty(index)) {
            // console.log(e.target.value.length)
            // console.log(e.target.value.split(""))
            setIncorrectLetters({
              ...incorrectLetters,
              [index]: [quoteLetters[index], 1, letter],
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
    for (let index = unTypedLength; index < quoteLetters.length; index++) {
      quoteRef.current.children[index].style.color = defaultQuoteColor
    }

    if (e.target.value === quote.text) {
      renderNextQuote()
      clearInterval(interval)
      e.target.value = ""
    }
  }

  let renderNextQuote = () => {
    setQuote(allQuotes[Math.floor(Math.random() * allQuotes.length) + 1])
  }

  useEffect(() => {
    for (let index = 0; index < quoteRef.current.children.length; index++) {
      quoteRef.current.children[index].style.color = defaultQuoteColor
    }
    // console.log("incorrectLetters: ", incorrectLetters)
    setIncorrectLetters(0)
    setSeconds(1)
  }, [quote, start])

  let renderQuoteChar = (char, index) => {
    return (
      <span
        className="content-char"
        key={index}
        style={{ color: { defaultQuoteColor } }}
      >
        {char}
      </span>
    )
  }

    function startHandler(e) {
      e.preventDefault()
      setStart(!start)
      // setStartHistory(startHistory + 1)
    }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "80vw",
          // border: "1px solid black",
        }}
      >
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
        {/* <Speedometer rotate={rotate}></Speedometer> */}
      </div>
      <StartDiv class="circle" onClick={startHandler} clicked={start}>
        <h3>
          {start ? (
            <AiOutlinePause size="50" color="white" />
          ) : (
            <BsFillPlayFill size="50" color="white" />
          )}
        </h3>
      </StartDiv>

      <Stat
        typingContent={quote}
        type="quote"
        incorrect={incorrectLetters}
        hasStarted={start}
      ></Stat>
    </div>
  )
}

export default Quote

const StartDiv = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: ${props => (props.clicked ? "#88b04b" : "#ACA990")};
  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  -webkit-transition: ${props =>
    props.clicked ? "height 0.25s ease, width 0.25s ease" : "none"};

  transition: ${props =>
    props.clicked ? "height 0.25s ease, width 0.25s ease" : "none"};

  -webkit-transform: ${props => (props.clicked ? "translate(0%, 0%)" : "none")};

  transform: ${props => (props.clicked ? "translate(0%, 0%)" : "none")};

  &:before,
  &:after {
    content: "";
    display: ${props => (props.clicked ? "block" : "none")};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 50%;
    border: 2px solid #88b04b;
  }

  &:before {
    -webkit-animation: ${props =>
      props.clicked ? "  ripple 2s linear infinite" : "none"};
    animation: ${props =>
      props.clicked ? "  ripple 2s linear infinite" : "none"};
  }
  &:after {
    -webkit-animation: ${props =>
      props.clicked ? " ripple 2s linear 1s infinite" : "none"};
    animation: ${props =>
      props.clicked ? " ripple 2s linear 1s infinite" : "none"};
  }

  /* &:hover:before,
  &:hover:after {
    -webkit-animation: none;
    animation: none;
  } */

  @-webkit-keyframes ripple {
    0% {
      -webkit-transform: scale(1);
    }
    75% {
      -webkit-transform: scale(1.75);
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes ripple {
    0% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.75);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`