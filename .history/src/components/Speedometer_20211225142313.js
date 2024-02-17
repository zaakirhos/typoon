import React from 'react'

const Speedometer = () => {

    let renderTicks = () => {
        let ticks = []
        for (let i = 0; i < 100; i++) {
            ticks.push(<div className="tick" key={i}></div>)
        }
    return (
      <div class="speedometer">
        <div class="speedometer-inner">
          <div class="tick">
            <span></span>
          </div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick">
            <span></span>
          </div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick">
            <span></span>
          </div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick">
            <span></span>
          </div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick">
            <span></span>
          </div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick">
            <span></span>
          </div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick">
            <span></span>
          </div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick">
            <span></span>
          </div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick">
            <span></span>
          </div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick">
            <span></span>
          </div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick">
            <span></span>
          </div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick">
            <span></span>
          </div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick"></div>
          <div class="tick">
            <span></span>
          </div>
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
