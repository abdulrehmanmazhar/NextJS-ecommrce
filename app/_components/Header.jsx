import { ShoppingBag } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
function Header() {

  const menuList =[
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Store",
      path: "/store"
    },
    {
      name: "Explore",
      path: "/explore"
    },
  ]
  return (
    <div className='flex p-4 px-10 md:px-32 lg:px-48 bg-primary border-b-2 border-black justify-between items-center'>

    <h2 className='font-bold text-lg bg-black text-white px-2 p-1'>RETRO MARKET</h2>

    <ul className="hidden md:flex gap-5 ml-8">
  {menuList.map((menu, index) => (
    <li
      className="border-2 border-primary hover:border-white px-2 py-1 cursor-pointer transition-colors duration-200 ease-in-out"
      key={index}
      title={menu?.name}
    >
      {menu?.name}
    </li>
  ))}
</ul>

    <div className='flex gap-5 items-center'>
      <ShoppingBag/>
      <Button className="bg-red-500 hover:bg-red-500">Start Selling</Button>
    </div>
    </div>
  )
}

export default Header