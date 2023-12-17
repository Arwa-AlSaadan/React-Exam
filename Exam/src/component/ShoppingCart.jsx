import React from 'react'
import Nav from './Nav';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ShoppingCart() {

    const [cart,setCart] = React.useState([]);
    const [productsId,setProductsId] = React.useState([])
    const [userId,setUserId] = React.useState(localStorage.getItem("userId"))

    const[product,setProduct] = React.useState([])
    const [total,setTotal] = React.useState(0);

    React.useEffect(()=>{

        axios.get(`https://fakestoreapi.com/carts/user/${userId}`)
        .then(res => {
            // setCart(res.data[0].products[0]);
            // setProductsId(res.data[0].products[0].productId)
            
            console.log(productsId);
        })

        // axios.get(`https://fakestoreapi.com/products/${productsId}`)
        axios.get('https://fakestoreapi.com/products/1')

        .then(res => {
            // console.log(res.data);
            // const newProduct = 
            // setProduct(...cart ,product)
            // console.log(product);

            setProduct(res.data)
            // console.log(res.data);
        })

        const total = parseInt(parseInt(cart.quantity) * parseInt(product.price))
        setTotal(total)
       
       
    },[]);


    const deleteProduct=(id)=>{
        fetch(`https://fakestoreapi.com/carts/${id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }



  return (
    <>
    <Nav/>
    <div className='h-screen flex flex-col justify-center items-center rounded-md'>
        <div className='w-[70vw] flex flex-col justify-center items-center'>

        <div className='flex flex-col justify-center'>
        {/* {cart.map((item)=>{
            // <p>{item.title}</p>
        })} */}

<div className='w-[60vw] h-fit pt-6 pb-6 border flex justify-around items-center rounded-md max-sm:w-[85vw]'>
    
    <div>
    <img className='h-[25vh] ml-10 max-sm:h-[20vh]' src={product.image}></img>
    </div>

    <div className='w-[30vw] flex flex-col justify-center'>
    <p className='font-bold mb-6'>{product.title}</p>
     <p className='mb-6'><span className='font-bold text-red-700'>Price : </span>{product.price} $</p>
     <p className='mb-6'><span className='font-bold text-red-700'>Quanitity : </span>{cart.quantity} </p>
     <p className='mb-6'><span className='font-bold text-red-700'>Total : </span>{cart.quantity}* {product.price} </p>


    </div>

    <div>
    <button onClick={()=> deleteProduct(cart.id)} className="material-symbols-outlined text-3xl text-red-600">delete</button>
    </div>


     </div>

        </div>

        </div>

        <div className='w-[50vw] flex justify-end mt-6'>
        <Link to={"/CeckoutPage"}>
        <button className='bg-[rgb(255,216,20)] border py-2 rounded-md pl-6 pr-6'>Checkout</button>
        </Link>
        </div>
    </div>
    </>
  )
}
