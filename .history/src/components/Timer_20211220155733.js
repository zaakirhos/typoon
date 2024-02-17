import React, {useState, useEffect} from 'react'

const Timer = ({initialTime}) => {
      const [seconds, setSeconds] = useState(initialTime)
    useEffect(() => {
      let interval = null
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1)
        }, 1000)
    
      return () => clearInterval(interval)
    }, [seconds])

    return (
        <h1>
            {}
        </h1>
    )
}

export default Timer
