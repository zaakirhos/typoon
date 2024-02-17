import React from "react"

const TypedItem = ({ item, type }) => {
  if (type === "quote") {
    return (
      <blockquote className="otro-blockquote">
        {item.text}
        <span>{item.author}</span>
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
