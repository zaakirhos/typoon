import React, { useState, useEffect, useRef } from "react"
import "../styles/main.scss"
import styled from "styled-components"
import { BsFillPlayFill } from "react-icons/bs"
import { AiOutlinePause } from "react-icons/ai"
import Speedometer from "./Speedometer"

const Stat = ({ typingContent, type, incorrect, startHistory, start }) => {
  let wordNumber = 0
  let contentLength = 0
  if (type === "quote") {
    wordNumber = typingContent.text.split(" ").length
    contentLength = typingContent.text.length
  } else {
    wordNumber = 1
    contentLength = typingContent.word.length + typingContent.definition.length
  }
  const [seconds, setSeconds] = useState(0)
  const [times, setTimes] = useState([])
  const [incorrectPerQuote, setIncorrectPerQuote] = useState([incorrect])
  const [wordLengths, setWordLengths] = useState([wordNumber])
  const [contentLengths, setContentLengths] = useState([contentLength])
  const [firstRender, setFirstRender] = useState(false)
  const [currentTypedQuoteNumber, setCurrentTypedQuoteNumber] = useState(0)

  useEffect(() => {
    let interval = null

    if (start) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000)
    }
    if (!start) {
      setSeconds(0)
    }
    return () => clearInterval(interval)
  }, [seconds, start])

  useEffect(() => {
    if (firstRender) {
      setWordLengths([...wordLengths, wordNumber])
      setContentLengths([...contentLengths, contentLength])
      times.push(seconds)
      setIncorrectPerQuote([...incorrectPerQuote, incorrect])
      setCurrentTypedQuoteNumber(currentTypedQuoteNumber + 1)
      setSeconds(0)
    }
    setFirstRender(true)
  }, [typingContent])

  function totalTime() {
    if (times.length > 0) {
      return times.reduce((acc, curr) => {
        return acc + curr
      }, 0)
    }
    return 0
  }

  function totalTimeInHHMMSS() {
    return new Date(totalTime() * 1000).toISOString().substring(11, 19)
  }

  function calculateWPM() {
    if (times.length !== 0 && wordLengths.length !== 0) {
      //remove the last element from wordLengths, stopped so the last quote is not typed
      let totalSeconds = totalTime()
      let totalWords = wordLengths
        .slice(0, wordLengths.length - 1)
        .reduce((acc, curr) => {
          return acc + curr
        }, 0)

      if (totalSeconds !== 0) {
        let wpm = Math.floor(totalWords / (totalSeconds / 60))
        return wpm
      }
    }
    return 0
  }

  function calculateAccuracy() {
    let totalIncorrect = 0
    if (incorrectPerQuote.length !== 0) {
      incorrectPerQuote.forEach(element => {
        if (Object.keys(element).length !== 0) {
          for (const [key, value] of Object.entries(element)) {
            totalIncorrect += value[1] //value[2] is the frequency of mistyped letter
          }
        }
      })
    }
    let totalLength = contentLengths.reduce((acc, curr) => {
      return acc + curr
    }, 0)
    return Math.round(((totalLength - totalIncorrect) / totalLength) * 100, 2)
  }
  let renderStatOnStop = () => {
    if (startHistory % 2 === 0 && startHistory !== 0) {
      console.log(totalTime())
      console.log(wordLengths)
      return (
        <div className="afterward-stat">
          {/* <h1>
            WPM : <span className="speed">{calculateWPM()}</span>
          </h1> */}
          <Speedometer rotate={calculateWPM()} />
          <h1 className="accuracy">Accuracy: {calculateAccuracy()}</h1>
          <h1>
            <span className="time">{totalTimeInHHMMSS()}</span>
          </h1>
        </div>
      )
    }

    return null
  }

  function clickHandler() {
    console.log("clicked")
  }

  return (
    <div className="numbers-container">
      <div className="stat-container">
        {/* <button onClick={startHandler}>
          <h3>{start ? "Stop" : "Start"}</h3>
        </button> */}
        {/* <StyledDiv class="circle" onClick={startHandler} clicked={start}>
          <h3>{start ? <AiOutlinePause size="50" color="white" /> : <BsFillPlayFill size="50" color="white"/>}</h3>
        </StyledDiv> */}

        <div className="typed-counter">
          <h1>{currentTypedQuoteNumber}</h1>
        </div>

        <h1 className="time"> {seconds}</h1>
      </div>
      {renderStatOnStop()}
      {/* <StyledDiv class="circle" onClick={clickHandler}></StyledDiv> */}
    </div>
  )
}

export default Stat

const StyledDiv = styled.div`
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
