import React from 'react'
import Styles from "./ProductSize.module.css"

const ProductSize : React.FC = () => {
  return (
<button className={`w-100 p-1 bg-white  text-dark ${Styles.size} default-border`}>Size</button>
  )
}

export default ProductSize