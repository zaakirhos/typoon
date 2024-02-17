import React from "react"
import { useEffect, useState } from "react"
import TypedItem from "./TypedItem"


const TypedItemList = ({ items, type }) => {
  console.log(items)
  // all elements except the last one
  const [currentItems, setCurrentItems] = useState(items.slice(0, -1))

  useEffect(() => {
    setCurrentItems(items.slice(0, -1))
  }, [items])

  return (
    <div className="item-list">
      {currentItems.map(item => (
        <TypedItem item={item} type={type} />
      ))}
    </div>
  )
}

export default TypedItemList
