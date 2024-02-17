import React from 'react'
import {useEffect} from 'react'
import TypedItem from './TypedItem'

const typedItemList = (items, type) => {

    
  return (
    <div className="typed-item-list">
        {items.map(item => (
            <TypedItem item={item} type={type} />
        ))}
    </div>
  )
}

export default typedItemList