import React from 'react'
import {useEffect, useState} from 'react'
import TypedItem from './TypedItem'

const typedItemList = (items, type) => {

    const [currentItems, setCurrentItems] = useState(items)

useEffect(() => {
 
}, [items])

  return (
    <div className="typed-item-list">
      {currentItems.map(item => (
        <TypedItem item={item} type={type} />
      ))}
    </div>
  )
}

export default typedItemList