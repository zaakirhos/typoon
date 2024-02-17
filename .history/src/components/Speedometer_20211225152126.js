import React, {useState, useEffect, useRef} from 'react'
import '../styles/main.scss'
const Speedometer = ({rotate}) => {
    const arrowRef = useRef(null)
    const h = useRef(null)
    const t = useRef(null)
    const o = useRef(null)

    
  useEffect(() => {
        let wpmStr = rotate.toString()
    arrowRef.current.style.transform =
      "rotate(" + (rotate * 2 - 120) + "deg) translateY(-72%)"
    // return () => {
    //   cleanup
    // }
  }, [rotate])

    let renderTicks = () => {
        let ticks = []
        for (let i = 0; i < 130; i++) {
            if(i%10 === 0){
            ticks.push(<div className="tick" key={i}><span></span></div>)
            } else {
            ticks.push(<div className="tick" key={i}></div>)
            }
        }
        return ticks
    }
    return (
      <div class="speedometer">
        <div class="speedometer-inner">
            {renderTicks().map(tick => tick)}
          <div className="arrow" ref={arrowRef}></div>
          <div className="unit"></div>
          <div className="wpm">
            <span className="_" id="h" ref={h}></span>
            <span className="_" id="t" ref={t}></span>
            <span className="_0" id="o" ref={o}></span>
          </div>
        </div>
      </div>
    )
}

export default Speedometer
