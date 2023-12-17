import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

export default function CeckoutPage() {
  return (
   <>
   <Nav/>
   <div className='h-screen flex justify-center'>
    <div className=' flex border justify-around h-fit w-[60vw] mt-20 mb-20 max-sm:w-[80vw]'>

     <div>
        <p>All Products</p>
     </div>

     <div className='flex flex-col items-center mt-10 mb-20'>
      
    <p className='font-bold text-xl mb-10'>Shipping information </p>
    <div className='flex flex-col gap-2 w-[20vw] max-sm:w-[40vw]'>
     <label>Enter your Address</label>
     <input className="border py-2 rounded-md pl-2 pr-2"></input>

     <label>Enter your City</label>
     <input className="border py-2 rounded-md pl-2 pr-2"></input>

     <label>Enter your Country</label>
     <input className="border py-2 rounded-md pl-2 pr-2"></input>

     <p className='font-bold mt-8'>Payment Details</p>
     <input className="border py-2 rounded-md pl-2 pr-2" placeholder='Enter Name on card'></input>
     <input className="border py-2 rounded-md pl-2 pr-2" placeholder='Enter IBAN'></input>



     </div>
     <Link to={"/"}>
    <button  className='bg-[rgb(255,216,20)] mt-6 w-[15vw] font-bold py-2 pl-3 pr-3 rounded-md max-sm:w-[30vw]'>Place Order</button>
    </Link>
     </div>


    </div>

   </div>
   
   </>
  )
}
