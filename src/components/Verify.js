import React, { useState } from 'react'
import { useContext } from "react";
import { UserContext } from '../App';

export default function Verify() {
// eslint-disable-next-line
  const [code,setCode,show, setShow,entries, details,setDetails, setView] = useContext(UserContext);
  const vrem= details.email.slice(0,3)+"****"+ details.email.slice(details.email.length-10,details.email.length);
 
  const initialState={
    a:"",
    b:"",
    c:"",
    d:"",
    e:"",
    f:"",
    g:"",
    h:"",
  }
  const[codeValue,setCodevalue]=useState(initialState)
const handleVerify=()=>{
  const com=""+codeValue.a+codeValue.b+codeValue.c+codeValue.d+codeValue.e+codeValue.f+codeValue.g+codeValue.h;
  if(com===code){
   
    alert("Success!! Code Verified")
    setView(true);
    setCodevalue(initialState)

  }
  else{
    alert(" Invalid Verification Code")
  }
  
}
  return (

    <div className='md:w-1/2 lg:w-1/4 border-2 flex flex-col mx-auto py-8 mt-10 rounded-lg px-5 w-11/12'>
      <h1 className='mx-auto mb-3 text-2xl font-semibold '>Verify your email</h1>
      <p className='text-center mb-5'>Enter the 8 digit code you have received on {vrem}</p>

      <label>
        Code
      </label>
      <div className='grid grid-cols-8 gap-x-2'>
        <input type='number' className=' border-2 outline-none rounded-md py-1 px-1 text-center' value={codeValue.a} onChange={(e)=>setCodevalue({...codeValue,a:e.target.value})} />
        <input type='number' className=' border-2 outline-none rounded-md py-1 px-1 text-center'  value={codeValue.b} onChange={(e)=>setCodevalue({...codeValue,b:e.target.value})}/>
        <input type='number' className=' border-2 outline-none rounded-md py-1 px-1 text-center'  value={codeValue.c} onChange={(e)=>setCodevalue({...codeValue,c:e.target.value})}/>
        <input type='number' className=' border-2 outline-none rounded-md py-1 px-1 text-center'  value={codeValue.d} onChange={(e)=>setCodevalue({...codeValue,d:e.target.value})}/>
        <input type='number' className=' border-2 outline-none rounded-md py-1 px-1 text-center'  value={codeValue.e} onChange={(e)=>setCodevalue({...codeValue,e:e.target.value})}/>
        <input type='number' className=' border-2 outline-none rounded-md py-1 px-1 text-center'  value={codeValue.f} onChange={(e)=>setCodevalue({...codeValue,f:e.target.value})}/>
        <input type='number' className=' border-2 outline-none rounded-md py-1 px-1 text-center'  value={codeValue.g} onChange={(e)=>setCodevalue({...codeValue,g:e.target.value})}/>
        <input type='number' className=' border-2 outline-none rounded-md py-1 px-1 text-center'  value={codeValue.h} onChange={(e)=>setCodevalue({...codeValue,h:e.target.value})}/>
      </div>

      <button  className='mb-4 mt-6 bg-black text-white rounded-lg py-3' onClick={handleVerify}>VERIFY</button>
    </div>

  )
}
