import React, {useState, useEffect} from 'react'

const Timer = ({quote}) => {
      const [seconds, setSeconds] = useState(0)
        const [hasStopped, setHasStopped] = useState(true)

    useEffect(() => {
      let interval = null
        
        if (!hasStopped) {
            interval = setInterval(() => {
          setSeconds(seconds => seconds + 1)
        }, 1000)
        }
    
      return () => clearInterval(interval)
    }, [seconds, hasStopped])

    useEffect(() => {
        console.log("QUote has changed");
        setSeconds(0)
    }, [quote])

    return (
      <>
        <h1>{seconds}</h1>
        <button onClick={() => setHasStopped(!hasStopped)}><h3>{hasStopped? "Start" : "Stop"}</h3></button>
      </>
    )
}

export default Timer
