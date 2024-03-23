import React, { useState } from 'react'
import { useContext } from "react";
import { UserContext } from '../App';
import axios from 'axios';
import emailjs from 'emailjs-com'
export default function Signup(props) {
  // eslint-disable-next-line
  const [code, setCode, show, setShow, entries, details, setDetails, setView, data] = useContext(UserContext);
  const initialState = {
    name: "",
    email: "",
    password: "",

  }
  const [userdetails, setUserdetails] = useState(initialState)

  let a = Math.floor(Math.random() * 10);
  let b = Math.floor(Math.random() * 10);
  let c = Math.floor(Math.random() * 10);
  let d = Math.floor(Math.random() * 10);
  let e = Math.floor(Math.random() * 10);
  let f = Math.floor(Math.random() * 10);
  let g = Math.floor(Math.random() * 10);
  let h = Math.floor(Math.random() * 10);
  let combinedcode = '' + a + b + c + d + e + f + g + h;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
   if((userdetails.email.length !== 0 && userdetails.name.length !== 0 && userdetails.password.length !== 0)){

    let f = 1;
    for (let i = 0; i < data.length; i++) {
      if (data[i].email === (userdetails.email)) {
        f = 0;
        alert("Email already registered")
        break;
      }
    }
    if (f === 1 ) {
      axios.post('https://turnover-backend-data.onrender.com/users', {
        name: userdetails.name,
        email: userdetails.email,
        password: userdetails.password,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });

      emailjs.send("service_j6qg1jw", "template_lh76rd9", {
        to_name: userdetails.name,
        to_email: userdetails.email,
        from_name:"Ecommerce",
        from_email:"ecommerce@gmail.com",
        message: `Your verification code is: ${combinedcode}`,
      }, "4VSdKAXCEldW_ATap")
        .then((response) => {
          console.log('Email sent successfully:', response);

        })
        .catch((error) => {
          console.error('Email sending failed:', error);

        });

      setShow(true)
      setCode(combinedcode)
      setDetails(userdetails)
      console.log(combinedcode)


    }
  }
    else {
      alert("Enter all input values")
    }

  }


  return (

    <div className='md:w-1/2 lg:w-1/4  border-2 flex flex-col mx-auto py-8 mt-10 rounded-lg px-5 w-11/12 '>
      <h1 className='mx-auto mb-3 text-2xl font-semibold '>Create your account</h1>
      <form className='flex flex-col gap-y-2' >
        <label>
          Name
        </label>
        <input type='text' placeholder='Enter' className='mb-4 border-2 outline-none rounded-md py-1 px-2' required value={userdetails.name} onChange={(e) => { setUserdetails({ ...userdetails, name: e.target.value }) }} />

        <label>
          Email
        </label>
        <input type='email' placeholder='Enter' className='mb-4 border-2 outline-none rounded-md py-1 px-2' required value={userdetails.email} onChange={(e) => { setUserdetails({ ...userdetails, email: e.target.value }) }} />

        <label>
          Password
        </label>
        <input type='password' placeholder='Enter' className='mb-4 border-2 outline-none rounded-md py-1 px-2' required value={userdetails.password} onChange={(e) => { setUserdetails({ ...userdetails, password: e.target.value }) }} />

        <button className='mb-4 bg-black text-white rounded-lg py-3' onClick={(e) => handleSubmit(e)}>CREATE ACCOUNT</button>
      </form>
      <div className='mt-5 mb-8 mx-auto' >
        <h1>Have an Account? <span className='font-semibold cursor-pointer' onClick={() => props.onFormSwitch("login")}>LOGIN</span></h1>
      </div>

    </div>

  )
}
