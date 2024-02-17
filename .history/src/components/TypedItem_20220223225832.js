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
              <p>{item.text}</p>
              <span>{item.author}</span>
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