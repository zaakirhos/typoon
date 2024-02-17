import React from 'react'

const styles = {


}
const TypedItem = ({item, type}) => {
    if (type === "quote") {
        return (
          <div className="item">
              <span>{item.text}</span>
              <p>{item.author}</p>
          </div>
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