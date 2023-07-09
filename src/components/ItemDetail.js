import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetail = () => {
  const { itemId } = useParams()

  // Find the selected item from the list
  const selectedItem = items.find((item) => item.id === parseInt(itemId))

  if (!selectedItem) {
    return <div>Item not found</div>
  }

  return (
    <div>
      <h2>Item Details</h2>
      <h3>{selectedItem.name}</h3>
      <p>{selectedItem.description}</p>
    </div>
  )
}

export default ItemDetail
