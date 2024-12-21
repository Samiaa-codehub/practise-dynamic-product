
import React from 'react'

const productcard = ({params}) => {
    console.log(params)
  return (
    <div className='border w-[327px]  text-center bg-pink-200 mt-4' > <h1 className='text-4xl  text-gray-600'> Product Detail Page</h1>
    
        <h2 className='text-2xl mt-4'> Mobile:{params.productcard}</h2>
        <p className='text-2xl'>price:{params.productprice}</p>
        <p className='text-2xl'>modle:{params.productmodile}</p>
        
    </div>
  )
}

export default productcard