import React, { useState, useEffect } from 'react'

import { useContext } from "react";
import { UserContext } from '../App';
import axios from 'axios';
export default function Login(props) {
  // eslint-disable-next-line
  const [code, setCode, show, setShow, entries, details, setDetails, setView, data, setData,] = useContext(UserContext);
  const initialState = {
    email: "",
    password: "",
  }
  const [logindetails, setLogin] = useState(initialState);

  const [user, setUser] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://turnover-backend-data.onrender.com/users");
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.response.data);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);





  const handleLogin = (e) => {
    e.preventDefault();
    
    let f=0;
    // eslint-disable-next-line
      user.map((item) => {
        if (item.email === logindetails.email && item.password === logindetails.password) {
          f=1;
          setDetails({
            name: item.name, email: item.email,
            password: item.password, ent: item.entrydata
          })
          
          setView(true);
          setLogin(initialState)
          
        }
      })
    
  if(f===0){
    alert("Email or Password Invalid !!")
  }
  }

  return (
    <div className='md:w-1/2 lg:w-1/4 border-2 flex flex-col mx-auto py-8 mt-10 rounded-lg px-5 w-11/12'>
      <h1 className='mx-auto mb-3 text-2xl font-semibold '>Login</h1>
      <h1 className='mx-auto text-lg font-semibold '>Welcome back to ECOMMERCE</h1>
      <h1 className='mx-auto mb-4 text-sm'>The next gen business marketplace</h1>
      <form className='flex flex-col gap-y-2'>
        <label>
          Email
        </label>
        <input type='email' placeholder='Enter' className='mb-4 border-2 outline-none rounded-md py-1 px-2' value={logindetails.email} onChange={(e) => { setLogin({ ...logindetails, email: e.target.value }) }} />

        <label>
          Password
        </label>
        <input type='password' placeholder='Enter' className='mb-4 border-2 outline-none rounded-md py-1 px-2' value={logindetails.password} onChange={(e) => { setLogin({ ...logindetails, password: e.target.value }) }} />

        <button className='mb-4 bg-black text-white rounded-lg py-3' onClick={(e) => handleLogin(e)}>LOGIN</button>
      </form>
      <div className='mt-5 mb-8 mx-auto' >
        <h1>Don’t have an Account? <span className='font-semibold cursor-pointer' onClick={() => props.onFormSwitch("signup")}>SIGNUP</span> </h1>
      </div>

    </div>
  )
}
