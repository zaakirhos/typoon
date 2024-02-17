import React from 'react'
import {useEffect. useState} from 'react'
import TypedItem from './TypedItem'

const typedItemList = (items, type) => {

useEffect(() => {
 
}, [items])

  return (
    <div className="typed-item-list">
        {items.map(item => (
            <TypedItem item={item} type={type} />
        ))}
    </div>
  )
}

export default typedItemList