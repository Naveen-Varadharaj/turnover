import React from 'react'
import {faker} from '@faker-js/faker';
export default function Data() {
    const entries = [];
    let i=0;
 while(i<100) {
    let val=faker.commerce.department();
    if(!entries.includes(val))
    {
    entries.push(val);
    
}
i++;
  }
  return (
    <div>
       {
        entries.length>0 && entries.map((item)=>{
            return(
                <div>{item}</div>
            )
        })
       } 
        

    </div>
  )
}
