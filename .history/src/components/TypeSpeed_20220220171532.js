import React, { useState, useEffect, useRef } from "react"
import Stat from "./Stat"
import Speedometer from "./Speedometer"
// import Definition from "./Definition"
import styled from "styled-components"
import { BsFillPlayFill } from "react-icons/bs"
import { AiOutlinePause } from "react-icons/ai"
import { Link } from "gatsby"
import "../styles/main.scss"

function TypeSpeed({ textArray, type }) {
  //Data preprocessing
  let flattenedArray = []
  if (type === "quote") {
    flattenedArray = textArray.reduce((acc, curr) => {
      return [...acc, ...curr.node.quotes]
    }, [])
  }
  if (type === "word") {
    flattenedArray = textArray.reduce((acc, curr) => {
      return [...acc, ...curr.node.words]
    }, [])
  }
  // console.log(flattenedArray)
  // hooks
  const [typingText, setQuote] = useState(
    flattenedArray[Math.floor(Math.random() * flattenedArray.length) + 1]
  )
  const [items, setItems] = useState(flattenedArray)
  const typeLetters =
    type === "quote"
      ? typingText.text.split("")
      : [...typingText.word.split(""), ..." : ".split(""), ...typingText.definition.split("")]
  const [defaultQuoteColor, setDefaultQuoteColor] = useState("#14213D")
  const quoteRef = useRef(null)
  const [incorrectLetters, setIncorrectLetters] = useState({})
  const [seconds, setSeconds] = useState(1)
  const [start, setStart] = useState(false)
  const [startHistory, setStartHistory] = useState(0)
  // const [rotate, setRotate] = useState(0);
  console.log(typeLetters)
  //functions
  let handleChange = e => {
    e.preventDefault()
    let interval
    if (e.target.value !== "") {
      if (e.target.value.length >= 1 && !start) {
        setStart(true)
        setStartHistory(startHistory => startHistory + 1)
      }
      // interval = setInterval(() => {
      //    setSeconds(seconds => seconds + 1)
      //  }, 1000)
      console.log(seconds)
      console.log(e.target.value.split(""))
      
      // setRotate(Math.floor(currentLength / (seconds / 60)));
      e.target.value.split("").forEach((letter, index) => {
        if (letter === typeLetters[index]) {
          quoteRef.current.children[index].style.backgroundColor = "#0EAD69"
        }
        if (letter !== typeLetters[index] && index < typeLetters.length) {
          // console.log(e.target.value.length)
          // console.log(e.target.value.split(""))
          quoteRef.current.children[index].style.backgroundColor = "red"
          // console.log("incorrect letter; you typed ", letter, " and the correct letter is ", quoteLetters[index])
          if (!incorrectLetters.hasOwnProperty(index)) {
            // console.log(e.target.value.length)
            // console.log(e.target.value.split(""))
            setIncorrectLetters({
              ...incorrectLetters,
              [index]: [typeLetters[index], 1, letter],
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
    for (let index = unTypedLength; index < typeLetters.length; index++) {
      quoteRef.current.children[index].style.backgroundColor = defaultQuoteColor
    }

    if (e.target.value.split("").length === typeLetters.length) {
      renderNextQuote()
      clearInterval(interval)
      e.target.value = ""
    }
  }

  let renderNextQuote = () => {
    setQuote(
      flattenedArray[Math.floor(Math.random() * flattenedArray.length) + 1]
    )
  }

  useEffect(() => {
    for (let index = 0; index < quoteRef.current.children.length; index++) {
      quoteRef.current.children[index].style.backgroundColor = defaultQuoteColor
    }
    // console.log("incorrectLetters: ", incorrectLetters)
    setIncorrectLetters(0)
    setSeconds(1)
  }, [typingText, start])

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
    setStartHistory(startHistory + 1)
  }

  function renderSideData() {
    if (type === "quote") {
      return (
        <i style={{ color: "#FCA311" }}>
          &mdash;{" "}
          <h2 className="author" style={{ display: "inline" }}>
            {" "}
            {type === "quote" ? typingText.author : ""}
          </h2>
        </i>
      )
    }
    return null
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
            {typeLetters.map(renderQuoteChar)}
            <span>
              {type === "quote"
                ? `[${typingText.text.split("").length}] [${
                    typingText.text.split(" ").length
                  }]`
                : `[${typingText.word.split("").length}]`}
            </span>
          </div>
          {renderSideData()}
          <br />
          <textarea
            className="content-input"
            autofocus
            onChange={handleChange}
          ></textarea>
        </div>
        {/* <input
          type="checkbox"
          style={{ height: "40px", width: "40px", borderRadius: "5px" }}
        ></input>
        <label>Exact</label> */}
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
        typingContent={typingText}
        incorrect={incorrectLetters}
        type={type}
        start={start}
        startHistory={startHistory}
      ></Stat>
    </div>
  )
}

export default TypeSpeed

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
