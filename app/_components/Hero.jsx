import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
function Hero() {
  return (
    <div className='bg-green-700 p-10 px-28 lg:px-36'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 pt-20'>
            <div>
                <h2 className='font-extrabold text-5xl text-white'>Speedup your creative workflow</h2>
                <p className='text-gray-200 mt-5'>Join us to feel extraordinary and out of this world by your creativity</p>
                <div className='flex gap-5 mt-8'>
                    <Button>Explore</Button>
                    <Button className="bg-red-500 hover:bg-red-500">Sell</Button>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <Image className='scale-x-[-1]' src={'/image.png'} alt='hero img' width={300} height={300}/>
            </div>
        </div>
    </div>
  )
}

export default Hero