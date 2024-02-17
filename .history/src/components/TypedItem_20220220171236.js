import React from 'react'

const TypedItem = (item, type) => {
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
    if 
  return (
    <div>TypedItem</div>
  )
}

export default TypedItem