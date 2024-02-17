import React from 'react'
import TypedItem from './TypedItem'

const typedItemList = (items, type) => {
  return (
    {items.map(item => {
        return <TypedItem item={item} type={type} />
    })}
  )
}

export default typedItemList