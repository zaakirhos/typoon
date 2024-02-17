import React from "react"

const TypedItem = ({ item, type }) => {
  if (type === "quote") {
    return (
      <blockquote className="quote-item">
        {item.text}
        <span>{item.author}</span>
      </blockquote>
    )
  }
  if (type === "word") {
    return (
      <div className="word-item">
        <span>{item.word}</span>
        <hr/>
      <span>{item.definition}</span>
      </div>
    )
  }
  return null
}

export default TypedItem
