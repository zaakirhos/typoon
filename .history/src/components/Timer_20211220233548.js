import React, {useState, useEffect} from 'react'

const Timer = ({quote}) => {
      const [seconds, setSeconds] = useState(0)
        const [hasStopped, setHasStopped] = useState(false)

    useEffect(() => {
      let interval = null
        
        if (!hasStopped) {
            interval = setInterval(() => {
          setSeconds(seconds => seconds + 1)
        }, 1000)
        }
    
      return () => clearInterval(interval)
    }, [ seconds])

    useEffect(() => {
        console.log("QUote has changed");
        setSeconds(0)
    }, [quote])

    return (
      <>
        <h1>{seconds}</h1>
        <button onClick={() => setHasStopped(!hasStopped)}>Stop</button>
      </>
    )
}

export default Timer
