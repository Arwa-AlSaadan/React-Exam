import React from 'react'
import axios from 'axios';
import Nav from './Nav'
import { Link } from 'react-router-dom';

export default function Home() {

    const [searchValue,setSearchValue]= React.useState("");
    const [products,setProducts] = React.useState([]);

    React.useEffect(()=>{
        getData();
    },[])

    const getData=()=>{
        axios.get('https://fakestoreapi.com/products')
        .then(res=> {
            setProducts(res.data)
            console.log(res);
        })
    }


  return (
    <>
     <Nav/>
     <div className='h-screen'>
        <div className='h-[10vh] bg-[rgb(25,88,81)] flex justify-center items-center'>
        <input value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} className="border h-[6vh] rounded-md pl-6 pr-6" placeholder='Search'></input>
        </div>

        {searchValue === "" ? (
        <div className='h-fit mt-10 mb-20'>
        <div className='h-fit flex flex-wrap gap-6 justify-center pb-10 max-sm:grid'>
        {products.map((item)=>(
        <div className=' w-[20vw] border rounded-md p-3 flex flex-col justify-center items-center max-sm:w-[60vw]'>
            <img className='h-[30vh]' src={item.image}></img>
            <p className='font-bold text-center'>{item.title}</p>
            <p className='text-red-700'>{item.price} $</p>

            <Link to={`/ViewDetails/${item.id}`}>
            <button  className='text-[rgb(36,133,150)] mt-4 '>View Deatails</button>
            </Link>
        </div>

        ))}
        </div>
        </div>

):(

    <div className='h-fit mt-10 mb-20'>
    <div className='h-fit flex flex-wrap gap-6 justify-center pb-10 max-sm:grid'>
    {products.filter((item)=> item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item)=>(
    <div className=' w-[20vw] border rounded-md p-3 flex flex-col justify-center items-center max-sm:w-[60vw]'>
        <img className='h-[30vh]' src={item.image}></img>
        <p className='font-bold text-center'>{item.title}</p>
        <p className='text-red-700'>{item.price} $</p>

        <Link to={`/ViewDetails/${item.id}`}>
        <button  className='text-[rgb(36,133,150)] mt-4 '>View Deatails</button>
        </Link>
    </div>

    ))}
    </div>
    </div>


)}








     </div>

    
    </>
  )
}
