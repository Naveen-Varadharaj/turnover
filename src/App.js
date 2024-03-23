import Header from './components/Header';
import Login from './components/Login';
import Protected from './components/Protected';
import Signup from './components/Signup';
import Verify from './components/Verify';
import './index.css';
import { useState, createContext, useEffect } from "react";
import { faker } from '@faker-js/faker';
import axios from 'axios';
export const UserContext = createContext()
function App() {
  const[code,setCode]=useState();
  

  const[details,setDetails]=useState([{
    name:"",
    email:"",
    password:"",
    entdata:[""],
  }])

  const[show,setShow]=useState(false)
  const[view,setView]=useState(false)
  const[currForm, setCurrform]=useState("signup");
  const toogleForm=(formName)=>{
    setCurrform(formName)
 }

 const entries = [];
   for(let i=0;i<100;i++) {
        let val = faker.commerce.department();
        if (entries.includes(val)!==true) {
            entries.push(val);
  
        } 
    }
 


  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://turnover-backend-data.onrender.com/users");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.response.data);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

console.log(data);
  
  
  return (
    <UserContext.Provider value={[code,setCode,show, setShow,entries,details,setDetails, setView, data,setData,view ]}>
    <div className="App">

   
      <Header />
      { (show===false && view ===false) &&( currForm ==="login"? <Login onFormSwitch={toogleForm}/>:  <Signup onFormSwitch={toogleForm}/>)}

      { (show===true && view ===false) && <Verify />}
      
      {  view ===true && <Protected onFormSwitch={toogleForm} />}
   
    </div>

    
    </UserContext.Provider>
  );
}

export default App;
