import React, {useState, useEffect} from 'react'

const Timer = ({, quote}) => {
      const [seconds, setSeconds] = useState(initialTime)

    useEffect(() => {
      let interval = null
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1)
        }, 1000)
    
      return () => clearInterval(interval)
    }, [quote, seconds])

    return (
        <h1>
            {seconds}
        </h1>
    )
}

export default Timer
