import React, { useState,useEffect } from 'react'
import { useContext } from "react";
import { UserContext } from '../App';
import axios from 'axios';

export default function Protected(props) {
  // eslint-disable-next-line
  const [code, setCode, show, setShow, entries, details, setDetails, setView, data,,setData] = useContext(UserContext);

  
;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(entries.length / 6);
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
  console.log(details)
let finaldata=[];
if(details.ent!==undefined ){
  finaldata=details.ent;
}
else{
  finaldata=[];
}


const [entry, setEntry] = useState(finaldata);

  const handleClick = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {

      setCurrentPage(pageNumber);
    }
  };
  const endIndex = currentPage * 6;
  const startIndex = endIndex - 6;
  const currentItems = entries.slice(startIndex, endIndex);



  const handleAdd = (item, e) => {

    if (e.target.checked && entry.includes(item) !== true) {
      setEntry([...entry, item])
    }
    else {
      const newEntry = entry.filter((ind) => ind !== item);
      
      setEntry(newEntry);
    }
  }
  


  /******************************* logout***********************************/

 

    const handleLogout = (props) => {
        console.log(user);
        let id = -1;
        let name="";
        let email= "";
        let password= "";
        // eslint-disable-next-line
        user.map((item) => {
            if (item.email === details.email) {
                id = item.id;
                name=item.name;
                email=item.email;
                password=item.password;
               
            }
        })
        
        if(id>0){
            axios.put(`https://turnover-backend-data.onrender.com/users/${id}`, {
                name: name,
                email: email,
                password: password,
                entrydata: entry,
            })
                .then(response => console.log(response.data));

                
          }
          
          props.onFormSwitch("signup")
          setShow(false);
          setView(false);
         
        


    }
  /******************************* logout-end***********************************/



  return (
    <>
    <div className='my-3 px-5 flex justify-end'>
            <button className='border-2 px-5 rounded-lg bg-slate-600 mt-2 me-10 text-stone-200 py-1 hover:bg-stone-500 hover:text-black' onClick={()=>handleLogout(props)}>Logout</button>
        </div>
    <div className='md:w-1/2 lg:w-1/4 border-2 flex flex-col mx-auto py-8 mt-10 rounded-lg px-5 w-11/12 '>
      <h1 className='mx-auto mb-3 text-2xl font-semibold '>Please mark your interests!</h1>

      <h1 className='mx-auto mb-4 text-sm'>We will keep you notified.</h1>

      <h1 className='mb-3'>My saved interests!</h1>
      <div className=''>
        {
          currentItems.length > 0 && currentItems.map((item, index) => {
            return (

            (entry!==undefined && entry.includes(item))?<div className='my-2 flex gap-x-2 ' key={(currentPage * 10) + index + 1} >
                  <input type="checkbox" defaultChecked id={(item)} className='accent-gray-950 si my-auto' onClick={(e) => handleAdd(item, e)} />
                  <label for={(item)} className='text-sm my-auto '> {item}</label>

                </div>:
                <div className='my-2 flex gap-x-2' key={(currentPage * 10) + index + 1}  >

                  <input type="checkbox" id={(item)} className='accent-gray-950 si my-auto' onClick={(e) => handleAdd(item, e)} />
                  <label for={(item)} className='text-sm my-auto  '  > {item}</label>

                </div>
                
                )

            
          })
        }
      </div>

      <footer className='mt-5 mx-auto'>
        <button onClick={() => handleClick(1)} className='  mx-1 px-1 li-pg'>
          {'<<'}
        </button>
        <button onClick={() => handleClick(currentPage - 1)} className=' mx-1 px-1 li-pg '>
          {'<'}
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => handleClick(index + 1)} className={currentPage === index + 1 ? 'text-black font-semibold mx-1 px-2' : " li-pg mx-1 px-2"}>
            {index + 1}
          </button>
        ))}
        <button onClick={() => handleClick(currentPage + 1)} className='  mx-1 px-1 li-pg'>
          {'>'}
        </button>
        <button onClick={() => handleClick(totalPages)} className='  mx-1 px-1 li-pg'>
          {'>>'}
        </button>
      </footer>
     


    </div>
    </>
  )
}
