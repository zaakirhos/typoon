import React, {useState, useEffect, useRef} from 'react'

const Speedometer = () => {

    let renderTicks = () => {
        let ticks = []
        for (let i = 0; i < 100; i++) {
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
          <div class="arrow" ref={arrowRef}></div>
          <div class="unit"></div>
          <div class="wpm">
            <span class="_" id="h"></span>
            <span class="_" id="t"></span>
            <span class="_0" id="o"></span>
          </div>
        </div>
      </div>
    )
}

export default Speedometer
