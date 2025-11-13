import React from 'react';
import Child from './child';

const Parent = () => {
//  const currentTime= new Date().toLocaleTimeString();
//  const currentdate= new Date().toLocaleDateString();
const fruits = ["Apple", "Mango", "Banana"];
  return (
    <>    
     <Child
     
       fruits={fruits} 
     />
</>

  );
};

export default Parent;
