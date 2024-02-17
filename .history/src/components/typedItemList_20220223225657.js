import React from "react"
import { useEffect, useState } from "react"
import TypedItem from "./TypedItem"

const styles = {
  display: ;
  height: "fit-content",
}
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
    </div>
  )
}

export default TypedItemList
