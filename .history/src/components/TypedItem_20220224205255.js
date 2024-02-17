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
        <>{item.word}</>
      </div>
    )
  }
  return null
}

export default TypedItem
