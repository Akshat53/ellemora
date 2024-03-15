import React from 'react'
import FilterBox from '../../components/FilterBox'
import SingleProductView from '../../components/ProductViews/SingleProductView'

const ProductList : React.FC = () => {

  return (
    <div>
        <FilterBox />
        <SingleProductView />

    </div>
  )
}

export default ProductList