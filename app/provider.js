import React from 'react'
import Header from './_components/Header'

function Provider({children}) {
  return (
    <div>
        <Header></Header>
        <div>
            {children}
        </div>
    </div>
  )
}

export default Provider