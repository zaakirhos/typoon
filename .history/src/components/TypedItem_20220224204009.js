import React from "react"

const TypedItem = ({ item, type }) => {
  if (type === "quote") {
    return (
      <blockquote className="item">
        {item.text}</span>
        <p>{item.author}</p>
      </blockquote>
    )
  }
  if (type === "word") {
    return (
      <div className="item">
        <p>{item.word}</p>
      </div>
    )
  }
  return null
}

export default TypedItem
