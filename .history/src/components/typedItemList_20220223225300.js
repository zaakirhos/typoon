import React from "react"
import { useEffect, useState } from "react"
import TypedItem from "./TypedItem"

const TypedItemList = ({ items, type }) => {
  console.log(items)
  const [currentItems, setCurrentItems] = useState(items)

  useEffect(() => {
    setCurrentItems(items)
  }, [items])

  return (
    <div >
      {currentItems.map(item => (
        <TypedItem item={item} type={type} />
      ))}
 vis
    </div>
  )
}

export default TypedItemList
