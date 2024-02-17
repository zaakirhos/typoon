import React from "react"
import { useEffect, useState } from "react"
import TypedItem from "./TypedItem"

const TypedItemList = (items, type) => {
  const [currentItems, setCurrentItems] = useState()

  useEffect(() => {
    setCurrentItems(items)
  }, [items])

  return (
    <div className="typed-item-list">
      {currentItems.map(item => (
        <TypedItem item={item} type={type} />
      ))}
    </div>
  )
}

export default TypedItemList
