import React from 'react'

const styles = {
    height: "fit-content",
    width: "20vw",
    color: "white",

}
const TypedItem = ({item, type}) => {
    if (type === "quote") {
        return (
          <div style={styles}>
              <span>{item.text}</span>
              <author>{item.author}</author>
          </div>
        )
    }
    if (type === "word") {
        return (
            <div className="word">
                <p>{item.word}</p>
            </div>
        )
    }
    return null
}

export default TypedItem