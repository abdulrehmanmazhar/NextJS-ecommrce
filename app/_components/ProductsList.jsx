'use client'
import React, { useState, useEffect} from 'react'
import { Button } from '@/components/ui/button'
import Products from "../_mockData/Product.jsx"
import ProductCardItem from './ProductCardItem.jsx'
function ProductsList() {
  const [ProductList, setProductList] = useState([]);

  useEffect(()=>{
    setProductList(Products);
  },[])
  return (
    <div>
      <h2 className='font-bold text-xl flex justify-between items-center'>
        Featured
        <span><Button>View All</Button></span>
      </h2>
      <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5'>
        {ProductList.map((product, index)=>(
          <ProductCardItem product={product} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default ProductsList