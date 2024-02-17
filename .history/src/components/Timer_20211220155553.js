import React from 'react'

const Timer = ({initialTime}) => {

    useEffect(() => {
      let interval = null
      if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds + 1)
        }, 1000)
      } else if (!isActive && seconds !== 0) {
        clearInterval(interval)
      }
      return () => clearInterval(interval)
    }, [isActive, seconds])
    return (
        <h1>
            
        </h1>
    )
}

export default Timer
