import React from "react"

const TypedItem = ({ item, type }) => {
  if (type === "quote") {
    return (
      <blockqu className="item">
        <span>{item.text}</span>
        <p>{item.author}</p>
      </block>
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
