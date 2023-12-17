import React from 'react'
import Nav from './Nav';
import axios from 'axios';
import { useParams } from 'react-router-dom'

export default function ViewDetails() {

    const {id} = useParams();
    // const [product,setProduct] = React.useState("")
    const [name,setName] = React.useState("")
    const [img,setImg] = React.useState("")
    const [des,setDes] = React.useState("");
    const [price,setPrice] = React.useState("");

    React.useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(function (response) {
          setName(response.data.title);
          setImg(response.data.image);
          setDes(response.data.description);
          setPrice(response.data.price)
        })

    },[])


    const AddToCart=()=>{

        
    }
 

  return (
    <>
    <Nav></Nav>

   <button className='text-white mt-3 ml-3 bg-[rgb(25,88,81)] py-2 pl-3 pr-3 rounded-md font-bold'>
    <a href='/'>Back to home</a>
    </button>
    

    <div className='h-screen flex justify-center items-center'>
     <div className='w-[60vw] h-[70vh] pt-6 pb-6 border flex justify-around items-center rounded-md max-sm:w-[80vw]'>
    
    <div>
    <img className='h-[50vh] ml-10 max-sm:h-[20vh] max-sm:ml-5' src={img}></img>
    </div>

    <div className='w-[30vw] flex flex-col justify-center max-sm:w-[30vw]'>
    <p className='font-bold mb-6'>{name}</p>
     <p className='mb-4 text-justify'>{des}</p>
     <p className='mb-6'><span className='font-bold text-red-700'>Price : </span>{price} $</p>
     <button onClick={AddToCart} className='bg-[rgb(255,216,20)] w-[15vw] font-bold py-2 pl-3 pr-3 rounded-md max-md:w-[30vw]'>Add to cart</button>
    </div>


     </div>

    </div>
    
    
    </>
  )
}
