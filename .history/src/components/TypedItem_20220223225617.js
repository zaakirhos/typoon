import React from 'react'

const styles = {
    height: "fit-content",
    width: "20vw",
    color: "white"
}
const TypedItem = ({item, type}) => {
    if (type === "quote") {
        return (
            <div className="quote">
                <div className="quote-text">
                    <p>{item.text}</p>
                </div>
                <div className="quote-author">
                    <p>{item.author}</p>
                </div>
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