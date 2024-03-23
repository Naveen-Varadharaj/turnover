import React from 'react'
import { useContext } from "react";
import { UserContext } from '../App';

export default function Header() {
// eslint-disable-next-line
    const [code, setCode, show, setShow, entries, details, setDetails, setView, data,setData,view] = useContext(UserContext);
  return (
    <div className='flex flex-col ' >
        <div className='px-10 py-2 '>
            <ul className='flex flex-row gap-x-3 md:justify-end text-txt-li text-sm  justify-center'>
                <li>Help</li>
                <li>Orders & Returns</li>
               { (show===false && view ===false) && <li>Signup/Login</li>}
              { view ===true && <li>Hi, {details.name}</li>}
            </ul>
        </div>
        <div className='px-10 py-2  grid md:grid-cols-3 items-center grid-cols-1 gap-y-3	'>
        <div className='md:me-auto mx-auto'>
            
                <h1 className='font-bold text-3xl'>ECOMMERCE</h1>
            
        </div>
        <div className='mx-auto'>
            <ul className='flex md:flex-row gap-x-4 text-lg font-semibold flex-col'>
                <li>Categories</li>
                <li>Sale</li>
                <li>Clearance</li>
                <li>New stock</li>
                <li>Trending</li>
            </ul>
        </div>
        <div className='flex flex-row gap-x-7 md:justify-end justify-center '>
            
                <div><i className="bi bi-search"></i></div>
                <div><i className="bi bi-cart2"></i></div>
                
            
        </div>
        </div>
        <div className='px-10 py-1  bg-gr-li flex justify-center li-gr h-fit'>
            <h3 > {"<   Get 10% off on business sign up >"}</h3>
        </div>
    </div>
  )
}
