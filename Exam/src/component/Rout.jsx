import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Nav from './Nav'
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'
import ViewDetails from './ViewDetails'
import ShoppingCart from './ShoppingCart'
import CeckoutPage from './CeckoutPage'
import ErrorPage from './ErrorPage'

export default function Rout() {
  return (
   <>
    
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/SignUp' element={<SignUp/>}></Route>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/ViewDetails/:id' element={<ViewDetails/>}></Route>
    <Route path='/ShoppingCart' element={<ShoppingCart/>}></Route>
    <Route path='/CeckoutPage' element={<CeckoutPage/>}/>

    <Route path='/*' element={<ErrorPage/>}/>

   </Routes>
   
   </>
  )
}
