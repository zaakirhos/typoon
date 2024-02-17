import React from "react"
import { useEffect, useState } from "react"
import TypedItem from "./TypedItem"

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "fit-content",
}
const TypedItemList = ({ items, type }) => {
  console.log(items)
  const [currentItems, setCurrentItems] = useState(items)

  useEffect(() => {
    setCurrentItems(items)
  }, [items])

  return (
    <div style={styles}>
      {currentItems.map(item => (
        <TypedItem item={item} type={type} />
      ))}
    </div>
  )
}

export default TypedItemList
