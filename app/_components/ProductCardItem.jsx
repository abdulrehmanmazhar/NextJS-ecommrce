import React from 'react'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function ProductCardItem({product}) {
  return (
    <div>
      <Card className="p-3">
        <Image src={product?.image} alt={product.name} width={400} height={300}></Image>
        <div className='mt-3'>
          <h2 className='font-blod text-xl'>{product.name}</h2>
          <h2 className='font-bold text-2xl'>{product?.price}</h2>
          <div className='mt-3 justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <Image className='rounded-full' src={product?.user?.image} width={20} height={20} alt='user'></Image>
              <h2 className='text-sm text-gray-400'>{product?.user.name}</h2>
            </div>
            <Button className="mt-3 w-full">Add to Cart</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ProductCardItem