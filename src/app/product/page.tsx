import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ihpone from "../../../public/iphone.png"
import vivo from ".././../../public/vivo.png"

const detail=[
  {
    name:"i-phone",
    description:"The iPhone 16 is a premium smartphone with advanced features,powerful,and a sleek design",
    price:"$120,000",
    href:"product/iphone/120000/2023",
    
  },
  {
    name:"Vivo",
    description:"Vivo smartphone offer innovative design,impressiv camera technology,and reliable performance at competitive price",
    price:"$54,000",
    href:"product/vivo/54000/2020"
  },
  {
    name:"Samsung",
   price:"$55,000",
    description:"Samsung smartphone combine innovative technology, powerful performance, and stylish designs for a permium user experience",
    href:"product/samsung/55000/2023"
  },
  {
    name:"Tecno",
    price:"$30,000",
    description:"Tecno Mobile is a smartphone brand known for offering affordable and feature-rich devices with a focus on emerging markets",
    href:"product/tecno/30000/2020"
  }
]
const Product = () => {
  return (
    <div className='bg-blue-300 h-[100vh]'>
        <h1 className='text-gray-600 text-center text-4xl mb-8'>Store house</h1>
        <ul className='flex mt-8'>
          {detail.map((items,index)=>
    
          <li key={index} className='border w-auto py-4 px-2 ml-8 mx-auto items-center rounded-lg shadow-lg'>
            <Link href={`${items.href}`}>
            <Image 
            src={ihpone}
            alt='profile'
            width={250} height={200} className='rounded-lg'/>
                      <li className='text-2xl text-[white] mt-8 flex justify-between'>{items.name}<span>{items.price}</span></li>
                      </Link>
                      <p className='py-2 w-[275px] text-[white]'>{items.description}</p>
            </li>    
          )}
    
</ul>
          
          
        
    </div>
  )
}

export default Product