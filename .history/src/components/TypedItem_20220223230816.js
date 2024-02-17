import React from 'react'

const styles = {
    height: "fit-content",
    width: "20vw",
    color: "white",
    padding: "10px",

}
const TypedItem = ({item, type}) => {
    if (type === "quote") {
        return (
          <div style={styles}>
              <span>{item.text}</span>
              <p>{item.author}</p>
          </div>
        )
    }
    if (type === "word") {
        return (
          <div style={styles}>
            <p>{item.word}</p>
          </div>
        )
    }
    return null
}

export default TypedItem